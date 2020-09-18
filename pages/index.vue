<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">
          Home
        </el-menu-item>
        <el-submenu index="2">
          <template v-if="$auth.loggedIn">
            <template slot="title">
              {{ $auth.user.name }}
            </template>
            <el-menu-item index="/profile">
              Profile
            </el-menu-item>
            <el-menu-item index="2-1" @click="logout">
              Logout
            </el-menu-item>
          </template>
          <template v-else>
            <template slot="title">
              Account
            </template>
            <el-menu-item index="/login">
              Login
            </el-menu-item>
            <el-menu-item index="/register">
              Register
            </el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <el-card title="home">
        <span>home</span>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  auth: false,
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
