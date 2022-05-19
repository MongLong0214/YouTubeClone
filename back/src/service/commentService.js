import { CommentModel } from "../db/model/Comment";

class CommentService {
  static create = (comment) => {
    CommentModel.create(comment);
  };

  static getComment = async (id) => {
    const comment = await CommentModel.get(id);
    return comment;
  };
  static getComments = async (video_id) => {
    const comments = await CommentModel.getAll(video_id);
    return comments;
  };
}

export { CommentService };
