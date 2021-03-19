  <template>
  <section class="single">

    <h1> {{ singleObj.name }} </h1>
    <ul class="linkBox">
      <h3>链接</h3>
      <div class="link_parent">
        <div class="link_content">
          <a>https://www.baidu.com</a>
          <a>https://www.baidu.com</a>
          <a>https://www.baidu.com</a>
          <a>https://www.baidu.com</a>
        </div>
      </div>
    </ul>

    <ul class="imgBox">
      <h3>图集</h3>
      <li v-for="(item,index) in singleObj.imgArr" :key="index">
        <img :src="item.img"/>
        <p> {{ item.title }} </p>
      </li>
    </ul>

    <ul class="dataBox">
      <h3>剧情</h3>
      <div class="data_parent">
        <div class="data_content">
          <div>
            <li v-for="(item,index) in singleObj.data" :key="index">
              <img :src="item.img"/>
              <h3> {{ item.title }} </h3>
              <artical> {{ item.article }} </artical>
            </li>
          </div>
        </div>
      </div>
    </ul>

  </section>
</template>

<script>
export default {
  name: "interestSingle",
  data() {
    return {
      singleObj: {
        name: "作品名称",
        data: [
          { img: "https://i.im5i.com/2021/02/26/hl5Gs.png", title: "小标题小标题小标题", article: "剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情" },
          { img: "https://i.im5i.com/2021/02/26/hl5Gs.png", title: "小标题小标题小标题", article: "剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情" },
          { img: "https://i.im5i.com/2021/02/26/hl5Gs.png", title: "小标题小标题小标题", article: "剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情剧情" }
        ],
        imgArr: [
          { img: "https://i.im5i.com/2021/02/26/hl5Gs.png", title: "小标题小标题小标题" },
          { img: "https://i.im5i.com/2021/02/26/hl5Gs.png", title: "小标题小标题小标题" }
        ]
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

@media screen {
  .single {
    float: left;
    margin-left: 20px;
    padding: 20px;
    width: calc(100% - 200px - 20px*4);
    height: calc(100% - 20px*2);
    line-height: 24px;
    background-color: #fff;

    h1 {
      margin-bottom: 10px;
      font-size: 2em;
      text-align: center;
    }
    a {
      color: rgb(39, 153, 247);
      margin: 10px;
    }
    ul {
      margin: 10px 0;
      overflow: hidden;
    }
    p {
      text-align: center;
    }

    .linkBox {
      height: 100px;
      .link_parent {
        overflow: auto;
      }
    }

    .imgBox li {
      float: left;
    }

    .data_parent {
      overflow: hidden;
      height: 420px;
    }
    .data_content {
      overflow: auto;
      height: 420px;
    }

  }
}
</style>