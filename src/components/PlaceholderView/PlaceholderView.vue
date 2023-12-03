<template>
	<div class="c-placeholder">
    <div class="image-placeholder"></div>
    <div v-for="(p, index) in paragraphs" :key="index" class="paragraph-placeholder">
      <div class="string"></div>
      <div class="string"></div>
      <div class="string"></div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'PlaceholderView',
  props: {
    paragraphs: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.image-placeholder {
  width: 100%;
  height: 170px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #DEDEDE;
}

.paragraph-placeholder {
  margin-top: 22px;

  .string {
    width: 272px;
    height: 18px;
    border-radius: 4px;
    background: #DEDEDE;
    margin-top: 9px;
    margin-bottom: 9px;

    &:first-child {
      width: 221px;
    }

    &:last-child {
      width: 174px;
    }
  }
}
</style>
