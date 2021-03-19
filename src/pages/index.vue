<template>
  <section>
    
    <interest-header></interest-header>

  </section>
</template>

<script>
import interestHeader from '../components/interestHeader'

export default {
  name: "index",
  components: {
    interestHeader
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>