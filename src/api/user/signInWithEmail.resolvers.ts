import { APIResult } from '../../types/app';
import { createJWT } from '../../utils/auth';
import User from '../../entities/user';

interface SignInResult {
  token: string;
}

const resolvers = {
  Mutation: {
    SignInWithEmail: async (
      _: any,
      args: any
    ): Promise<APIResult<SignInResult>> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          const token = createJWT(existingUser);
          return {
            ok: true,
            message: null,
            result: {
              token
            }
          };
        } else {
          return {
            ok: false,
            message: '존재하지 않는 회원입니다',
            result: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          message: error.message,
          result: null
        };
      }
    }
  }
};

export default resolvers;
