import { PubSub } from "graphql-subscriptions";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserInput {
  name: string;
  email: string;
}

interface Context {
  pub: PubSub;
}

interface CreateUserArgs {
  data: UserInput;
}

let dataUsers: User[] = [];
const USER_ADDED = "USER_ADDED";

export default {
  Query: {
    users: (): User[] => dataUsers,
  },
  Mutation: {
    createUser: (
      _parent: unknown,
      { data }: CreateUserArgs,
      { pub }: Context
    ): User => {
      const newUser: User = { 
        ...data, 
        id: dataUsers.length + 1 
      };
      dataUsers.push(newUser);
      
      pub.publish(USER_ADDED, {
        userAdded: newUser,
      });
      
      return newUser;
    },
  },
  Subscription: {
    userAdded: {
      subscribe: (_parent: unknown, _args: unknown, { pub }: Context) => {
        return pub.asyncIterator([USER_ADDED]);
      },
    },
  },
};
