export const mixinsTest = {
  methods: {
    hello() {
      console.log("hello_mixins");
    }
  },
  beforeCreate() {
    console.log("混入的beforeCreated");
  },
  created() {
    this.hello();
  }
};

export const mixinsTest2 = {
  methods: {
    hello2() {
      console.log("hello_mixins2");
    }
  },
  created() {
    this.hello2();
  }
};

//只能使用一个extends对象，多个无效，extends会先于mixins执行
export const extendsTest = {
  methods: {
    hello3() {
      console.log("hello_extends");
    }
  },
  beforeCreate() {
    console.log("extends的beforeCreated");
  },
  created() {
    this.hello3();
  }
};
