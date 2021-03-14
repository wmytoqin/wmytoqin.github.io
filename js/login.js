var _login = {};

$(function() {
  _login.LoginInit();
})

_login.LoginInit = (() => {
  new Vue({
    el: '.login',
    data() {
      return {
        current: null,
        username: "",
        password: "",
        loginShow: parent._window.initVue._data.loginShow,
        wrongShow: false
      }
    },
    methods: {
      UsernameClick() {
        if (this.current) this.current.pause();
        this.current = anime({
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
        this.current = anime({
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
        this.current = anime({
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
      // 表单
      FormEvent() {
        _login.postData = this.FormValue(); // 表单数据
        // _login.lockResult = this.LockForm(_login.postData); // 表单加密
        this.CheckOrder(_login.postData);
        this.LoginAxios(_login.postData); // 发送服务
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
        $.ajax({
          type: "POST",
          url: _api.ISS + '/login',
          data: res,
          dataType: "json",
          success: function (data) {
            if(data.status == 200) {
              // UnlockForm(res,data.data); // 服务解密
              // console.log(data)
            } else {
              console.log(data)
            }
          },
          error(xhr, textStatus, errorThrown) {
            console.log(xhr);
            console.log(textStatus);
            console.log(errorThrown); 
          }
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
        axios.post(_api.ISS + '/checkUser', _login.postData).then(data => {
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
        if(this.loginShow == false) {
          parent._window.initVue._data.loginShow = false;
        }
      }
    }
  });
})