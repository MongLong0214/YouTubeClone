import { VideoModel } from "../db/index";

class VideoService {
  static create = (videoData) => {
    VideoModel.create(videoData);
  };

  static getVideos = async () => {
    const videos = await VideoModel.get();
    return videos;
  };

  static getVideoDetail = async (id) => {
    const video = await VideoModel.findById(id);
    return video;
  };

  static getVideoByWriter = async (writer) => {
    const video = await VideoModel.findByWriter(writer);
    return video;
  };
}

export { VideoService };
