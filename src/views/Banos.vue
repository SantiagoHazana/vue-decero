<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1 class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6">
          Baños
        </h1>
        <iframe class="m-auto p-5 border-2 mb-5" width="800" height="488"
                src="https://www.youtube.com/embed/RsvIZ4NJsvY" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p>
            Realizamos la reforma integral de su cuarto de baño, lo asesoramos en la realización del diseño de su
            proyecto, en la elección de los materiales y mobiliario, adaptándonos a su presupuesto. A través de imágenes
            fotorrealistas a escala, le mostraremos propuestas de diseño del espacio para que pueda apreciar como
            quedará terminada la reforma.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Revisiones y reparaciones de instalaciones de fontanería.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Alicatados.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Instalación de bañeras y platos de ducha.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Instalación de sanitarios y mobiliario.
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
    title: 'Baños',
    meta: [
      {name: 'description', content: 'Decero'}
    ]
  }
};
</script>

<style scoped>

</style>