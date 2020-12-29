<template>
  <div class="container mx-auto">
    <div class="lg:flex px-4 justify-center">
      <span v-for="atajo in atajos" :key="atajo.id" class="lg:w-1/5 shadow-lg rounded mx-2">
        <router-link :to="{ name: atajo.link }">
          <img :src="atajo.image" class="w-full h-48 object-cover object-center"/>
          <div class="lg:px-6 lg:py-4 py-4 px-4 shadow-lg my-height">
            <h2 class="font-bold text-xl mb-2">{{ atajo.title }}</h2>
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

<script>
export default {
  data() {
    return {
      atajos: [
        {
          id: 1,
          image: "/img/servicios/expertos-en-reformas.jpg",
          title: "Expertos en reformas",
          text:
              "Somos una Empresa Especializada en Reformas con más de 10 años de experiencia en el sector de la decoración y las reformas de Viviendas, Comercios y Oficinas.",
          link: "expertos-en-reformas"
        },

        {
          id: 2,
          image: "/img/servicios/decoracion-de-interiores.jpg",
          title: "Decoración de interiores",
          text:
              "Ofrecemos atención personalizada, conservando y cuidando todos los detalles de calidad y diseño. Logrando optimizar los espacios-ambientes necesarios, administrando recursos, sin descuidar el buen gusto.",
          link: "decoracion-de-interiores"
        },
        {
          id: 3,
          image: "/img/comunidades/mantenimiento-comunidades.jpg",
          title: "Mantenimiento Comunidades",
          text: "En DeCero contamos con profesionales especializados en diversas áreas, lo que nos permite ofrecer una amplia variedad de servicios relacionados al mantenimiento general de comunidades de viviendas y edificios comerciales.",
          link: "mantenimiento-comunidades"
        },
        {
          id: 4,
          image: "/img/comunidades/administracion-comunidades.jpg",
          title: "Administración de Comunidades",
          text: "Una empresa dedicada a la gestión y administración de Comunidades de propietarios. Siempre accesible y a disposición para asegurar un buen funcionamiento de la Comunidad.",
          link: "administracion-comunidades"
        }
      ]
    };
  }
};
</script>
