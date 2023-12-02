<template>
  <h1 class="logo" :class="{ white: white }">Gitogram /</h1>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: #000;
}

.logo.white {
  color: #fff;
}
</style>
