<template>
<div>
	<TopLine>
    <template #headline>
      <LogoView />
      <LoginIcons />
    </template>
  </TopLine>
	<ProfileSummary />
</div>
</template>

<script>
import TopLine from '@/components/TopLine/TopLine.vue'
import LoginIcons from '@/components/LoginIcons/LoginIcons.vue'
import LogoView from '@/components/LogoView/LogoView.vue'
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary.vue'

export default {
  name: 'ProfilePage',
  components: {
    TopLine,
    LoginIcons,
    LogoView,
    ProfileSummary
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
