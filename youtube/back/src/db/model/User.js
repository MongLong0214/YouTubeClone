import { User } from "../schema/user";

class UserMondel {
  static create = async (newUserData) => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { UserMondel };
