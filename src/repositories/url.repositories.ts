import { Url } from "../models/url.models";

export class UrlRepository {
  async createUrl(urlData: any) {
    const url = new Url(urlData);
    return await url.save();
  }

  async findByAlias(alias: string) {
    return await Url.findOne({ customAlias: alias });
  }

  async incrementClick(alias: string) {
    return await Url.findOneAndUpdate(
      { customAlias: alias },
      { $inc: { clicks: 1 } },
      { new: true }
    );
  }

  async getAllUrlsByUserId(userId: string) {
    return await Url.find({ userId });
  }
}
