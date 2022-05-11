import { User } from "../schema/user";
class UserModel {
  static create = async (newUserData) => {
    const newUser = await User.create(newUserData);
    return newUser;
  };

  static findByEmail = async ({ email }) => {
    const user = await User.findOne({ email }).lean();
    return user;
  };
}

export { UserModel };
