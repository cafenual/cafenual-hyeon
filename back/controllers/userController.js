import User from "../models/user";

//회원가입
export const register = async (req, res) => {
  const { email, password, name } = req.body; //이렇게 하면 req.body.email하지 않고 email로 사용할 수 있다

  try {
    //이메일이 디비에 있는지 확인
    const exist = await User.findOne({
      //fineOne은 결과 값이 true 아니면 false가 나옴
      //밑에 있는 작업과 같이 하면 무조건 없다고 뜰때니 할때까지 기달려라 await
      email, //email = email
    });

    if (exist) {
      return res.status(500).json({
        //500에러 서버가 처리방법을 모르는 상황
        success: false,
        message: "이미 존재하는 계정입니다",
      });
    }

    const user = new User({
      email, //email = email과 같은 문법
      password,
      name,
    });

    await user.setPassword(password); //암호화
    await user.save();
    //await->기달려라, 없어도 저장되기 하는데 저장되는 와중에 밑에문이 실행되서 undefine이 될수 있음
    //DB 저장해라

    res.status(200).json({
      //성공했다
      success: true,
      user,
    });
  } catch (e) {
    //에러 캐치
    res.status(400).json({
      //res -> front에게 보내주겠다
      success: false,
      e, //e에 에러내용이 담김 front에 에러내용을 보내줌
    });
  }
};
