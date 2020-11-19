<template>
  <div class="container mx-auto">
    <div class="lg:flex px-4">
      <span v-for="atajo in atajos" :key="atajo.id" class="lg:w-1/5 shadow-lg rounded mx-2">
        <router-link :to="{ name: atajo.link }">
          <img :src="atajo.image" class="w-full h-48 object-cover object-center" />
          <div class="lg:px-6 lg:py-4 py-4 px-4 shadow-lg my-height">
            <h1 class="font-bold text-xl mb-2">{{ atajo.title }}</h1>
            <p class="text-gray-700 lg:text-sm text-base">{{ atajo.text }}</p>
          </div>
          <!-- <div class="flex justify-center items-end text-grey-dark">
            <router-link
              class="w-full bg-gray-500 border-b-4 border-gray-700 text-white py-2 text-center rounded-b font-bold"
              :to="{ name: atajo.link }"
            >
              <div>Ver más</div>
            </router-link>
          </div> -->
          <!--  <div class="flex justify-center items-end text-grey-dark">
            <span
              class="w-full bg-gray-500 border-b-4 border-gray-700 text-white py-2 text-center rounded-b font-bold"
            ></span>
          </div> -->
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atajos: [
        {
          id: 1,
          image: "/img/servicios/expertos-en-reformas.jpg",
          title: "Mantenimiento Comunidades",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sagittis neque, interdum maximus turpis. Cras hendrerit ullamcorper diam in ullamcorper. Aenean convallis dignissim augue, vitae condimentum urna vestibulum eget. Maecenas hendrerit lectus tortor, sed pulvinar velit feugiat at.",
          link: "mantenimiento-comunidades"
        },
        {
          id: 1,
          image: "/img/servicios/expertos-en-reformas.jpg",
          title: "Administracion de Comunidades",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sagittis neque, interdum maximus turpis. Cras hendrerit ullamcorper diam in ullamcorper. Aenean convallis dignissim augue, vitae condimentum urna vestibulum eget. Maecenas hendrerit lectus tortor, sed pulvinar velit feugiat at.",
          link: "administracion-comunidades"
        }
      ]
    };
  }
};
</script>

<style scoped>
.my-height {
  height: 325px;
}

@media screen and (max-width: 1278px) and (min-width: 1024px) {
  .my-height {
    height: 480px;
  }
}

@media screen and (max-width: 1024px) {
  .my-height {
    height: auto;
  }
}
</style>