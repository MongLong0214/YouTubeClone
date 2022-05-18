import { model, Schema } from "mongoose";
// 몽고DB에서 자동으로 _id 생성되어 저장됨 -> ObjectId
const CommentSchema = new Schema({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Comment = model("Comment", CommentSchema);

export { Comment };
