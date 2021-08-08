<template>
  <div class="w-full h-full flex justify-center flex-col">
    <div class="image-container">
      <img
        :src="images[activeImgIndex].src"
        :alt="images[activeImgIndex].alt"
      />
    </div>
    <div class="mt-3 flex justify-center w-full">
      <button
        :class="dotColor(index)"
        class="h-4 w-4 rounded-2xl mr-2"
        v-for="(image, index) in images"
        :key="index"
        @click="activeImgIndex = index"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      requred: true,
    },
  },
  data() {
    return {
      activeImgIndex: 0,
    };
  },
  methods: {
    dotColor(index) {
      return index === this.activeImgIndex ? 'bg-black' : 'bg-gray-500';
    },
  },
};
</script>

<style>
.image-container {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.image-container img {
  height: 100%;
  transition-property: sliding-horizontally;
}
</style>
