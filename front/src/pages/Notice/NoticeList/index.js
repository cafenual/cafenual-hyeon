import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

const NoticeList = () => {
  const [FakeNoticeData, setFakeNoticeData] = useState([]);
  const FakeNotice = [
    {
      title: "아메리카노 모닝할인건",
      content:
        "12시전까지 4100원에 팔았던 아메리카노는3500원으로 할인한 가격으로 판매",
      date: "2021-07-05",
      id: 1,
    },
    {
      title: "스페셜티 시즌종료",
      content:
        "이번에 시즌으로 나온 스페셜티는 재고 부족으로 7월 말까지가 아닌 7월 10일까지 판매후 시즌종료됩니다",
      date: "2021-07-01",
      id: 2,
    },
    {
      title: "3번입니당",
      content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
      date: "2021-06-30",
      id: 3,
    },
    {
      title: "4번입니당",
      content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
      date: "2021-5-25",
      id: 4,
    },
    {
      title: "5번입니당",
      content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
      date: "2021-06-29",
      id: 5,
    },
    {
      title: "6번입니당",
      content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
      date: "2021-07-03",
      id: 6,
    },
    {
      title: "7번입니당",
      content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
      date: "2021-05-18",
      id: 7,
    },
  ];
  useEffect(() => {
    setFakeNoticeData(FakeNotice);
  }, []);

  return (
    <div id="NoticeList" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="all-block">
          <div className="noticelist-top">
            <div className="list-search">
              <form action="">
                <fieldset>
                  {/*fieldset은 그룹화 시킬때 사용*/}
                  <input
                    type="text"
                    className="search-input"
                    placeholder="검색어를 입력해주세요"
                  />
                  <button type="submit" className="search-btn">
                    <AiOutlineSearch size="23" />
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="list-write">
              <a href="/notice/upload">작성</a>
            </div>
          </div>

          <div className="noticelist-middle">
            <table className="table">
              <colgroup>
                {/*colgroup 테이블에서 서식 지정을 위해 하나 이상의 열을 그룹으로 묶을 때 사용*/}
                <col className="left" />
                <col className="right" />
              </colgroup>
              {/*thread는 테이블에서 헤더 컨텐츠들을 하나의 그룹으로 묶을 때 사용*/}
              <thead>
                <tr>
                  <th scope="col">내용</th>
                  <th scope="col">등록일</th>
                </tr>
              </thead>
              {/*tbody 표 본문 요소*/}
              <tbody>
                {FakeNoticeData.map((data, index) => (
                  <tr key={index}>
                    <td className="td-left">
                      <div className="inner-cont">
                        <span className="inner-text">
                          <a href={`/notice/${data.id}`} className="link-text">
                            {data.title}
                          </a>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="inner-date">{data.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="noticelist-bottom">{/*페이지 넘기기*/}</div>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
