import americano from "static/img/americano.jpg";
import Orange from "static/img/orange.jpg";
import chamomile from "static/img/cham.jpg";
import choc from "static/img/chocolatelatte.jpg";
import vshake from "static/img/vshake.jpg";
import belt from "static/img/belt.jpg";
import person from "static/img/person.jpg";
import flower from "static/img/flower.jpg";
import moon from "static/img/moon.jpg";
import { BsAwardFill, BsAward } from "react-icons/bs";

export const WorkData = [
  {
    type: "매일",
    time: "오픈",
    title: "과일 소분",
    content: [
      "키위(주스용)",
      "레몬(슬라이스, 웨지용)",
      "오렌지(주스용, 반달슬라이스)",
      "바나나(주스용)",
      "시즌과일(시즌음료용)",
    ],
  },
  {
    type: "매일",
    time: "오픈",
    title: "베이스",
    content: ["시럽베이스", "과일베스", "시즌베이스", "상미기한 확인"],
  },
  {
    type: "매일",
    time: "오픈",
    title: "아이스크림 소분",
    content: ["아포가토용", "데코용"],
  },
  {
    type: "매일",
    time: "오픈",
    title: "포스",
    content: ["포스기 키기", "포스 초기돈 확인", "시재입금 확인"],
  },
  {
    type: "매일",
    time: "오픈",
    title: "부족한 물품 채워넣기",
    content: [
      "빨대 채우기",
      "컵 채우기",
      "티슈 채우기",
      "손님용 시럽 및 가루설탕 채우기",
    ],
  },
  {
    type: "매일",
    time: "오픈",
    title: "가루 소분하기",
    content: [
      "초콜릿 가루 소분",
      "요거트 가루 소분",
      "홍차 가루 소분",
      "녹차 가루 소분",
    ],
  },
  {
    type: "주간",
    time: "오픈",
    title: "제빙기 청소",
    content: [
      "얼음스쿱 설거지",
      "얼음 정리",
      "약품 청소",
      "얼음 새로 나오는지 확인",
    ],
  },
  {
    type: "주간",
    time: "오픈",
    title: "물류정리",
    content: [
      "우유 정리",
      "냉동보관 물품 정리",
      "냉장 보관 물품 정리",
      "실온 보관 물품 정리",
      "물류 다 왔는지 체크 확인",
    ],
  },
  {
    type: "주간",
    time: "오픈",
    title: "냉장고 and 냉동고",
    content: ["냉장고 정리", "냉장고 닦기", "냉동고 정리", "냉동고 닦기"],
  },
  {
    type: "주간",
    time: "오픈",
    title: "MD장 ",
    content: [
      "MD장 닦기",
      "MD장 물품 정리",
      "MD장 진열",
      "MD장 물품 유통기한 확인",
    ],
  },
];
export const WorkMenuData = [
  {
    text: "매일",
  },
  {
    text: "주간",
  },
];
export const ManagementRoleData = [
  {
    text: "매니저",
  },
  {
    text: "아르바이트",
  },
];
export const ManagementMenuData = [
  {
    text: "오픈",
  },
  {
    text: "마감",
  },
  {
    text: "퇴사",
  },
];
export const ManagementData = [
  {
    img: person,
    name: "이도현",
    pay: "10000",
    role: "매니저",
    role2: <BsAwardFill />,
    date: "2020 - 06 - 03",
    time: "오픈",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    id: "1",
  },
  {
    img: flower,
    name: "이도현2",
    pay: "11000",
    role: "매니저",
    role2: <BsAwardFill />,
    date: "2019 - 12 - 11",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "마감",
    id: "2",
  },
  {
    img: person,
    name: "신미르",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 07 - 30",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "오픈",
    id: "3",
  },
  {
    img: person,
    name: "이지호",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 05 - 10",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "오픈",
    id: "4",
  },
  {
    img: person,
    name: "신미르",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 05 - 30",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "마감",
    id: "6",
  },
  {
    img: moon,
    name: "이지호",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 06 - 01",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "마감",
    id: "7",
  },
  {
    img: moon,
    name: "신미르",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 06 - 01",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "퇴사",
    id: "8",
  },
  {
    img: flower,
    name: "이소현",
    pay: "8760",
    role: "아르바이트",
    role2: <BsAward />,
    date: "2021 - 06 - 01",
    tel: "010-0000-0000",
    email: "ehgus3798@naver.com",
    time: "퇴사",
    id: "9",
  },
];

