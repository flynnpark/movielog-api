import { APIResult } from '../../types/app';
import { MutationEmailSignUpArgs, Resolvers } from '../../types/graphql';
import User from '../../entities/user';

interface SignUpResult {
  token: string;
}

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: MutationEmailSignUpArgs
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
          // const token = createJWT(newUser.id);
          return {
            ok: true,
            message: null,
            result: {
              token: 'token'
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
