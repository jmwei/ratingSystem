<template>
  <div class="main">
    <router-view/>
    <div class="footer">
      <mt-tabbar v-model="selected" :fixed = "true">
        <mt-tab-item id="0" @click.native = "toHome()">
          <img src="../assets/home.png" alt="" v-if="selected === '0'">
          <img src="../assets/home-1.png" alt="" v-if="selected !== '0'">
          <div>首页</div>
        </mt-tab-item>
        <mt-tab-item id="1" @click.native = "toCategory()">
          <img src="../assets/category.png" alt="" v-if="selected === '1'">
          <img src="../assets/category-1.png" alt="" v-if="selected !== '1'">
          <div>分类</div>
        </mt-tab-item>
        <mt-tab-item id="2" @click.native = "toPersonal()">
          <img src="../assets/personal.png" alt="" v-if="selected === '2'">
          <img src="../assets/personal-1.png" alt="" v-if="selected !== '2'">
          <div>我的</div>
        </mt-tab-item>
      </mt-tabbar>
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
      toast() {
        this.$toast({
          message: '操作成功',
          iconClass: 'mint-toast-icon mintui mintui-success'
        });
      },
      toHome() { //前往主页
        this.$router.push({path: '/home'})
      },
      toCategory() { //前往分类页
        this.$router.push({path: '/category'})
      },
      toPersonal() { //前往个人中心页
        this.$router.push({path: '/personal'})
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>

  .footer {
    img {
      width: 36px;
      height: 36px;
    }
    .mint-tab-item {
      padding: 3px 0;
    }
  }

</style>
