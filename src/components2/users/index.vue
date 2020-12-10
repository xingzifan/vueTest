<template>
  <div class="hello">
    <template v-for="item in fff">
      <li :key="item" @click="changeTitle(item)">{{ item }}</li>
    </template>
  </div>
</template>

<script>
export default {
  name: "users",
  props: {
    fff: {
      type: Array,
      required: true
    }
  },

  methods: {
    changeTitle(item) {
      this.$emit("titleChanged", item); //自定义事件, 传递值“子向父组件传值”
    }
  }
};
</script>
