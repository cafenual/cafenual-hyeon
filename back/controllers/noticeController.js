import Notice from "../models/notice";

//공지생성
export const createNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body); //Notcie Schema를 notice에 넣을껀데 그걸 req.body를 덮어씌어서 넣겠다
    await notice.save(); //저장

    return res.status(201).json({
      //201을생성요청
      success: true,
      notice, //잘 저장됨
    });
  } catch (e) {
    return res.status(500).json({
      //500은 내가 뭔 에러인지 모르겠다
      success: false,
      e, //알아서 잡아서 보여주겠지
    });
  }
};

//공지읽기
export const readNotice = async (req, res) => {
  try {
    //const notices = await Notice.find(); //find에 ()안에 아무것도 안넣으면 다 가져오라는 이야기

    let importantNotices = await Notice.find({ important: true }); //const을 사용하면 상수 선언이므로 let을 이용해서 역순으로 하기 위해서
    importantNotices = [...importantNotices.reverse()]; //불변성을 위해 ...을 이용해 복사하여 바꿔준다
    let normalNotices = await Notice.find({ important: false });
    normalNotices = [...normalNotices.reverse()]; //불변성을 위해 ...을 이용해 복사하여 바꿔준다

    const notices = importantNotices.concat(normalNotices);
    //concat은 배열을 합쳐달라는 이야기 importantNotices가 먼저나와야함으로 importantNotices에 normalNotices을 합침

    return res.status(200).json({
      //200은 작업을 성공한것
      success: true,
      notices,
    });
  } catch (e) {
    return res.status(500).json({
      //500은 내가 뭔 에러인지 모르겠다
      success: false,
      e, //알아서 잡아서 보여주겠지
    });
  }
};

//공지 상세보기
export const readNoticeDetail = async (req, res) => {
  const { noticeId } = req.params; //비구조 할당으로 noticeId를 받음, get으로 받아올수 없으니 body로 못 받아오고 params로 받음
  try {
    const notice = await Notice.findById({
      //_id만 찾음, 효율성이 제일 좋음
      _id: noticeId,
    });
    // const notice = await Notice.find({   //조건에 해당하는 모든것들을 가져옴
    //   _id: noticeId,
    // });
    // const notice = await Notice.findOne({    //하나만 가져옴 단 title보고 그 다음 보고 그 다음 보고 id를 보고 id 맞으면 그걸 판단
    //   _id: noticeId,
    // });
    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다.",
      });
    }
    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지삭제
export const deletNotice = async (req, res) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete({ _id: noticeId });
    if (!notice) {
      //못찾으면 false가 담김
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
      });
    }
    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      //500은 내가 뭔 에러인지 모르겠다
      success: false,
      e, //알아서 잡아서 보여주겠지
    });
  }
};

//공지사항 수정
export const updateNotice = async (req, res) => {
  const { noticeId, title, content, important } = req.body;
  try {
    const notice = await Notice.findByIdAndUpdate(
      { _id: noticeId }, //id값을 찾음
      { title, content, important }, //title은 title로 바꿔라 content는 content로 바꿔라 같은 거면 ','를 이용해 생략 가능
      { new: true }
      //몽구스 함수 안에 있는 옵션인데 기본은 false로 원래는 하면 업데이트를 하면 그 밑에는 기존의 것이 보이는데 이걸 true로 해놓으면 업데이트를 할때 업데이트를 한 내용으로 보임
    );
    if (!notice) {
      //못찾으면 false가 담김
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
      });
    }
    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
