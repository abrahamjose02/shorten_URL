import { Schema, model } from "mongoose";

const analyticsSchema = new Schema({
  urlId: { type: Schema.Types.ObjectId, ref: "Url" },
  clicks: { type: Number, default: 0 },
  uniqueUsers: { type: Set, default: new Set() },
  osType: { type: String },
  deviceType: { type: String },
  date: { type: Date, default: Date.now },
});

export const Analytics = model("Analytics", analyticsSchema);
