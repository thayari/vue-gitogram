<template>
	<div class="c-topline">
		<div class="g-container">
			<div class="headline">
				<slot name="headline"></slot>
			</div>
			<div class="content" v-if="$slots.content">
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped src="./TopLine.scss"></style>
