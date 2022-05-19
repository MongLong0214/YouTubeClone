import { SubscriberModel } from "../db/model/Subscriber";

class SubscriberService {
  //구독하기
  static subscribe = () => {
    SubscriberModel.subscribe();
  };
  // 내 체널을 구독한 사람 수 (유튜브는 나를 구독한 사람수 만 알 수 있음)
  static subscriberNum = async () => {
    const subscriberNum = await SubscriberModel.get();
    return subscriberNum.length;
  };
  // 내가 구독한 사람들
  static subscribed = async () => {
    const subscribed = await SubscriberModel.get();
    return subscribed;
  };
  // 구독 취소하기
  static unsubscribe = async () => {
    SubscriberModel.delete();
  };
}

export { SubscriberService };
