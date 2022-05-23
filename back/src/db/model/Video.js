import { Video } from "../schema/video";

class VideoModel {
  static create = ({
    writer,
    title,
    description,
    privacy,
    filePath,
    category,
    views,
    duration,
    thumbnail,
  }) => {
    const newVideo = new Video({
      writer,
      title,
      description,
      privacy,
      filePath,
      category,
      views,
      duration,
      thumbnail,
    });
    newVideo.save();
  };

  static get = async () => {
    const videos = await Video.find()
      .populate("writer", "_id email name image")
      .exec();
    return videos;
  };

  static findById = async (id) => {
    const video = await Video.findOne({ _id: id }).populate("writer").exec();
    return video;
  };

  static findByWriter = async (writer) => {
    const video = await Video.find({ writer: { $in: writer } })
      .populate("writer")
      .exec();
    return video;
  };
}

export { VideoModel };
