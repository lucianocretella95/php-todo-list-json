const { createApp } = Vue;

createApp({
  data() {
    return {
      list: [],
      postRequestConfig: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    };
  },
  methods: {},
  mounted() {
    axios.get("./list.php").then((results) => {
      this.list = results.data;
      // console.log(results.data);
    });
  },
}).mount("#app");
