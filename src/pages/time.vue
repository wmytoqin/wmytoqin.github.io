<template>
  <section>
    
    <!-- 菜单栏 -->
    <section class="home_container">

      <time-swiper class="time_swiper"></time-swiper>
      <time-list class="time_list"></time-list>

    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import timeSwiper from '../components/timeSwiper'
import timeList from '../components/timeList'
import menuComponent from '../components/menu'

export default {
  name: "time",
  components: {
    timeSwiper,timeList,
    menuComponent
  },
  data() {
    return {
      active: 0,
      listArray: [
        {
          img: "https://i.im5i.com/2021/02/26/hlo4G.png",
          title: "111",
          detail: "aaa"
        },
        {
          img: "https://i.im5i.com/2021/02/26/hlo4G.png",
          title: "111",
          detail: "aaa"
        }
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

</style>