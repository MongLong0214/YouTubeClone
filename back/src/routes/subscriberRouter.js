import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { SubscriberService } from "../service/subscriberService";

const subscriberRouter = Router();

// subscriberRouter.use(loginRequired);

// 구독하기
subscriberRouter.post("/subscribe", async (req, res, next) => {
  try {
    SubscriberService.subscribe(req.body);
    return res.status(201).json({ sucess: true });
  } catch (err) {
    next(err);
  }
});

// 구독 취소하기
subscriberRouter.delete("/unsubscribe", async (req, res, next) => {
  try {
    const { userTo, userFrom } = req.body;
    SubscriberService.unsubscribe(userTo, userFrom);
    return res.status(201).json({ sucess: true });
  } catch (err) {
    next(err);
  }
});

// 나를 구독한 사람 수
subscriberRouter.get("/subscriberNum", async (req, res, next) => {
  try {
    const userTo = req.body;
    SubscriberService.subscriberNum(userTo).then((subscriberNum) => {
      res.status(200).json({ success: true, subscriberNum });
    });
  } catch (err) {
    next(err);
  }
});

// 내가 구독한 사람들 조회
subscriberRouter.get("/subscribed", async (req, res, next) => {
  try {
    const { userTo, userFrom } = req.body;
    SubscriberService.subscriberNum(userTo, userFrom).then((subscribed) => {
      res.status(200).json({ success: true, subscribed });
    });
  } catch (err) {
    next(err);
  }
});

export { subscriberRouter };
