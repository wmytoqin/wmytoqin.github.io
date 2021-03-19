<template>
  <div class="work">
    <ul>

      <li class="work_li"
        v-for="(item,index) in workArr" :key="index"
      >
        <div class="work_imgBox"><img :src="item.img"/></div>
        <p> {{ item.name }} </p>

      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "interestWorks",
  data() {
    return {
      workArr: []
    }
  },
  mounted() {
    this.WorksApi();
  },
  methods: {
    WorksApi() {
      this.$axios.get('/static/json/works.json').then(res => {
        this.workArr = res.data.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.work {
  float: left;
  padding: 10px;
  width: 200px;
  max-height: calc(100% - 10px*2);
  overflow: auto;
  background-color: #fff;

  li {
    float: left;
    padding: 10px;
    width: 73px;
    height: 110px;
    border: 1px #eee solid;
    .work_imgBox {
      width: 71px;
      height: 71px;
      border: 1px #eee solid;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    p {
      line-height: 16px;
      margin-top: 5px;
      text-align: center;
      @include multiline-ellipsis();
    }
  }

  li:nth-child(2n) {
    margin-left: 10px;
  }

}
</style>