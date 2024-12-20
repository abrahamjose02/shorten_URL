import { Analytics } from "../models/analytics.model";

export class AnalyticsRepository {
  async createAnalytics(analyticsData: any) {
    const analytics = new Analytics(analyticsData);
    return await analytics.save();
  }

  async getAnalyticsByUrlId(urlId: string) {
    return await Analytics.findOne({ urlId });
  }

  async getOverallAnalyticsByUserId(userId: string) {
    return await Analytics.find({ userId });
  }
}
