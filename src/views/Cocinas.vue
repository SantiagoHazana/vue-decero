<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1 class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6">
          Cocinas
        </h1>
        <iframe class="m-auto p-5 border-2 mb-5" width="800" height="488"
                src="https://www.youtube.com/embed/RsvIZ4NJsvY" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p>
            En DeCero realizamos la reforma integral de su cocina, lo asesoramos en la elección de la distribución y la
            elección de materiales y texturas. A través de imágenes fotorrealistas y recorridos virtuales, le
            mostraremos cómo quedará terminada su reforma.
          </p>
          <p class="font-medium">
            Nos ocupamos de la instalación de:
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Fontanería.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Electricidad.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Electrodomésticos.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Alicatado.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Solado.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Montaje de muebles y encimeras.
          </p>
          <p class="font-medium">
            Trabajamos con materiales de calidad ajustándonos a las posibilidades de cada cliente.
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
    title: 'Cocinas',
    meta: [
      {name: 'description', content: 'Decero'}
    ]
  }
};
</script>

<style scoped>

</style>