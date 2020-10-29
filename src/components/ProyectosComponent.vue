<template>
  <div class="container mx-auto px-4">
    <h1
      class="text-4xl text-gray-800 lg:text-center font-extrabold lg:mb-12"
    >¿Necesita llevar a cabo un proyecto de reforma?</h1>

    <div class="lg:flex">
      <!-- <a
        @click="scrollToSection('contacto')"
        class="cursor-pointer w-full lg:w-1/3 shadow-md rounded mx-2 hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-3"
      >-->
      <a
        class="w-full lg:w-1/3 shadow-md rounded mx-2 transition duration-500 ease-in-out transform"
      >
        <div class="items-center flex flex-wrap content-center justify-center">
          <img
            src="https://www.thespruce.com/thmb/19FRnLcSIDxgLx7epJiJZRZUrvg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/CMNaturalDesign_LampResidence_001_v2-1024x822-5c8d4e9146e0fb0001555852.jpg"
            class="w-full object-cover object-center h-64"
            alt
          />
        </div>
        <div class="p-4">
          <h1
            class="text-2xl font-semibold text-gray-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          >Cocinas</h1>
          <p class="text-base text-gray-600">
            Una de las reformas más solicitadas son las reformas de cocinas, puesto que debido a su uso es una de las zonas que más suele deteriorarse.
            Existen múltiples posibilidades en función del tamaño, distribución y estilo. Puede tirar o levantar tabiques si desea ampliar alguna zona, o tener cocina isla, o americana
          </p>
        </div>
      </a>
      <a
        class="w-full lg:w-1/3 shadow-md rounded mx-2 transition duration-500 ease-in-out transform"
      >
        <div class="items-center flex flex-wrap content-center justify-center">
          <img
            src="https://i.pinimg.com/564x/6d/f4/35/6df435ff34a0c39300f5f8ef7b6c497c.jpg"
            class="w-full object-cover object-center h-64"
            alt
          />
        </div>
        <div class="p-4">
          <h1 class="text-2xl font-semibold text-gray-700">Baños</h1>
          <p class="text-base text-gray-600">
            Simplemente realizando alguna obras, cambio de materiales y distribución hacemos que su baño parezca completamente nuevo.
            Le proponemos soluciones para todos los gustos y estilos de viviendas. Podemos reformar el baño de una vivienda, un local comercial, un restaurante, un bar, una oficina.
          </p>
        </div>
      </a>
      <a
        class="w-full lg:w-1/3 shadow-md rounded mx-2 transition duration-500 ease-in-out transform"
      >
        <div class="items-center flex flex-wrap content-center justify-center">
          <img
            src="https://ak7.picdn.net/shutterstock/videos/20579557/thumb/1.jpg"
            class="w-full object-cover object-center h-64"
            alt
          />
        </div>
        <div class="p-4">
          <h1 class="text-2xl font-semibold text-gray-700">Locales / Oficinas</h1>
          <p class="text-base text-gray-600">
            No importa el tipo de negocio, realizamos reformas en todo tipo de locales, oficinas, bares, tiendas, centros de estética, etc., asesorándole con ideas originales y creativas acorde con su negocio.
            Disponemos de equipos especializados en los diferentes gremios que nos ayudarán de la forma mas profesional.
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(section) {
      let element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }
};
</script>


