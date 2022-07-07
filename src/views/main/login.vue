<template>
  <div class="login">
    <div class="box">
      <div class="box-left"></div>
      <div class="box-right">
        <el-form
          ref="login"
          class="frm"
          status-icon
          :model="params"
          :rules="rules"
        >
          <div class="logo">
            <img src="@assets/images/login-bg.webp" alt="logo" />
          </div>
          <div class="title">欢迎您登录积分墙系统</div>

          <el-form-item prop="username">
            <el-input
              placeholder="账号"
              v-model.trim="params.username"
              @keyup.enter.native="login('login')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="密码"
              show-password
              v-model.trim="params.password"
              @keyup.enter.native="login('login')"
            ></el-input>
          </el-form-item>

          <div class="btn">
            <el-button
              type="primary"
              round
              :loading="loading"
              @click.stop="login('login')"
              >登录</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Login } from "@api/user";

export default {
  data() {
    return {
      loading: false,
      params: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["user/SETOKEN"]),
    ...mapActions(["user/GetUserInfo"]),
    login(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true;
            const res = await Login(this.params);
            this["user/SETOKEN"](res.access_token);
            await this["user/GetUserInfo"]();
            this.$message.success("登录成功");
            this.$router.push("/");
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: transparent;
  background-image: url("~@assets/images/login-bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 60vw;
    min-width: 1120px;
    height: 65vh;
    min-height: 600px;
    background: rgba(15, 15, 15, 0.65);
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
      0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
      0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    transition: all 0.5s;

    > div {
      width: 50%;
    }

    .box-left {
      background-image: url("~@assets/images/login-box-bg.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 30px 0 0 30px;
    }

    .box-right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .frm {
        width: 70%;
        max-width: 500px;

        .logo {
          display: flex;
          justify-content: center;

          > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }

        .title {
          padding: 10px 0 60px;
          font-size: 24px;
          line-height: 36px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
        }

        ::v-deep .el-input__inner {
          height: 44px;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 44px;
          letter-spacing: 1px;
          background: #000000;
          border-color: #000000;
          border-radius: 6px;

          &::-webkit-input-placeholder {
            color: rgba(140, 140, 140, 1);
          }
        }

        .btn {
          padding-top: 40px;
          display: flex;
          justify-content: center;

          ::v-deep .el-button {
            display: block;
            margin: 0 55px;
            width: 100%;
            height: 44px;
          }
        }
      }
    }
  }
}
</style>
