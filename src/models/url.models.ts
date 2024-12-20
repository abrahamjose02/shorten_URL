import { Schema, model } from "mongoose";

const urlSchema = new Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  customAlias: { type: String, unique: true },
  topic: { type: String },
  createdAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
  userId: { type: String, required: true },
  analytics: [
    {
      date: { type: Date },
      userAgent: { type: String },
      ip: { type: String },
    },
  ],
});

export const Url = model("Url", urlSchema);
