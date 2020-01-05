import { APIResult } from '../../types/app';
import { Resolvers, MutationEmailSignInArgs } from '../../types/graphql';
import { createJWT } from '../../utils/auth';
import User from '../../entities/user';

interface SignInResult {
  token: string;
}

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: MutationEmailSignInArgs
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
