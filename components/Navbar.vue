<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand href="#">
      Blog
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse" />

    <b-collapse id="navbar-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">
          Home
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!$auth.loggedIn" href="/login" right>
          Login
        </b-nav-item>

        <b-nav-item-dropdown v-else right>
          <template slot="button-content">
            {{ $auth.user.name }}
          </template>

          <b-dropdown-item href="#">
            My Post
          </b-dropdown-item>

          <b-dropdown-item href="#">
            Logout
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
