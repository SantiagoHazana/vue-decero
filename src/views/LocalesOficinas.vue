<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1 class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6">
          Locales y Oficinas
        </h1>
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            La supervisión constante de nuestro equipo permite mantener una alta eficiencia con un acabado particular y
            de
            calidad que nuestros clientes agradecen, trabajando estrechamente y garantizando la rapidez en la ejecución
            de
            los proyectos.
          </p>
          <p class="mb-5">
            Ofrecemos a nuestros clientes la provisión del equipamiento comercial y de oficina especial, donde cada
            objeto
            forma parte de un todo manteniendo y respetando la imagen de marca como es el caso de las franquicias.
            Brindamos atención personalizada para cada proyecto, buscando siempre soluciones innovadoras, que permitan
            resolver sus requerimientos con creatividad.
          </p>
          <p class="mb-5">
            Nuestro grupo de profesionales se encuentra capacitado para lograr la más alta calidad a los más bajos
            costos.
          </p>
          <p class="font-medium mb-5">
            Podemos intervenir en la construcción, ampliación y remodelación de obras comerciales y oficinas como:
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Locales comerciales.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Oficinas.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Salas de juegos.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Locales para franquicias.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Construcción para cadenas de franquicias.
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PresupuestoButton from "@/components/PresupuestoButton";
import ContactForm from "@/components/ContactForm";
import ChatButton from "@/components/ChatButton";

export default {
  components: {PresupuestoButton, ContactForm, ChatButton},
  metaInfo: {
    title: 'Locales y Oficinas',
    meta: [
      {name: 'description', content: 'Decero'}
    ]
  }
};
</script>

<style scoped>

</style>