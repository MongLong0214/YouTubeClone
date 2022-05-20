import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { SubscriberService } from "../service/subscriberService";

const subscriberRouter = Router();

subscriberRouter.use(loginRequired);

// 구독하기
subscriberRouter.post("/subscribe", async (req, res) => {
  try {
    SubscriberService.subscribe(req.body);
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
});

// 구독 취소하기
subscriberRouter.delete("/unsubscribe", async (req, res) => {
  try {
    const { userTo, userFrom } = req.body;
    SubscriberService.unsubscribe(userTo, userFrom);
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
});

// 구독자수
subscriberRouter.get("/subscriberNum", async (req, res) => {
  try {
    const userTo = req.body.userTo;
    SubscriberService.subscriberNum(userTo).then((subscriberNum) => {
      res.status(200).json({ success: true, subscriberNum });
    });
  } catch (err) {
    return res.json({ success: false });
  }
});

// 구독 했는지 여부
subscriberRouter.get("/subscribed", async (req, res) => {
  try {
    const { userTo, userFrom } = req.body;
    const subscribed = SubscriberService.subscribed(userTo, userFrom);
    // 구독 한 상태면 true, 구독 안한 상태면 false
    let result = false;
    if (subscribed.length != 1) {
      result = true;
    }
    res.status(200).json({ success: true, subscribed: result });
  } catch (err) {
    return res.json({ success: false });
  }
});

export { subscriberRouter };
