import { APIResult } from '../../types/app';
import { createJWT } from '../../utils/auth';
import User from '../../entities/user';
import { Resolvers, MutationSignUpWithEmailArgs } from '../../types/graphql';

interface SignUpResult {
  token: string;
}

const resolvers: Resolvers = {
  Mutation: {
    SignUpWithEmail: async (
      _,
      args: MutationSignUpWithEmailArgs
    ): Promise<APIResult<SignUpResult>> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            message: 'You should log in instead',
            result: null
          };
        } else {
          const newUser = await User.create({ ...args }).save();
          const token = createJWT(newUser);
          return {
            ok: true,
            message: null,
            result: {
              token
            }
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
