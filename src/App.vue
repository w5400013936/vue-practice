<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <!--<a class="navbar-brand" href="#">book-shop</a>-->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/">每日新闻</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li :class="{'active':$route.path=='/'}">
            <a href="#/">首页</a>
          </li>
          <li :class="{'active':$route.path=='/it'}">
            <a href="#/it?type=it">IT新闻</a>
          </li>
          <li :class="{'active':$route.path=='/keji'}">
            <a href="#/keji?type=keji">科技新闻</a>
          </li>
          <li :class="{'active':$route.path=='/book'}">
            <a href="#/book">书籍</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      message:'Hello'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  margin-top: 60px;
}
</style>
