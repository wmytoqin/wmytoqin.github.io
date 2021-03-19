<template>
  <section>
    
    <interest-header></interest-header>

    <section class="wrap_content">
      <interest-works></interest-works>
      <interest-single></interest-single>
    </section>

  </section>
</template>

<script>
import interestHeader from '../components/interestHeader'
import interestWorks from '../components/interestWorks'
import interestSingle from '../components/interestSingle'

export default {
  name: "index",
  components: {
    interestHeader,interestWorks,interestSingle
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

@media screen {
  .wrap_content {
    padding: 20px;
    width: calc(100% - 20px*2);
    height: calc(100% - 50px - 20px*2);
  }
}
</style>