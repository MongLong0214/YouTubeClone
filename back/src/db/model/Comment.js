import { Comment } from "../schema/comment";
// dao와 같은 기능
class CommentModel {
  // 댓글 작성
  async create(raw) {
    try {
      const comment = new Comment({
        writer: raw.writer,
        video_id: raw.video_id,
        content: raw.content,
      });
      await comment.save();
      return;
    } catch (err) {
      console.log("comment - req.body fail");
    }
  }

  // 댓글 1개 조회
  async get(id) {
    try {
      const comment = await Comment.find(id).populate("writer").exec();
      return comment;
    } catch (err) {
      console.log("댓글을 찾을 수 없습니다.");
    }
  }

  // 전체 댓글 조회
  async getAll(video_id) {
    try {
      const comments = await Comment.findAll(video_id)
        .populate("writer")
        .exec();
      return comments;
    } catch (err) {
      console.log("해당 비디오를 찾을 수 없습니다.");
    }
  }

  // 댓글 수정
}

export { CommentModel };
