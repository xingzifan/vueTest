<template>
  <div>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 20
    };
  },

  methods: {
    send() {
      this.$Event.$emit("data-b", this.age);
      this.$Event.$emit("data-c", this.age);
    }
  }
};
</script>
