<template>
  <section class="p-4 rounded-lg shadow-lg bg-gray-50 w-80">
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
      <p class="mt-4 font-bold text-gray-600">{{ post.byline }}</p>
      <p class="font-light text-gray-600">
        {{ formatDate(post.published_date) }}
      </p>
    </div>
  </section>
</template>

<script>
import { format } from "date-fns";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(strDate) {
      return format(new Date(strDate), "MMMM do, yyyy");
    },
  },
};
</script>
