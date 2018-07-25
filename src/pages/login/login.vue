<template>
<div>
<mu-container>
  <mu-paper class="login" :z-depth="1">
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-col span="12">
    <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username" style="width:100%"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password" style="width:100%"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-col span="12">
      <mu-button color="primary" @click="submitForm">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
      </mu-col>
    </mu-form-item>
    </mu-col>
  </mu-form>
    </mu-paper>
</mu-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
      submitForm () {
    this.$ajax({
      method: 'post',
      url: 'https://localhost：8089/wx/user/login',
      header: {
        'Content-Type':'Application/json',
        'Authorization':''
      },
      // this.$qs.stringify
      data: ({
        username:"吴六1",
        password:"zxc123",
        client_id:"SU_DI",
        client_secret:"hz_su_di",
        scope:"user"
      })
   }).then(function(res){console.log(res)}).catch(function(res){
     console.log(res)
   })
  },
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style scoped>
</style>
