<template>
<span class="icon">
  <IconView name="IconLoading"/>
</span>
</template>

<script>
import IconView from '@/icons/IconView'
export default {
  name: 'LoaderView',
  components: { IconView }
}
</script>

<style scoped>
.icon {
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
