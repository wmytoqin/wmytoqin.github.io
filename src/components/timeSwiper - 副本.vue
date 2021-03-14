<template>
  <div class="indexSwiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.img" alt="" class="slide_img"/>
      </swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" id="pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: 'timeSwiper',
  data () {
    return {
      swiperOption : {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperList: [
        { id: 1, img: require('../assets/img/slider/slide-1.jpg') },
        { id: 2, img: require('../assets/img/slider/slide-2.jpg') },
        { id: 3, img: require('../assets/img/slider/slide-3.jpg') },
        { id: 4, img: require('../assets/img/slider/slide-4.jpg') },
        { id: 5, img: require('../assets/img/slider/slide-5.jpg') }
      ]
    }
  },
  methods: {
    prev() {
      this.$el.swiper.slidePrev();
    },
    next() {
      this.$el.swiper.slideNext();
    }
  }
}
</script>
