import { CommentModel } from "../db/model/Comment";

class CommentService {
  static create = (comment) => {
    CommentModel.create(comment);
  };

  static getComment = async () => {
    const comment = await CommentModel.get();
    return comment;
  };
  static getComments = async () => {
    const comments = await CommentModel.getAll();
    return comments;
  };
}

export { CommentService };
