<template>
	<div class="g-container">
		<div class="auth-wrapper">
			<AuthView />
		</div>
	</div>
</template>

<script>
import AuthView from '../../components/AuthView/AuthView.vue'

export default {
  components: { AuthView }
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
	margin-left: auto;
	margin-right: auto;
	width: 256px;
}
</style>
