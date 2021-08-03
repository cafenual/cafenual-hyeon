import express from "express";
import * as noticeCtrl from "../controllers/noticeController";
// *은 모두를 뜻함 noticeCtrl을 변수 즉 noticeController을 noticeCtrl에 넣겠다

const router = express.Router();

router.post("/create", noticeCtrl.createNotice);    //요청보내는것은 post
router.get("/readNotice",noticeCtrl.readNotice);    //요청받는것은 get
router.get("/read/:noticeId",noticeCtrl.readNoticeDetail);  //get은 받아만 오니깐 줄수 없으니 주소지로 값을 받아옴, noticeId는 변수명
router.delete("/delete/:noticeId", noticeCtrl.deletNotice); //애도 body로 못받고 주소를 이용해 params로 받아야됨
router.patch("/update",noticeCtrl.updateNotice);
export default router;