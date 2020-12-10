<template>
  <div>
    <!-- <h3 :style="{ color: injections.theme.color }">F 组件</h3> -->
    <div @click="tyu()">dflsgf</div>
  </div>
</template>

<script>
export default {
  // inject: {
  //   theme: {
  //     //函数式组件取值不一样
  //     default: () => ({})
  //   }
  // },

  mounted() {
    // console.log(44, this.injections.theme.color);
  },

  methods: {
    tyu: function() {
      console.log(222);
    }
  }
};
</script>
