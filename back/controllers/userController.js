import User from "../models/user";

//회원가입
export const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    //이메일이 디비에 있는지 확인
    const exist = await User.findOne({
      email,
    });

    const user = new User({
      email, //email = email과 같은 문법
      password,
      name,
    });

    if (exist) {
      return res.status(500).json({
        //500에러 서버가 처리방법을 모르는 상황
        success: false,
        message: "이미 존재하는 계정입니다",
      });
    }

    await user.save();
    //await->기달려라, 없어도 저장되기 하는데 저장되는 와중에 밑에문이 실행되서 undefine이 될수 있음

    res.status(200).json({
      //성공했다
      success: true,
      user,
    });
  } catch (e) {
    res.status(400).json({
      //res -> front에게 보내주겠다
      success: false,
      e, //e에 에러내용이 담김 front에 에러내용을 보내줌
    });
  }
};
