  <template>
  <section class="header">
    
    <li
      :class="active==index ? 'active' : ''"
      v-for="(item,index) in headerArr" :key="index"
      @click="HeaderClick(index)"
    >
      {{ item }}
    </li>

  </section>
</template>

<script>
export default {
  name: "interestHeader",
  data() {
    return {
      headerArr: [ "动漫", "影剧", "原作", "游戏", "数码", "工作", "生活", "新闻" ],
      active: 0
    }
  },
  methods: {
    /* 点击header */
    HeaderClick(index) {
      this.active = index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

@media screen {
  .header {
    width: 100%;
    height: $header_height;
    li {
      height: $header_height;
      line-height: $header_height;
    }
  }
}

.header {
  background-color: #7592BD;
  font-size: 0;
  text-align: center;

  li {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding: 0 15px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  li.active {
    color: #E1C86D;
  }
  li.active:after {
    content: "";
    position: absolute;
    left: calc(50% - 6px);
    bottom: -12px;
    width: 0; 
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color:#7592BD transparent transparent transparent;
  }
  li:hover {
    background-color: rgb(99, 137, 196);
    transition: all .2s ease;
  }
}
</style>