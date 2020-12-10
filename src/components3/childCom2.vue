<template>
  <div>
    <child-com3 v-bind="$attrs" foo="123"></child-com3>
  </div>
</template>

<script>
const childCom3 = () => import("./childCom3.vue");
export default {
  components: {
    childCom3
  },

  inheritAttrs: false,

  props: {
    boo: String
  },

  created() {
    console.log(222, this.$attrs); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
