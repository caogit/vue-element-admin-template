<template>
  <div class="loginContain">
    <el-form ref="ruleForm" :rules="rules" :model="form" label-width="0" class="formStyle">
      <div class="topText">
        <div>
          <span>欢迎使用商务管理系统</span>
        </div>
      </div>
      <el-form-item prop="user" class="login_inputStyle nolabel">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="form.user"
          placeholder="请输入你的登录手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" class="login_inputStyle nolabel">
        <!-- keyup.enter.native是回车事件 -->
        <el-input
          v-model="form.password"
          prefix-icon="el-icon-unlock"
          placeholder="请输入你的登录密码"
          @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="checkBox">记住密码</el-checkbox>
      <el-button
        class="btnLogin"
        type="primary"
        @click="submitForm('ruleForm')"
        style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
// import { setToken } from '@/utils/auth';
// import { ApiUrl } from '@/api/index';
export default {
  data() {
    return {
      form: {
        user: 'caolei',
        password: '666666',
      },
      checked: false,
      rules: {
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        user: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let parms = {
            username: this.form.user,
            password: this.form.password,
          };
          await this.$store.dispatch('user/setUserToken', parms);
          this.$router.push('/');
          return true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loginContain {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .formStyle {
    width: 448px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .topText {
      width: 100%;
      font-size: 30px;
      color: #fff;
      text-align: center;
      margin-bottom: 25px;
    }

    .checkBox {
      margin-bottom: 8px;
    }
    .btnLogin {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
