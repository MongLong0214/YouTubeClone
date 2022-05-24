import { LikeModel } from "../db";

class LikeService {
  static create = async ({ userId, video_id }) => {
    const foundLike = await LikeModel.findByUserAndVideoId({
      userId,
      video_id,
    });
    if (foundLike) {
      const deleteLike = await LikeModel.deleteLike({ userId, video_id });
      return deleteLike;
    }
    const newLike = await LikeModel.create(userId, video_id);
    return newLike;
  };
}

export { LikeService };
