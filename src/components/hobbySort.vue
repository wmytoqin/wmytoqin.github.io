<template>
  <section>

    <el-carousel :interval="4000" type="card">
      <el-carousel-item
        v-for="(item,index) in sortList" :key="index"
      >
        <h3 class="medium"> {{ item }} </h3>
      </el-carousel-item>
    </el-carousel>

  </section>
</template>

<script>
export default {
  name: "hobbySort",
  props: {
    sort: Number
  },
  data() {
    return {
      sortList: [ "影视", "动画", "游戏", "数码", "B站", "抖音", "美食", "旅游", "服饰", "颜色" ]
    }
  },
  mounted() {
    var _this = this;
    // 点击item
    $('.el-carousel__item').click(function() {
      _this.sort = $(".el-carousel__container .el-carousel__item").index(this);
      _this.$emit("changeComponent1Data", _this.sort);
    })
    // 点击button
    var direction;
    $('.el-carousel__arrow').click(function() {
      if($(this).hasClass('el-carousel__arrow--left')) {
        direction = "left";
      } else {
        direction = "right";
      }
      $('.el-carousel__item').each(function() {
        if($(this).hasClass('is-active')) {
          if(direction == "left") {
           _this.sort = $(".el-carousel__container .el-carousel__item").index(this)-1;
          } else {
            _this.sort = $(".el-carousel__container .el-carousel__item").index(this)+1;
          }
          _this.$emit("changeComponent1Data", _this.sort);
        }
      })
    })
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index.scss";

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
  
.el-carousel__item:nth-child(odd) {
  background-color: #fff;
}
.el-carousel__item:nth-child(even) {
  background-color: #007AFF;
  color: #fff;
}
.el-carousel__item:nth-child(even) h3 {
  color: #fff;
}

.el-carousel__container {
  height: 30px;
}
.el-carousel__indicators--outside {
  display: none;
}
.el-carousel__item h3 {
  line-height: 30px;
  text-align: center;
  letter-spacing: 5px;
  font-weight: normal;
  color: #000;
}
</style>