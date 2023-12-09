<template>
	<button class="c-button">
		<slot></slot>
	</button>
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
	font-weight: 700;
	padding: 11px 18px;
	border-radius: 5px;
	transition: background-color 200ms ease;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #1f883d;
	}
}

</style>
