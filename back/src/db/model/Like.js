import { Like } from "../schema/like";

class LikeModel {
  static create = async ({ userId, video_id }) => {
    const newLike = await Like.create({ userId, video_id });
    return newLike;
  };

  static findByUserAndVideoId = async ({ userId, video_id }) => {
    const foundLike = await Like.findOne({ userId, video_id });
    return foundLike;
  };

  static deleteLike = async ({ userId, video_id }) => {
    const deleteLike = await Like.findOneAndDelete({ userId, video_id });
    return deleteLike;
  };

  static likeList = async () => {
    const likeList = await Like.find({});
    return likeList;
  };
}

export { LikeModel };
