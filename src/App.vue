<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

html,
body,
div,
span {
  margin: 0;
  padding: 0;
  border: 0;
}

span {
  line-height: 1;
}

img {
  display: block;
}
</style>
