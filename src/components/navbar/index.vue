<template>
  <div class="navbar">
    <ul id="main">
      <li><router-link to="/food">商品</router-link></li>
      <li><router-link to="/rating">评价</router-link></li>
      <li><router-link to="/seller">商家</router-link></li>
    </ul>

    <!-- 路由匹配到的组件将显示在这里 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style src="./index.css" scoped></style>
