import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; //jwt으로 줄여서

const saltRounds = 10; //hash를 10번 하겠다. 1번만 하면 해커가 뚫을수 있으니 여러번 해주는것
//상수화를 해놓는것이 좋다 상수화를 변수를 넣어줘야 유지보수에 좋기 때문

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true, //무조건 입력이 되어야 한다
      unique: true, //무조건 유니크하다 같은게 있으면 오류
      trim: true, //공백을 없애주겠다
      lowercase: true, //대문자로 해도 다 소문자로 받겠다
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      minLength: 6, //최소 6글자
    },
    phoneNumber:{
      type:String,
      required:true,
      trim:true,
    },
    wage: {
      type: Number,
      trim: true,
      default: 8720, //기본값
    },
    status: {
      type: String,
      enum: ["재직자", "퇴직자"], //자바스크립트 문법, 조건을 여러개 가질 수 있음
      default: "재직자",
    },
    role: {
      type: String,
      enum: ["admin", "parttime"],
      default: "parttime",
    },
    token: {
      //원래 웹은 새로고침하면 다 사라져서 새로고침할때마다 데이터가 없는데 토큰을 줘서(방문증을 줌) 계속 로그인상태가 되어있도록
      type: String,
    },
  },
  { timestamps: true } //최초로 만든시간과 수정한 시간이 나타나서 DB관리에 용이하다
);

//몽고db에 메서드 만드는 방식
//1.UserSchema.methods.함수이름 = 함수  =>인스턴스 메서드 : 모델을 통해 만든 문서 인스턴스에서 사용할 수 있는 함수
//2.UserSchema.statics.함수이름 = 힘수  =>스태틱 메서드 : 모델에서 바로 사용할 수 있는 함수를 의미

UserSchema.methods.setPassword = async function (password) {
  //이건 비동기함수야 라고 말해주는 함수 async를 쓰면 await을 안써도 되서 이걸 주로 쓴다
  //this는 함수안에서 할수 있기 때문에 화살표함수를 안쓰고 this 사용
  const result = await bcrypt.hash(password, saltRounds);
  this.password = result; //hash한 결과물을 password에 넣어줌
};

//입력받은 비밀번호가 데이터베이스에 저장된 비밀번호와 같은지 비교하는 함수
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};
//우리가 가져온 password와 DB에 저장된 있는 password와(this.password) 비교
//둘이 같으면 1(참), 틀리면(0)

//토큰 생성
UserSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    {
      _id: this.id, //그 유저의 아이디
      email: this.email, //그 유저의 이메일
      name: this.name, //그 유저의 네임
      role: this.role,
    }, //토큰에 담을 아이들
    process.env.JWT_SECRET //JWT_SECRET 자물쇠의 키같은 느낌
  );
  //sign이 jwt에서 token을 만들어주는 함수
  this.token = token;
  await this.save(); //token만 저장할꺼라 이쪽에 저장하고 이렇게 token저장 완료
  return token;
};
const User = mongoose.model("User", UserSchema); //mongodb언어로 변화 이름은 User라는 이름으로
export default User;
