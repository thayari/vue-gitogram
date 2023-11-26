<template>
	<button class="c-button">{{ textContent || 'Follow'}}</button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    textContent: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button {
	background-color: #31AE54;
	color: #FFF;
	text-align: center;
	font-size: 16px;
	line-height: 22px;
	font-weight: 700;
	padding: 11px 18px;
	border-radius: 5px;
	transition: background-color 200ms ease;
	width: 100%;

	&:hover {
		background-color: #1f883d;
	}
}

</style>
