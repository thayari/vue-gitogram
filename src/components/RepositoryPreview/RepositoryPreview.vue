<template>
	<div class="c-repository">
		<h2 class="title">{{ repositoryData.title }}</h2>
		<p class="description">{{ repositoryData.description }}</p>
		<div class="details-container">
			<CountButton label="Star" iconName="IconStar" :count=repositoryData.starCount />
			<CountButton label="Fork" iconName="IconFork" :count=repositoryData.forkCount />
		</div>
	</div>
</template>

<script>
import CountButton from '../PostStats/PostStats.vue'

export default {
  name: 'RepositoryPreview',
  components: {
    CountButton
  },
  props: {
    repositoryData: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        description: '',
        starCount: 0,
        forkCount: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
	.c-repository {
		padding: 24px 20px;
		border-radius: 10px;
		border: 1px solid #F1F1F1;
		background: #FFF;
		box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.07);
		margin-top: 16px;
		margin-bottom: 18px;
		font-size: 14px;

		.title {
			font-size: 26px;
			font-style: normal;
			font-weight: 700;
			line-height: 28px;
			margin-bottom: 15px;
		}

		.details-container {
			margin-top: 32px;
			display: flex;
		}
	}
</style>
