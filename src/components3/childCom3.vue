<template>
  <div></div>
</template>

<script>
export default {
  props: {
    foo: String,
    boo: String,
    coo: String,
    doo: String,
    title: String
  },

  created() {
    console.log(333, this.$attrs); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
