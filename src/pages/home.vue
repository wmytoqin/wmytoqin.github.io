<template>
  <section>
    
    <!-- 菜单栏 -->
    <section class="home_container">
      <section class="home_contain">

        homePage

      </section>
    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import menuComponent from '../components/menu'

export default {
  name: "home",
  components: {
    menuComponent
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>