<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          Home
        </el-menu-item>
        <el-submenu index="2">
          <template v-if="$auth.loggedIn">
            <template slot="title">
              {{ $auth.user.name }}
            </template>
            <el-menu-item index="2-1">
              Profile
            </el-menu-item>
            <el-menu-item @click="logout">
              Logout
            </el-menu-item>
          </template>
          <template v-else>
            <template slot="title">
              Account
            </template>
            <el-menu-item index="2-1">
              Login
            </el-menu-item>
            <el-menu-item index="2-2">
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
