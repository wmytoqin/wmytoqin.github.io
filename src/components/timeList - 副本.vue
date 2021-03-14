<template>

  <el-timeline :reverse="true">
    <el-timeline-item
      :timestamp="item.date"
      placement="top"
      :color="index%2==0 ? '#5CC9FA' : ''"
      v-for="(item,index) in timeList"
      :key="index"
    >
      <el-card>
        <div class="img_box" v-lazy="item.img">
          <img :src="item.img">
        </div>
        <div class="text_box">
          <h3> {{ item.title }} </h3>
          <p> {{ item.detail }} </p>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    
</template>

<script>
export default {
  name: "time",
  data() {
    return {
      timeList: []
    }
  },
  mounted () {
    this.GetAjax();
  },
   methods: {
     GetAjax () {
        this.$axios.get('/static/json/time.json').then(res => {
          this.AjaxSuccess(res);
        }).catch(err => {
          console.log(err);
        });
     },
     AjaxSuccess (res) {
       this.timeList= res.data.data;
     }
   }
}
</script>

<style lang="scss">
@import "../assets/scss/index.scss";

.el-card__body {
  height: 60px;
  padding: 10px;
}

.img_box, .text_box {
  float: left;
}
.img_box {
  width: 60px;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.text_box {
  padding: 5px;
  width: calc(100% - 60px - 10px*2);
  h3 {
    margin-bottom: 5px;
    @include ellipsis();
  }
  p {
    line-height: 15px;
    @include multiline-ellipsis();
  }
}
</style>