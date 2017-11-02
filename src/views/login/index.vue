<template>
  <div class="login-container">
      <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h2 style="margin:150px 0 20px 0;"><span class="red strong"><img src="/static/images/logos.png" width="400" height="40"></span></h2>
          <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
                   class="form-horizontal">
            <div class="form-group">
              <label for="username" class="col-md-2 control-label">用户名：</label>
              <div class="col-md-8">
                <input type="text" class="form-control" id="username" name="username" v-model="loginForm.username">
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-md-2 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
              <div class="col-md-8">
                <input type="password" class="form-control" name="password" id="password" v-model="loginForm.password">
              </div>
            </div>
            <div class="form-group">
              <label for="VerifyCode" class="col-md-2 control-label">验证码：</label>
              <div class="col-md-8">
                <input type="text" class="form-control" id="VerifyCode" name="VerifyCode">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-md-2 control-label"></label>
              <div class="col-md-8">
                <img src="" alt="" class="vimg">&nbsp;&nbsp;<span><a href="javascript:;" id="averify" class="c_lan">换一张</a></span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-3 col-md-8">
                <button type="button" class="btn btn-primary" @click="handleLogin"><span class="glyphicon glyphicon-log-in"></span> 登录</button>
                <button type="reset" class="btn btn-warning"><span class="glyphicon glyphicon-refresh"></span> 取消</button>
              </div>
            </div>
          </el-form>
        </div>
        <div class="col-md-4"></div>
      </div>
      <!--<h3 class="title">系统登录</h3>-->
       <!--<el-form-item prop="username">-->
        <!--<span class="svg-container svg-container_login">-->
          <!--<icon-svg icon-class="yonghuming" />-->
        <!--</span>-->
        <!--<el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />-->
      <!--</el-form-item>-->
      <!--<el-form-item prop="password">-->
        <!--<span class="svg-container">-->
          <!--<icon-svg icon-class="mima" ></icon-svg>-->
        <!--</span>-->
        <!--<el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"-->
          <!--placeholder="密码"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">-->
          <!--登录-->
        <!--</el-button>-->
      <!--</el-form-item>-->
      <!--<div class='tips'>账号:admin 密码随便填</div>-->
      <!--<div class='tips'>账号:editor  密码随便填</div>-->
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    @include relative;
    height: 100vh;
    background-color: #ddd;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
