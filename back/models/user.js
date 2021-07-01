import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
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
});

const User = mongoose.model("User", UserSchema);    //mongodb언어로 변화 이름은 User라는 이름으로
export default User;
