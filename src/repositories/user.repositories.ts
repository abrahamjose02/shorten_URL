import { User } from "../models/user.model";

export class UserRepository {
  async findByGoogleId(googleId: string) {
    return await User.findOne({ googleId });
  }

  async createUser(userData: any) {
    const user = new User(userData);
    return await user.save();
  }
}
