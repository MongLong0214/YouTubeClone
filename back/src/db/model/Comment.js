import { Comment } from "../schema/comment";
// dao와 같은 기능
class CommentModel {
  // 댓글 작성
  static create = ({ writer, video_id, content }) => {
    const newComment = new Comment({
      writer,
      video_id,
      content,
    });
    newComment.save();
  };

  // 댓글 1개 조회
  static get = async (id) => {
    const comment = await Comment.find(id).populate("writer");
    return comment;
  };

  // 전체 댓글 조회
  static getAll = async (video_id) => {
    const comments = await Comment.find(video_id).populate("writer");
    return comments;
  };

  // 댓글 수정
}

export { CommentModel };
