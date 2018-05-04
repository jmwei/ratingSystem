<template>
  <div class="details">
    <div class="header">
      <mt-header fixed title="Details"></mt-header>
    </div>
    <div class="content">
      <div class="details-name">Annihilation(2018)</div>
      <div class="details-content">
        <div class="details-content-left">
          <img src="../assets/movie-1.png" alt="">
        </div>
        <div class="details-content-right">
          <div>
            <span>导演：</span>
            <span class="actor">亚历克斯</span>
          </div>
          <div>
            <span>主演：</span>
            <span class="major">詹妮弗/娜塔莉/汤普森</span>
          </div>
          <div>
            <span>类型：</span>
            <span class="type">剧情/科幻/惊悚</span>
          </div>
          <div>
            <span>片长：</span>
            <span class="time">115分钟</span>
          </div>
          <div>
            <span>评分：</span>
            <span class="rating">7.3</span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="clr"></div>
      </div>
      <div class="release-time">
        上映日期：2018-04-13(中国大陆)
      </div>
      <div class="synopsis">
        <div class="synopsis-1">Annihilation剧情简介</div>
        <div class="synopsis-2">
          莉娜（娜塔莉·波特曼 Natalie Portman 饰）是一名生物学家，一年前，她的丈夫凯恩（奥斯卡·伊萨克 Oscar Isaac 饰）在参加一项秘密任务后神秘失踪，这一年间，莉娜一直生活在悲伤之中。某天，失忆的凯恩忽然出现在了莉娜的面前，之后晕倒被送入了医院。在那里，莉娜遇见了文崔斯博士（詹妮弗·杰森·李 Jennifer Jason Leigh 饰）。
        </div>
      </div>
      <div class="comments">
        <div class="comments-1">Annihilation短评</div>
        <div class="comments-2">
          <div>饮歌 看过  2018-02-24</div>
          <div>科幻片拍成这样，可以说是相当高级了！惊心动魄又渗透着冷峻的美感，神秘莫测还搭配着复杂的内核，真的很久没有看一部怪奇题材的科幻电影能让人如此屏气凝神了。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '0'
      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style  lang="scss" scoped>
  .details {
    .header {
      .mint-header {
        height: 55px;
        background: #00204a;
      }
    }

    .content {
      margin-top: 65px;
      padding: 10px;
      .details-name {
        font-size: 16px;
        font-weight: bolder;
      }
      .details-content {
        margin-top: 15px;
        .details-content-left {
          float: left;
          width: 30%;
          height: 150px;
          border: solid 1px #eaeaea;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .details-content-right {
          float: right;
          width: 65%;
          height: 150px;
          border: solid 1px #eaeaea;
          div {
            padding: 6px 3px;
          }
          .actor {
            color: #666699;
          }
          .major {
            color: #666699;
          }
          .type {
            color: #666699;
          }
          .time {
            color: #666699;
          }
          .rating {
          }
        }
        .clr {
          clear: both;
        }
      }

      .release-time {
        margin-top: 10px;
      }
      .synopsis {
        margin-top: 10px;
        .synopsis-1 {
          color: #61b0cf;
          font-size: 15px;
        }
        .synopsis-2 {
          margin-top: 5px;
          font-size: 11px;
        }
      }
      .comments {
        margin-top: 10px;
        .comments-1 {
          color: #61b0cf;
          font-size: 15px;
        }
        .comments-2 {
          margin-top: 5px;
          font-size: 11px;
        }
      }
    }
  }
</style>
