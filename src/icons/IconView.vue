<template>
	<component :is='name' class="icon"></component>
</template>

<script>
import * as icons from './variants'
export default {
  name: 'IconView',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
	height: 32px;
}
</style>
