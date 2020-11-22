<template>
    <div class="container mx-auto">
        <div class="lg:flex px-4 justify-center">
      <span v-for="atajo in atajos" :key="atajo.id" class="lg:w-1/5 shadow-lg rounded mx-2">
        <router-link :to="{ name: atajo.link }">
          <img :src="atajo.image" class="w-full h-48 object-cover object-center"/>
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
                    image: "/img/servicios/electricidad-y-fontaneria.jpg",
                    title: "Electricidad y fontanería",
                    text:
                        "Proporcionamos servicios de instalaciones eléctricas, gas y sanitarias. Ofrecemos soluciones globales para sus reparaciones, reformas o nuevas instalaciones brindándole la tranquilidad y confianza que representa el respaldo de nuestros profesionales altamente cualificados.",
                    link: "electricidad-y-fontaneria"
                },
                {
                    id: 2,
                    image: "/img/servicios/energias-renovables.jpg",
                    title: "Energías renovables",
                    text:
                        "Convertimos vuestra casa en un hogar sostenible. Instalamos sistemas de placas solares desarrolladas con la última tecnología tanto en viviendas unifamiliares, multifamiliares o grandes instalaciones. Apostamos por respetar y cuidar el medio ambiente.",
                    link: "energias-renovables"
                },
                {
                    id: 3,
                    image: "/img/servicios/domotica.jpg",
                    title: "Domótica",
                    text:
                        "El sistema domótico añade dispositivos a los elementos eléctricos permitiendo un control automático de luces, enchufes, motores de persianas o cortinas y sistemas de calefacción y climatización mediante acceso remoto.",
                    link: "domotica"
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