import React from 'react';
import './Membership.css'
import './Membership_js.js'

const Membership = () => {
    return (
        <div>
            <div class="back_ground">
                <div class="container">
                    <center><h1 class="title">cafenual</h1></center>
                    <form class="middle" name="membership" onsubmit="return checkForm();">
                        이름<br /><br />
                        <input type="text" name="user_id" required /><br />
                        이메일
                        <div class="email_check">
                            <center>
                            <a>이메일 확인</a><br /><br />
                            </center>
                        </div>
                        <input type="email" name="user_email" required /><br />
                         비밀번호<br /><br />
                        <input type="password" id="user_password" required /><br />
                        <div class="membership_explain">
                            비밀번호는 영문과 숫자 포함하여 8글자 이상, 20글자 이하
                        </div>
                        비밀번호 확인<br /><br />
                        <input type="password" id="user_password_check" required /><br /><br />
                        전화번호<br /><br />
                        <input type="number" name="user_tel" required />
                        <div class="membership_explain">
                            전화번호를 입력할시 -포함하여 입력 ex) 010-0000-0000
                        </div>
                        <button type="submit">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Membership;