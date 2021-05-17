<template>
  <div class="container text-center">
    <h1 class="my-8 text-xl">{{ companyName }}</h1>

    <v-app>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in carouselPhotos"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <h2>opening hours</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit
        hendrerit eros, sit amet iaculis lacus laoreet eu. Curabitur ut dui sit
        amet odio blandit euismod at vitae quam. Vivamus eu lorem cursus,
        fermentum quam volutpat, varius erat. Ut sed dolor lobortis, scelerisque
        metus vel, faucibus dui. Nunc ut vulputate ipsum. Aliquam erat volutpat.
        Maecenas tempor imperdiet dapibus. Ut elementum nisl in augue ultrices
        fringilla. Nunc quis placerat libero. Maecenas blandit elit sapien.
        Fusce non lectus pellentesque nibh dignissim aliquet. Duis id dolor ut
        ante pulvinar efficitur. Phasellus sit amet odio risus. In ornare justo
        eu neque iaculis, sed venenatis lorem convallis. Proin placerat
        convallis orci, non congue arcu. Suspendisse potenti. Duis iaculis
        vehicula mauris, ac tincidunt urna ultricies ac. Cras mattis libero
        nibh, id aliquam ex posuere nec. Etiam in eros ut odio semper rutrum vel
        ac eros. Nam eget placerat tortor. Aenean et facilisis arcu. Aliquam sit
        amet libero turpis. Cras sollicitudin semper rhoncus. Nam et lectus
        vitae velit volutpat faucibus. Fusce sem massa, cursus venenatis magna
        a, luctus faucibus eros. Sed metus leo, accumsan et urna non, mollis
        pharetra lorem. Praesent non tortor sed nisi semper dignissim. Sed at
        condimentum nulla, id porta ipsum. Integer lacinia diam turpis, id
        rhoncus tellus pretium nec. Nunc ut elit id nisl aliquet varius in eu
        tortor. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Phasellus a aliquet tortor. Integer sollicitudin
        dolor risus, sit amet scelerisque turpis ornare rutrum. Aliquam felis
        ex, ornare vitae volutpat sit amet, porta vel augue. Sed dignissim sem
        at sollicitudin venenatis. Duis non consequat justo. Morbi sodales
        feugiat ante vitae vehicula. Curabitur eget ipsum vel arcu iaculis
        dapibus eget nec magna. Quisque et gravida sem, non auctor tellus.
        Maecenas sit amet lacinia urna. Pellentesque sed diam vitae dui
        scelerisque rhoncus sed eu sem. Suspendisse at massa pharetra, malesuada
        sapien ut, porttitor odio. Quisque iaculis velit sed lorem vestibulum
        blandit. Phasellus sodales non dui accumsan mollis. Aliquam accumsan mi
        ipsum, nec feugiat justo ultrices at. Nam euismod leo et rhoncus
        finibus. Integer tincidunt leo faucibus eros gravida euismod id vel
        felis. In aliquam mauris blandit nulla semper, in dignissim mauris
        suscipit. Suspendisse mollis ut orci tempor lacinia. Suspendisse id nibh
        nibh. Sed eu bibendum orci. Duis imperdiet efficitur lectus, vitae
        pellentesque mauris tincidunt eu. Mauris et volutpat eros, sed fermentum
        magna. Aenean nec diam scelerisque, vulputate est ut, ultricies odio.
        Aliquam efficitur consectetur ipsum, at egestas elit aliquam sed. Etiam
        volutpat, diam quis cursus porttitor, augue lacus mattis nisl, non
        accumsan metus metus ut lorem. Sed vitae venenatis urna, sed laoreet
        diam.
      </p>
    </v-app>
  </div>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
export default {
  computed: {
    companyName() {
      return this.$route.params.company_name;
    },
    carouselPhotos() {
      switch (this.companyName) {
        case 'nNea_Pizza':
          return [
            {
              src: require('@/assets/images/nNea_Pizza/nnea-amsterdam-restaurant.jpg'),
            },
            {
              src: require('@/assets/images/nNea_Pizza/margherrata-v-san-marzano.jpg'),
            },
            { src: require('@/assets/images/nNea_Pizza/images.jpeg') },
          ];
      }
    },
  },
};
</script>

<style></style>
