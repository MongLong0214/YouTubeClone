import { UserMondel } from "../db/index";

class RegisterService {
  static create = async ({ name, email, password }) => {
    const newUserData = {
      name,
      email,
      password,
    };
    const newUser = await UserMondel.create(newUserData);
    return newUser;
  };
}

export { RegisterService };
