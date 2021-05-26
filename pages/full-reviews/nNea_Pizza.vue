<template>
  <v-app>
    <div class="container text-center">
      <p class="my-8 text-xl">nNea</p>

      <div class="flex">
        <div class="flex flex-col">
          <div class="bg-gray-100 my-3 p-2">
            <h2>opening hours</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            suscipit hendrerit eros, sit amet iaculis lacus laoreet eu.
            Curabitur ut dui sit amet odio blandit euismod at vitae quam.
            Vivamus eu lorem cursus, fermentum quam volutpat, varius erat. Ut
            sed dolor lobortis, scelerisque metus vel, faucibus dui. Nunc ut
            vulputate ipsum. Aliquam erat volutpat. Maecenas tempor imperdiet
            dapibus. Ut elementum nisl in augue ultrices fringilla. Nunc quis
            placerat libero. Maecenas blandit elit sapien. Fusce non lectus
            pellentesque nibh dignissim aliquet. Duis id dolor ut ante pulvinar
            efficitur. Phasellus sit amet odio risus. In ornare justo eu neque
            iaculis, sed venenatis lorem convallis. Proin placerat convallis
            orci, non congue arcu. Suspendisse potenti. Duis iaculis vehicula
            mauris, ac tincidunt urna ultricies ac. Cras mattis libero nibh, id
            aliquam ex posuere nec. Etiam in eros ut odio semper rutrum vel ac
            eros. Nam eget placerat tortor. Aenean et facilisis arcu. Aliquam
            sit amet libero turpis. Cras sollicitudin semper rhoncus. Nam et
            lectus vitae velit volutpat faucibus. Fusce sem massa, cursus
            venenatis magna a, luctus faucibus eros. Sed metus leo, accumsan et
            urna non, mollis pharetra lorem. Praesent non tortor sed nisi semper
            dignissim.
          </p>
        </div>
        <div class="carousel">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in carouselPhotos"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
export default {
  computed: {
    companyName() {
      return this.$route.params.company_name;
    },
    carouselPhotos() {
      return [
        {
          src: require('@/assets/images/nNea_Pizza/nnea-amsterdam-restaurant.jpg'),
        },
        {
          src: require('@/assets/images/nNea_Pizza/margherrata-v-san-marzano.jpg'),
        },
        { src: require('@/assets/images/nNea_Pizza/images.jpeg') },
      ];
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 50vw;
}
</style>
