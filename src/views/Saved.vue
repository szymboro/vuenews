<template>
  <main id="page-wrap" class="container flex-grow px-4 mx-auto my-12">
    <h2 class="mb-8 text-4xl font-bold text-center capitalize">
      Saved News <br />
      ⚆_⚆
    </h2>
    <div class="h-90">
      <a
        class="text-xl font-bold text-center text-black-800 hover:text-purple-900 hover:underline"
        :href="link"
        target="_blank"
        rel="noreferrer"
      >
        {{ title }}
      </a>
      <p class="mt-2 text-justify text-gray-700 line-clamp-4"></p>
    </div>
    <div class="mt-12 bg-red-50" v-if="error">
      <h3 class="px-4 py-1 text-2xl font-bold text-white bg-red-800">
        {{ error.title }}
      </h3>
      <p class="p-4 text-lg font-bold text-red-900">{{ error.message }}</p>
    </div>
  </main>
</template>

// Find a way to save items without using Auth, maby cookies or cache?

<script>
import axios from "axios";
export default {
  name: "NewsSaved",
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      news: this.news,
      page: 1,
      title: [],
      link: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchNews() {
      try {
        this.error = null;

        const url = `https://content.guardianapis.com/${this.news}?api-key=93df89fa-cfaf-48a5-979f-bcfa72389004`;
        console.log(url);
        const response = await axios.get(url);
        const title = response.data.response.content.webTitle;
        const link = response.data.response.content.webUrl;
        this.title = title;
        this.link = link;
      } catch (err) {
        if (err.response) {
          this.error = {
            title: "Server Response (ಠ_ಠ)",
            message: err.message,
          };
        } else if (err.request) {
          this.error = {
            title: "Unable to Reach Server (⋟﹏⋞)",
            message: err.message,
          };
        } else {
          this.error = {
            title: "You have messed up your code (╯°□°)╯︵ ┻━┻",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    Object.keys(localStorage).forEach((key) => {
      console.log(localStorage.getItem(key));
      if (key.startsWith("id")) {
        this.news = localStorage.getItem(key);
        this.fetchNews();
      } else {
      }
    });
  },
};
</script>

<style></style>
