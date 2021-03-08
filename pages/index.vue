<template>
  <div class="container">
    <div class="p">
      home
    </div>
  </div>
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