export const NoticeMenuData = [
  {
    name: "notice",
    text: "공지사항",
  },
  {
    name: "Menu",
    text: "메뉴 공지",
  },
  {
    name: "Event",
    text: "이벤트 공지",
  },
];
export const NoticeData = [
  {
    title: "아메리카노 모닝할인건",
    content:
      "12시전까지 4100원에 팔았던 아메리카노는3500원으로 할인한 가격으로 판매",
    date: "2021-07-05",
    id: "1", //여기를 그냥 1로 하면 id값이 안받아와짐;;;;
    type: "notice",
  },
  {
    title: "스페셜티 시즌종료",
    content:
      "<p>이번에 시즌으로 나온 스페셜티는 재고 부족으로 7월 말까지가 아닌 7월 10일까지 판매후 시즌종료됩니다</p><p><br/></p><p>또한 6월 16일부터는 재고 주문이 불가능합니다.</p>",
    date: "2021-07-01",
    id: "2",
    type: "notice",
  },
  {
    title: "3번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-06-30",
    id: "3",
    type: "notice",
  },
  {
    title: "4번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-5-25",
    id: "4",
    type: "notice",
  },
  {
    title: "수박주스 신메뉴",
    content:
      "<p>여름을 맞아 수박주스 신메뉴를 판매합니다</p><p>수박주스는 판매시작과 함께 한달간은 500원 할인된 가격으로 판매합니다</p><p>수박주스 레시피는 메뉴레시피를 참고해주세요</p>",
    date: "2021-06-29",
    id: "5",
    type: "Menu",
  },
  {
    title: "수박주스 신메뉴",
    content:
      "<p>여름을 맞아 수박주스 신메뉴를 판매합니다</p><p>수박주스는 판매시작과 함께 한달간은 500원 할인된 가격으로 판매합니다</p><p>수박주스 레시피는 메뉴레시피를 참고해주세요</p>",
    date: "2021-06-29",
    id: "6",
    type: "Menu",
  },
  {
    title: "수박주스 신메뉴",
    content:
      "<p>여름을 맞아 수박주스 신메뉴를 판매합니다</p><p>수박주스는 판매시작과 함께 한달간은 500원 할인된 가격으로 판매합니다</p><p>수박주스 레시피는 메뉴레시피를 참고해주세요</p>",
    date: "2021-06-29",
    id: "7",
    type: "Menu",
  },
  {
    title: "수박주스 신메뉴",
    content:
      "<p>여름을 맞아 수박주스 신메뉴를 판매합니다</p><p>수박주스는 판매시작과 함께 한달간은 500원 할인된 가격으로 판매합니다</p><p>수박주스 레시피는 메뉴레시피를 참고해주세요</p>",
    date: "2021-06-29",
    id: "8",
    type: "Menu",
  },
  {
    title: "수박주스 신메뉴",
    content:
      "<p>여름을 맞아 수박주스 신메뉴를 판매합니다</p><p>수박주스는 판매시작과 함께 한달간은 500원 할인된 가격으로 판매합니다</p><p>수박주스 레시피는 메뉴레시피를 참고해주세요</p>",
    date: "2021-06-29",
    id: "9",
    type: "Menu",
  },
  {
    title: "7월 한달간 아메리카노 3500원 할인 이벤트",
    content:
      "<p>여름을 맞아 아메리카노를 한달간 3500원에 할인합니다</p><p>할인된 가격으로 판매된 아메리카노는 사이즈업으로 판매 안되니 주의해주세요</p>",
    date: "2021-06-29",
    id: "10",
    type: "Event",
  },
  {
    title: "7월 한달간 아메리카노 3500원 할인 이벤트",
    content:
      "<p>여름을 맞아 아메리카노를 한달간 3500원에 할인합니다</p><p>할인된 가격으로 판매된 아메리카노는 사이즈업으로 판매 안되니 주의해주세요</p>",
    date: "2021-06-29",
    id: "11",
    type: "Event",
  },
  {
    title: "7월 한달간 아메리카노 3500원 할인 이벤트",
    content:
      "<p>여름을 맞아 아메리카노를 한달간 3500원에 할인합니다</p><p>할인된 가격으로 판매된 아메리카노는 사이즈업으로 판매 안되니 주의해주세요</p>",
    date: "2021-06-29",
    id: "12",
    type: "Event",
  },
  {
    title: "7월 한달간 아메리카노 3500원 할인 이벤트",
    content:
      "<p>여름을 맞아 아메리카노를 한달간 3500원에 할인합니다</p><p>할인된 가격으로 판매된 아메리카노는 사이즈업으로 판매 안되니 주의해주세요</p>",
    date: "2021-06-29",
    id: "13",
    type: "Event",
  },
  {
    title: "7월 한달간 아메리카노 3500원 할인 이벤트",
    content:
      "<p>여름을 맞아 아메리카노를 한달간 3500원에 할인합니다</p><p>할인된 가격으로 판매된 아메리카노는 사이즈업으로 판매 안되니 주의해주세요</p>",
    date: "2021-06-29",
    id: "14",
    type: "Event",
  },
  {
    title: "아메리카노 모닝할인건",
    content:
      "12시전까지 4100원에 팔았던 아메리카노는3500원으로 할인한 가격으로 판매",
    date: "2021-07-05",
    id: "15", //여기를 그냥 1로 하면 id값이 안받아와짐;;;;
    type: "notice",
  },
  {
    title: "스페셜티 시즌종료",
    content:
      "<p>이번에 시즌으로 나온 스페셜티는 재고 부족으로 7월 말까지가 아닌 7월 10일까지 판매후 시즌종료됩니다</p><p><br/></p><p>또한 6월 16일부터는 재고 주문이 불가능합니다.</p>",
    date: "2021-07-01",
    id: "16",
    type: "notice",
  },
  {
    title: "아메리카노 모닝할인건",
    content:
      "12시전까지 4100원에 팔았던 아메리카노는3500원으로 할인한 가격으로 판매",
    date: "2021-07-05",
    id: "17", //여기를 그냥 1로 하면 id값이 안받아와짐;;;;
    type: "notice",
  },
  {
    title: "스페셜티 시즌종료",
    content:
      "<p>이번에 시즌으로 나온 스페셜티는 재고 부족으로 7월 말까지가 아닌 7월 10일까지 판매후 시즌종료됩니다</p><p><br/></p><p>또한 6월 16일부터는 재고 주문이 불가능합니다.</p>",
    date: "2021-07-01",
    id: "18",
    type: "notice",
  },
];
export const HandOverListData = [
  {
    name: "day",
    text: "당일",
  },
  {
    name: "open",
    text: "오픈",
  },
  {
    name: "close",
    text: "마감",
  },
];
export const HandOverData = [
  {
    title: "청포도베이스가 없어요",
    content:
      "<p>청포도베이스가 없어서 청포도베이스가 들어올때까지 청포도에이드는 판매 불가입니다</p>",
    date: "2021-07-5",
    type: "day",
    id: "1",
  },
  {
    title: "에어콘이 틀어져있어요",
    content:
      "<p>간혹가도 오픈중 확인해보니 에어콘이 켜져있는것이 확인되었습니다</p><p>마감분들은 나가시기 전에 한번더 확인 부탁드리겠습니다</p>",
    date: "2021-07-8",
    type: "close",
    id: "2",
  },
  {
    title: "오렌지 베이스를 많이 만들어주세요",
    content:
      "<p>여름이다 보니 마감때 오렌지 베이스가 많이 나갑니다</p><p>만들어진것 이상 나가다 보니 막바지에는 베이스가 없어서 나갈수 없어 한통 정도 더 여비로 만들어주세요</p>",
    date: "2021-07-5",
    type: "open",
    id: "3",
  },
  {
    title: "삼성페이 결제 오류",
    content:
      "<p>당일 포스기 오류로 인해 삼성페이가 결제가 안됩니다</p><p>수리기사님은 내일 방문예정으로 당일은 손님께 양해 부탁드리고 삼성페이로 결제 안된다고 미리 공지해주세요</p>",
    date: "2021-06-30",
    type: "day",
    id: "4",
  },
  {
    title: "청포도베이스가 없어요",
    content:
      "<p>청포도베이스가 없어서 청포도베이스가 들어올때까지 청포도에이드는 판매 불가입니다</p>",
    date: "2021-07-5",
    type: "day",
    id: "5",
  },
  {
    title: "에어콘이 틀어져있어요",
    content:
      "<p>간혹가도 오픈중 확인해보니 에어콘이 켜져있는것이 확인되었습니다</p><p>마감분들은 나가시기 전에 한번더 확인 부탁드리겠습니다</p>",
    date: "2021-07-8",
    type: "close",
    id: "6",
  },
  {
    title: "오렌지 베이스를 많이 만들어주세요",
    content:
      "<p>여름이다 보니 마감때 오렌지 베이스가 많이 나갑니다</p><p>만들어진것 이상 나가다 보니 막바지에는 베이스가 없어서 나갈수 없어 한통 정도 더 여비로 만들어주세요</p>",
    date: "2021-07-5",
    type: "open",
    id: "7",
  },
  {
    title: "삼성페이 결제 오류",
    content:
      "<p>당일 포스기 오류로 인해 삼성페이가 결제가 안됩니다</p><p>수리기사님은 내일 방문예정으로 당일은 손님께 양해 부탁드리고 삼성페이로 결제 안된다고 미리 공지해주세요</p>",
    date: "2021-06-30",
    type: "day",
    id: "8",
  },
];
export const menuData = [
  {
    category: "coffe",
    text: "커피",
  },
  {
    category: "juice",
    text: "쥬스",
  },
  {
    category: "tea",
    text: "티",
  },
  {
    category: "latte",
    text: "라떼",
  },
  {
    category: "Frappuccino",
    text: "프라페",
  },
  {
    category: "sandwich",
    text: "샌드위치",
  },
];
export const categoryData = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "coffe",
    text: "커피",
  },
  {
    name: "juice",
    text: "쥬스",
  },
  {
    name: "tea",
    text: "티",
  },
  {
    name: "latte",
    text: "라떼",
  },
  {
    name: "Frappuccino",
    text: "프라페",
  },
  {
    name: "sandwich",
    text: "샌드위치",
  },
];
export const RecipeData = [
  {
    name: "아메리카노",
    category: "커피",
    img: americano,
    recipe: "<p>에스프레스 2샷</p><p><br/></p><p>물 390ml</p>",
    content:
      "<p>1.원두가루를 25g을 맞춘다</p><p><br/></p><p>2.가루를 간 후 템퍼를 이용해 템핑 한다</p><p><br/></p><p>3.에스프레소 기계로 고온 고압으로 추출한다</p><p><br/></p><p>4.정량에 물에 에스프로소 샷을 넣는다</p>",
  },
  {
    name: "오렌지주스",
    category: "쥬스",
    img: Orange,
    recipe: "오렌지 200g \n 물 150g\n ",
    content:
      "1.오렌지와 물을 블렌더에 넣어 갈아준다 \n 2.오렌지주스를 컵에 옮겨 담는다\n 3.나머지부분에 얼음을 채워넣고 위에 오렌지 슬라이스로 데코한다",
  },
  {
    name: "카모마일",
    category: "티",
    img: chamomile,
    recipe: "카모마일 티\n 물",
    content:
      "1.컵에 뜨거운 물을 담는다 \n 2.카모마일 티를 넣어주고 잘 저어준다",
  },
  {
    name: "초콜릿라떼",
    category: "라떼",
    img: choc,
    recipe: "초콜릿 가루 40g \n 우유 350ml",
    content:
      "1.우유를 스팀한다 \n 2.스팀한 우유를 컵에 옮겨 초콜릿 가루를 넣어 잘 저어준다 \n 3.휘핑을 올리고 초코칩을 올려 마무리한다",
  },
  {
    name: "바닐라쉐이크",
    category: "프라페",
    img: vshake,
    recipe: "바닐라 아이스크림 170g\n 우유 120g\n 얼음 100g",
    content:
      "1.블렌더에 정량의 바닐라 아이스크림, 우유, 얼음을 넣고 간다\n 2.컵에 옮긴후 버블빨대와 함께 제공한다",
  },
  {
    name: "BELT샌드위치",
    category: "샌드위치",
    img: belt,
    recipe: "BELT 샌드위치, 상추, 토마토",
    content:
      "1.상추는 손으로 잘게 짤라 준비한다 2.토마토는 슬라이스 하여 준비한다 3.준비된 BELT 샌드위치 빵다음으로 상추와 토마토를 쌓는다 4.대각선으로 짜른후 지정된 용기에 넣어 판매한다",
  },
];
