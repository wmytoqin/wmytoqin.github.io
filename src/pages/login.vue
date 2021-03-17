<template>
  <section class="page login">
    
    <!-- 登录页面 - 盒子动画 -->
    <section class="container">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="center">
        <section class="login_card">
          <!-- 登录页面 - 表单动画 -->
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient inkscape:collect="always" id="linearGradient" x1="13" y1="193.49992" x2="307" y2="193.49992" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:#14f7ff;" offset="0" id="stop876" />
                <stop style="stop-color:#0044ff;" offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <!-- 登录页面 - 表单 -->
          <section class="form">
            <label for="username">用户名</label>
            <input type="username" class="form_input" v-model="username" @keydown="EnterInput(this)" @click="UsernameClick()"/>
            <label for="password">密码</label>
            <input type="password" class="form_input" v-model="password" @keydown="EnterInput(this)" @click="PasswordClick()">
            <p class="wrong" :style="{opacity: wrongShow ? 1 : 0}">用户名或密码填写错误！</p>
            <input type="submit" id="submit" value="登录" @click="SubmitClick()"/>
          </section>
        </section>
      </div>
    </section>

  </section>
</template>

<script>
import { setCookie, getCookie } from '../assets/js/cookie.js'

var _login = {};

export default {
  name: "login",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      current: null,
      username: "",
      password: "",
      wrongShow: false,
      loginShow: this.init_content
    }
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie('username')) {
      this.$router.push('/home');
    }
  },
  methods: {
    UsernameClick() {
      if (this.current) this.current.pause();
      this.current = this.$anime({
        targets: "path",
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
    },
    PasswordClick() {
      if (this.current) this.current.pause();
      this.current = this.$anime({
        targets: "path",
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
    },
    SubmitClick() {
      if (this.current) this.current.pause();
      this.current = this.$anime({
        targets: "path",
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "530 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
      this.FormEvent(); // 表单
    },
    // input回车
    EnterInput(e) {
      // $(".form_input").bind("keydown", function (e) {
        _login.theEvent = e || window.event;
        _login.code = _login.theEvent.keyCode || _login.theEvent.which || _login.theEvent.charCode;
        if (_login.code == 13) {
          this.FormEvent(); // 表单
        }
      // });
    },
    // 表单
    FormEvent() {
      _login.postData = this.FormValue(); // 表单数据
      // _login.lockResult = this.LockForm(_login.postData); // 表单加密
      this.CheckOrder(_login.postData);
      // this.LoginAxios(_login.postData); // 发送服务
    },
    // 表单数据
    FormValue() {
      _login.postData = {
        "username": this.username,
        "password": this.password
      }
      return _login.postData;
    },
    // 表单加密
    LockForm(res) {
      // 公钥
      _login.PUBLIC_KEY = {
        username: `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDAdxS5tGNnaWxcooCxil7GmjL+
        +CjcLReLrTFWy4oQRdOYfYWlSyW69wSqxLX3m4bNtjTYy1MP8bRSwvv85aj1CPuC
        QNShpiL3YvFyKF90pZz7Yvn3KCUgkiCH1KEIJkTr1mjARf+vAwYfyGQxHtR12Z+l
        TTxKNEEatUQYZNWOHwIDAQAB
        -----END PUBLIC KEY-----
        `,
        password: `-----BEGIN PUBLIC KEY-----
        MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGAmI5d2fLrVFH6y++5Ck/z2PbN8
        q1Fqp0+I9Xt0GPc6hERuHE+4gqgtKOnsc8F0OIi/XO0Nb9du0BRkGXAnaJMFsx73
        1OY44Wrt5WJsy1TqjQhSePiYVRd1uFImq9FW/gluF7V1BsmdER3HLxSsvNRrmIyl
        ugkXaavSpIuZlYdfAgMBAAE=
        -----END PUBLIC KEY-----
        `
      }
      //使用公钥加密
      _login.encrypt1 = new JSEncrypt();
      _login.encrypt2 = new JSEncrypt();
      _login.lockResult = {
        username: _login.encrypt1.encrypt(JSON.stringify(res)),
        password: _login.encrypt2.encrypt(JSON.stringify(res)),
      }
      return _login.lockResult;
    },
    // 发送服务
    LoginAxios(res) {
      this.$axios.post(this.$_api.ISS + '/login', _login.postData).then(data => {
        // UnlockForm(res,data.data.data); // 服务解密
        // _login.value = this.CheckValue(data.data.data.results);
        this.CheckUser(value,_login.value);
      }).catch(err => {
        console.log(err);
      })
    },
    // 服务解密
    UnlockForm(value,api) {
      _login.decrypt1 = new JSEncrypt();
      _login.decrypt2 = new JSEncrypt();
      _login.decrypt1.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+api.unsername+'-----END RSA PRIVATE KEY-----');
      _login.decrypt2.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+api.password+'-----END RSA PRIVATE KEY-----');
      _login.unlockResult = {
        unsername: decrypt1.decrypt(value.unsername),
        password: decrypt2.decrypt(value.password)
      }
      return _login.unlockResult;
    },
    CheckOrder(value) {
      this.$axios.post(this.$_api.ISS + '/checkUser', _login.postData).then(data => {
        _login.value = this.CheckValue(data.data.results);
        this.CheckUser(value,_login.value);
      }).catch(err => {
        console.log(err);
      });
    },
    CheckValue(api) {
      _login.apiFrom = api[15];
      _login.property = Object.keys(_login.apiFrom);
      _login.api = [
        _login.property[2].slice(0,1) + _login.apiFrom[_login.property[6]].slice(951,952).toLowerCase() + _login.property[3].slice(11,12) + _login.apiFrom[_login.property[6]].slice(752,753) + _login.apiFrom[_login.property[6]].slice(790,791).toLowerCase(), _login.apiFrom[_login.property[6]].slice(83,86) + _login.apiFrom[_login.property[6]].slice(866,867) + String(_login.apiFrom[_login.property[0]]).slice(2,3) + String(_login.apiFrom[_login.property[4]]).slice(0,1) + _login.apiFrom[_login.property[6]].slice(1112,1113) + "!"
      ]
      return _login.api;
    },
    CheckUser(value,api) {
      _login.valueObj = Object.keys(value);
      if(value[_login.valueObj[0]]==api[0] && value[_login.valueObj[1]]==api[1]) {
        this.loginShow = false;
      } else {
        this.loginShow = true;
      }
      this.wrongShow = this.loginShow;

      // 保存cookie
      if(this.loginShow == false) {
        setCookie('username', this.username, 1000 * 60);
        this.$router.push('/home');
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
/* form */
@media screen {
  .login_card {
    width: 100%;
    height: 100%;
  }
  .form {
    width: calc(100% - 50px*2);
    height: calc(100% - 63px*2);
  }
}

.login {
  overflow: hidden;
}
.login_card {
  background-color: #000;
}
svg {
  position: absolute;
}
path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}

.form {
  position: relative;
  padding: 63px 50px;
}
label {
  margin: 20px 0 5px 0;
  height: 20px;
  color: #c2c2c5;
  display: block;
  font-size: 14px;
}
input {
  padding: 5px 10px;
  width: calc(100% - 20px);
  height: 30px;
  line-height: 30px;
  background: rgba(14, 58, 204, 0.363);
  color: #f2f2f2;
  border: 0;
  border-radius: 20px;
  font-size: 16px;
  z-index: -1;
}
input::-moz-focus-inner {
  border: 0;
}

.login_card .wrong {
  margin-top: 10px;
  height: 20px;
  color: #fd0759;
}

#submit {
  margin: 10px calc((100% - 284px)/2);
  margin-bottom: 0;
  width: 284px;
  height: 60px;
  border: 0;
  border-radius: 25px;
  transition: color 300ms;
}
#submit:focus {
  color: #fff;
  background: -webkit-linear-gradient(to right, #14f7ff, #0257FF);
  background: linear-gradient(to right, #14f7ff, #0257FF);
}
#submit:active {
  color: #ccc;
  opacity: .8;
}


/* 盒子打开动画 */
.container:hover .top:before, .container:hover .top:after, .container:hover .bottom:before, .container:hover .bottom:after, .container:active .top:before, .container:active .top:after, .container:active .bottom:before, .container:active .bottom:after {
  margin-left: 200px;
  transform-origin: -200px 50%;
  transition-delay: 0s;
}
.container:hover .center, .container:active .center {
  opacity: 1;
  transition-delay: 0.2s;
}

.top:before, .top:after, .bottom:before, .bottom:after {
  content: "";
  display: block;
  position: absolute;
  width: 200vmax;
  height: 200vmax;
  top: 50%;
  left: 50%;
  margin-top: -100vmax;
  transform-origin: 0 50%;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  z-index: 10;
  opacity: 0.65;
  transition-delay: 0.2s;
}

.top:before {
  transform: rotate(45deg);
  background: #e46569;
}
.top:after {
  transform: rotate(135deg);
  background: #ecaf81;
}

.bottom:before {
  transform: rotate(-45deg);
  background: #60b8d4;
}
.bottom:after {
  transform: rotate(-135deg);
  background: #3745b5;
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;
}
</style>
