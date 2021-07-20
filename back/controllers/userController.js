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

//로그인
export const login = async (req, res) => {
  const { email, password } = req.body;

  //email 또는 password가 없을때의 예외 처리
  //백엔드는 예외처리가 중요하다
  if (!email || !password) {
    return res.status(401).json({
      //401은 정보가 안왔을때의 상태코드
      success: false,
      message: "정보가 입력되지 않았습니다",
    });
  }
  try {
    const user = await User.findOne({
      //참과 거짓으로 나오는 함수가 아님 데이터베이스에 해당하는 값이 담김
      //즉 그 이메일이 있는 유저 내용에 값이 담김
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "해당 이메일이 존재하지 않습니다",
      });
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "비밀번호가 잘못 입력되었습니다",
      });
    }
    const token = await user.generateToken();
    //웹에는 새로고침을 해도 데이터가 안지워지는 공간이 총 3개가 있음(새로고침을 하면 원래는 데이터가 다 지워짐)
    //로컬(잠깐 요기서 쓰는 용도(자동로그인)),세션(꺼버리면 초기화됨(휘발성이 강한 아이들)),쿠키(비밀정보를 넣는 느낌(방문증))
    return res.cookie("user", token).status(200).json({
      //cookie(name, value)
      success: true,
      user,
    }); //user을 쿠키로 보내겠다
  } catch (e) {
    res.status(500).json({
      //500은 나도 무슨 에러인지 모르겠음
      e,
    });
  }
};

//로그아웃
export const logout = async (req, res) => {
  //export const하면 const한것만 나가겠다 export default하면 전부다 나가겠다
  res.cookie("user", "").status(200).json({
    usccess: true,
    message: "로그아웃에 성공했습니다",
  });
};
