import { Subscriber } from "../schema/subscriber";
// dao와 같은 기능
class SubscriberModel {
  // 구독하기
  static subscribe = ({ userTo, userFrom }) => {
    const newsubscribe = new Subscriber({
      userTo,
      userFrom,
    });
    newsubscribe.save();
  };

  // 구독자 조회
  static get = async (id) => {
    const subscriber = await Subscriber.find(id);
    return comment;
  };

  // 구독 취소하기
  static delete = async (id) => {
    const comments = await Subscriber.findOneAndDelete(id);
    return comments;
  };
}

export { SubscriberModel };
