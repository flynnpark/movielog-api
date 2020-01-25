import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  VerifiedCallback
} from 'passport-jwt';
import jwt from 'jsonwebtoken';
import User from '../entities/user';

export interface JWTPayload {
  id: number;
  email: string;
}

const TOKEN_KEY = process.env.JSON_WEB_TOKEN || 'DEFAULT_KEY';

const createJWT = (user: User): string => {
  const { id, email } = user;
  const token = jwt.sign({ id, email }, TOKEN_KEY);
  return token;
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: TOKEN_KEY
};

const verifyJWTUser = async (
  payload: JWTPayload,
  done: VerifiedCallback
): Promise<void> => {
  try {
    const user = await User.findOne({ id: payload.id });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const passportAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate(
    ['jwt'],
    { session: false },
    (error: Error, user: User | false) => {
      if (error) {
        console.log(error);
      }
      if (user) {
        req.user = user;
      }
      next();
    }
  )(req, res, next);
};

passport.use(new JWTStrategy(jwtOptions, verifyJWTUser));
passport.initialize();

export { createJWT };
