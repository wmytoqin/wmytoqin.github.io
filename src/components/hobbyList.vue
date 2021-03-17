<template>
  <section class="hobby_ul">
    
    <li class="hobby_list"
      v-for="(item,index) in hobbyList" :key="index"
    >
      <section class="hobby_list-img_container"><img :src="item.img"/></section>
      <p> {{ item.name }} </p>
    </li>
  
  </section>
</template>

<script>
export default {
  name: "hobbyList",
  props: {
    active: Number
  },
  data() {
    return {
      hobbyList: []
    }
  },
  mounted() {
    console.log(this.active)
    this.$axios.get('/static/json/list=' + this.active + '.json').then(res => {
      this.hobbyList = res.data.data;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.hobby_ul {
  padding: 10px;
  width: calc(100% - 10px*2);
  height: calc(100% - 60px - 30px - 10px*2);
  font-size: 0;
  .hobby_list {
    float: left;
    margin: 0 10px 10px 0;
    padding: 10px;
    width: calc((100% - 10px*8)/3);
    height: 140px;
    background-color: #fff;
    font-size: 14px;

    &-img_container {
      margin-bottom: 10px;
      width: 100%;
      height: 100px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      box-shadow:rgba(0, 0, 0, 0.089) 0 0 3px;
      align-items: center;
      background-color: #e8e8e8;
      img {
        height: 100%;
      }
    }

    p {
      @include multiline-ellipsis();
      height: 30px;
      line-height: 15px;
    }

  }
  .hobby_list:nth-child(3n) {
    margin-right: 0;
  }
}
</style>