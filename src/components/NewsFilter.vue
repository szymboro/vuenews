<template>
  <div class="flex justify-center p-4 rounded">
    <!-- Dropdown -->
    <div class="relative inline-flex">
      <select
        class="h-10 pl-5 pr-10 text-black-600 bg-white border border-gray-300 rounded-lg appearance-none hover:border-gray-400 focus:outline-none"
        v-model="section"
        @change="fetch"
      >
        <option
          v-for="(section, index) in sections"
          :key="index"
          :value="section"
        >
          {{ capitalize(section) }}
        </option>
      </select>
    </div>
    <!-- End Dropdown -->
    <div class="self-center ml-8"></div>
  </div>
</template>

<script>
import { computed } from "vue";
import sectionsData from "./sections";

export default {
  props: {
    modelValue: String,
    fetch: Function,
  },
  setup(props, { emit }) {
    const section = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return {
      section,
    };
  },
  data() {
    return {
      sections: sectionsData,
    };
  },
  methods: {
    onChange(fetch) {
      console.log(this.fetch.target.value);
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
