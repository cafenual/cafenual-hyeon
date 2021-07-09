import americano from "static/img/americano.jpg";
import Orange from "static/img/orange.jpg";
import chamomile from "static/img/cham.jpg";
import choc from "static/img/chocolatelatte.jpg";
import vshake from "static/img/vshake.jpg";
import belt from "static/img/belt.jpg";

export const menuData = [
  {
    category: "coffe",
  },
  {
    category: "juice",
  },
  {
    category: "tea",
  },
  {
    category: "latte",
  },
  {
    category: "Frappuccino",
  },
  {
    category: "sandwich",
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
    category: "coffe",
    img: americano,
    recipe: "<p>에스프레스 2샷</p><p><br/></p><p>물 390ml</p>",
    content:
      "<p>1.원두가루를 25g을 맞춘다</p><p><br/></p><p>2.가루를 간 후 템퍼를 이용해 템핑 한다</p><p><br/></p><p>3.에스프레소 기계로 고온 고압으로 추출한다</p<p><br/></p>><p>4.정량에 물에 에스프로소 샷을 넣는다</p>",
  },
  {
    name: "오렌지주스",
    category: "juice",
    img: Orange,
    recipe: "오렌지 200g \n 물 150g\n ",
    content:
      "1.오렌지와 물을 블렌더에 넣어 갈아준다 \n 2.오렌지주스를 컵에 옮겨 담는다\n 3.나머지부분에 얼음을 채워넣고 위에 오렌지 슬라이스로 데코한다",
  },
  {
    name: "카모마일",
    category: "tea",
    img: chamomile,
    recipe: "카모마일 티\n 물",
    content:
      "1.컵에 뜨거운 물을 담는다 \n 2.카모마일 티를 넣어주고 잘 저어준다",
  },
  {
    name: "초콜릿라떼",
    category: "latte",
    img: choc,
    recipe: "초콜릿 가루 40g \n 우유 350ml",
    content:
      "1.우유를 스팀한다 \n 2.스팀한 우유를 컵에 옮겨 초콜릿 가루를 넣어 잘 저어준다 \n 3.휘핑을 올리고 초코칩을 올려 마무리한다",
  },
  {
    name: "바닐라쉐이크",
    category: "Frappuccino",
    img: vshake,
    recipe: "바닐라 아이스크림 170g\n 우유 120g\n 얼음 100g",
    content:
      "1.블렌더에 정량의 바닐라 아이스크림, 우유, 얼음을 넣고 간다\n 2.컵에 옮긴후 버블빨대와 함께 제공한다",
  },
  {
    name: "BELT샌드위치",
    category: "sandwich",
    img: belt,
    recipe: "BELT 샌드위치, 상추, 토마토",
    content:
      "1.상추는 손으로 잘게 짤라 준비한다 2.토마토는 슬라이스 하여 준비한다 3.준비된 BELT 샌드위치 빵다음으로 상추와 토마토를 쌓는다 4.대각선으로 짜른후 지정된 용기에 넣어 판매한다",
  },
];
export const NoticeData = [
  {
    title: "아메리카노 모닝할인건",
    content:
      "12시전까지 4100원에 팔았던 아메리카노는3500원으로 할인한 가격으로 판매",
    date: "2021-07-05",
    id: "1", //여기를 그냥 1로 하면 id값이 안받아와짐;;;;
  },
  {
    title: "스페셜티 시즌종료",
    content:
      "<p>이번에 시즌으로 나온 스페셜티는 재고 부족으로 7월 말까지가 아닌 7월 10일까지 판매후 시즌종료됩니다</p><p><br/></p><p>또한 6월 16일부터는 재고 주문이 불가능합니다.</p>",
    date: "2021-07-01",
    id: "2",
  },
  {
    title: "3번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-06-30",
    id: "3",
  },
  {
    title: "4번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-5-25",
    id: "4",
  },
  {
    title: "5번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-06-29",
    id: "5",
  },
  {
    title: "6번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-07-03",
    id: "6",
  },
  {
    title: "7번입니당",
    content: "내가 잘 하고 있는지 모르겄네 ㅎㅎ",
    date: "2021-05-18",
    id: "7",
  },
];
