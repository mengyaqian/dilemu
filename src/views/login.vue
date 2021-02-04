<template>
  <div class="login">
    <p class="p-title"><img src="../assets/images/login-title.png" /></p>
    <div class="login-content">
      <img src="../assets/images/logo.png" class="logo" />
      <img src="../assets/images/login-bottom-img.png" class="bottom-img" />
      <div class="form-content">
        <van-cell-group>
          <van-field
            v-model="usrname"
            left-icon="user-circle-o"
            placeholder="请输入账号/手机号"
          />
          <van-field
            v-model="passwd"
            left-icon="goods-collect-o"
             type="password"
            placeholder="请输入密码"
          />
        </van-cell-group>

        <!-- <van-field
          v-model="code"
          center
          clearable
          placeholder="请输入您是手机验证码"
        >
          <template #button>
            <van-button size="small" round type="primary" class="blue">发送验证码</van-button>
          </template>
        </van-field> -->

        <van-button
          type="primary"
          round
          size="large"
          class="loginbtn"
          @click="goLogin"
          >登录</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Login } from "@/api/login";
export default {
  name: "login",
  data() {
    return {
      usrname: "utest",
      passwd: "ptest",
      // code: "",
    };
  },

  methods: {
    async goLogin() {
      const { usrname, passwd } = this;
      console.log(usrname, passwd);
      if (!usrname) {
        this.$toast("请输入账号/手机号");
        return;
      }
      if (!passwd) {
        this.$toast("请输入密码");
        return;
      }
      const res = await Login({ usrname, passwd });
      if (res) {
        this.$toast.success("登录成功");
        this.$cookies.set("token", res.data.token, 60 * 60 * 12);
        this.$cookies.set("usrname", res.data.login, 60 * 60 * 12);
        this.$router.push("/control");
      }
    },
  },
};
</script>
<style scoped lang="less">
.login {
  .blue {
    background: #1279dc;
  }
  width: 100%;
  height: 100%;
  background-color: rgba(30, 141, 255);
  background-image: url(../assets/images/bg.png);
  background-position: center center;
  background-size: cover;
  .p-title {
    padding: 38px 48px 0;
    img {
      width: 100%;
      height: auto;
    }
  }
  .login-content {
    margin: 40px 12px 0;
    height: 389px;
    background-image: url(../assets/images/login-input-bg.png);
    background-position: center center;
    background-size: 100%;
    position: relative;
    .logo {
      position: absolute;
      width: 180px;
      height: 60px;
      top: -30px;
      left: 50%;
      margin-left: -90px;
    }
    .bottom-img {
      position: absolute;
      width: 104px;
      height: 104px;
      bottom: 0;
      left: 50%;
      margin-left: -52px;
    }
    .form-content {
      padding: 65px 35px;
    }
  }
  /* 登录按钮样式 */
  .loginbtn {
    width: 279px;
    height: 46px;
    margin-top: 23px;
    background: #1279dc;
  }
}
</style>