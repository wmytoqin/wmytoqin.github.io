<template>
  <section>
    
    <!-- 菜单栏 -->
    <section class="home_container">

      <hobby-sort
        class="hobby_page"
        :sort="sort"
        @changeComponent1Data="component1DataChange"
      ></hobby-sort>

    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import hobbySort from '../components/hobbySort'
import menuComponent from '../components/menu'

export default {
  name: "hobby",
  components: {
    hobbySort,
    menuComponent
  },
  data() {
    return {
      active: 2,
      sort: 1
    }
  },
  methods: {
    // 接收子组件
    component1DataChange(params) {
      console.log(params)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>