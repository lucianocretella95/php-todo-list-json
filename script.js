const { createApp } = Vue;

createApp({
  data() {
    return {
      list: [],
    };
  },
  methods: {},
  mounted() {
    axios.get("./server.php").then((results) => {
      // console.log("Risultati: ", results);
      this.list = results.data;
    });
  },
}).mount("#app");
