<template>
  <main id="page-wrap" class="container flex-grow px-4 mx-auto my-12">
    <slot />
    <h2 class="mb-8 text-4xl font-bold text-center capitalize">
      Guardian Sections <br />
      (〜￣▽￣)〜
    </h2>
    <NewsFilter v-model="section" :fetch="fetchNews" />
    <br /><br />
    <NewsList v-if="!loading && !error" :posts="posts" />
    <div class="mt-40" v-if="loading">
      <p class="text-6xl font-bold text-center text-gray-500 animate-pulse">
        Loading...
      </p>
    </div>
    <div class="mt-12 bg-red-50" v-if="error">
      <h3 class="px-4 py-1 text-2xl font-bold text-white bg-red-800">
        {{ error.title }}
      </h3>
      <p class="p-4 text-lg font-bold text-red-900">{{ error.message }}</p>
    </div>
    <br /><br /><br />
    <page>
      <button @click="changeback">← Newer</button>
      {{ page }} of {{ maxpage }}
      <button @click="changenext">Older →</button>
    </page>
  </main>
</template>

<script>
import axios from "axios";
import NewsFilter from "../components/NewsFilter.vue";
import NewsList from "../components/NewsList.vue";
export default {
  components: {
    NewsFilter,
    NewsList,
  },
  data() {
    return {
      section: "news",
      page: 1,
      maxpage: [],
      posts: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    changenext() {
      if (this.page <= this.maxpage) {
        this.page = this.page + 1;
        this.fetchNews();
      } else {
      }
    },
    changeback() {
      if (this.page > 1) {
        this.page = this.page - 1;
        this.fetchNews();
      } else {
      }
    },

    async fetchNews() {
      try {
        this.error = null;
        const url = `https://content.guardianapis.com/${this.section}?page=${this.page}&api-key=93df89fa-cfaf-48a5-979f-bcfa72389004`;
        const response = await axios.get(url);
        const results = response.data.response.results;
        const pages = response.data.response.pages;
        this.maxpage = pages;
        this.posts = results.map((post) => ({
          currentPage: post.currentPage,
          title: post.webTitle,
          url: post.webUrl,
          api_id: post.id,
          published_date: post.webPublicationDate,
        }));
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
    this.fetchNews();
  },
};
</script>

<style></style>
