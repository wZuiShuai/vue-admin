<template>
  <div class="login f-center">
    <div class="content">
      <div class="left">
        <img src="@/static/user/login_left0.png" alt="login" />
      </div>
      <div class="right">
        <img
          class="form_icon"
          src="@/static/user/form_icon.png"
          alt="form_icon"
        />
        <div class="box">
          <div class="logo f-center">
            <img src="@/assets/vue.svg" alt="logo" />
            <p class="text">Admin</p>
          </div>
          <el-form ref="formRef" :model="user" @keyup.enter="sub">
            <el-form-item
              prop="username"
              :rules="[
                {
                  required: true,
                  message: '请输入用户名',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="user.username"
                size="large"
                placeholder="用户名："
              >
                <template #prefix>
                  <el-icon>
                    <component is="User"></component>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="{
                required: true,
                message: '请输入密码',
                trigger: ['blur'],
              }"
            >
              <el-input
                v-model="user.password"
                size="large"
                show-password
                autocomplete="new-password"
                placeholder="密码："
              >
                <template #prefix>
                  <el-icon>
                    <component is="Lock"></component>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button icon="CircleClose" size="large" round>重置</el-button>
              <el-button type="primary" size="large" round @click="sub"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from "vue";
import { login } from "@/api/user";

// import {ElMessage } from "element-plus";
// const formRef = ref<any>();

const user = reactive<{
  username: string;
  password: string;
}>({
  username: "",
  password: "",
});

const sub = async () => {
  let res = login({
    username: "123",
    password: "123",
  });
  console.log(res);
};

// const userLogin = ()=>{
//   if (!formRef.value) return
//   formRef.value.validate((valid:any) => {
//     if (valid) {
//       sub()
//     } else {
//       console.log('error submit!')
//     }
//   })
// }
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background: #eee url(@/static/user/login_bg.svg) no-repeat;
  background-size: cover;
  background-position: 50%;
  min-height: 550px;
  min-width: 550px;

  .content {
    width: 96%;
    height: 94%;
    padding: 0 4%;
    background-color: hsla(0deg, 0%, 100%, 0.8);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .left {
      max-width: 800px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex-shrink: 0;
      position: relative;
      height: 395px;
      width: 500px;

      .form_icon {
        position: absolute;
        top: -55px;
        right: -75px;
      }

      .box {
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.98);
        border-radius: 10px;
        box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
        position: absolute;
        z-index: 2;
        padding: 50px 40px 45px;
        .logo {
          margin-bottom: 45px;
          img {
            width: 60px;
            height: 52px;
          }

          .text {
            padding-left: 25px;
            font-size: 2.334rem;
            font-weight: bold;
            color: #34495e;
            white-space: nowrap;
          }
        }
        .el-form {
          .el-form-item {
            margin-bottom: 40px;
            .el-button {
              flex: 1;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .login {
    min-width: 100%;
    .content {
      overflow: hidden;
      .right {
        flex-shrink: 0;
        width: 100%;
      }
    }
  }
}
</style>
