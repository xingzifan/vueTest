<template>
  <div>
    <child-com2 v-bind="$attrs" v-on="$listeners"></child-com2>
  </div>
</template>

<script>
const childCom2 = () => import("./childCom2.vue");
export default {
  components: {
    childCom2
  },

  // inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性

  // props: {
  //   foo: String // foo作为props属性绑定
  // },

  created() {
    console.log(111, this.$attrs, this.$listeners); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
