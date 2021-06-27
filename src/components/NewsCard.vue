<template>
  <section class="p-4 rounded-lg shadow-lg bg-gray-50 w-80">
    <div class="save">
      <button
        @click="saveInCache"
        id="saveforlater"
        type="button"
        title="Save for later"
      >
        📌
      </button>
    </div>
    <div class="h-90">
      <a
        class="text-xl font-bold text-center text-black-800 hover:text-purple-900 hover:underline"
        :href="post.url"
        target="_blank"
        rel="noreferrer"
      >
        {{ post.title }}
      </a>
      <p class="mt-2 text-justify text-gray-700 line-clamp-4"></p>
    </div>
    <div>
      <p class="font-light text-gray-600">
        {{ formatDate(post.published_date) }}
      </p>
    </div>
  </section>
</template>

<script>
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "NewsCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    //this.post.api_id
    saveInCache() {
      const title = "id:" + uuidv4();
      localStorage.setItem(title, this.post.api_id);
    },
    formatDate(strDate) {
      return format(new Date(strDate), "HH:mm do-MMM-yyyy");
    },
  },
};
</script>

<style>
#saveforlater {
  float: right;
}
</style>