<template>
  <div class="container">
    <el-col :span="24">
      <el-card header="Login">
        <el-form v-model="form" @submit.native.prevent="handleLogin">
          <el-form-item>
            <el-input v-model="form.email" type="email" placeholder="Email address, ex: user@mail.com" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" type="password" placeholder="Enter your password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      try {
        this.$auth.loginWith('local', { data: this.form }).then(() => {
          this.$message({
            message: 'Login success',
            type: 'success'
          })
        }).then(() => {
          this.$message({
            message: 'Failed to login',
            type: 'danger'
          })
        })
      } catch (err) {
        this.$message({
          message: `Error when try to login: ${err}`,
          type: 'success'
        })
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 400px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
