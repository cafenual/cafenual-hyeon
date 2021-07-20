import express from "express";
import * as userCtrl from "../controllers/userController";
//*은 전부를 뜻함, 저기폴더 안에 있는 전부를 userCtrl에 저장하겠다

const router = express.Router();

router.post("/register",userCtrl.register);
//post->생성, get->조회, patch->업데이트, delete->삭제
router.post("/login", userCtrl.login);
//userCtrl에 있는 login함수
router.post("/logout", userCtrl.logout);
export default router;
