<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1
            class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6"
        >Mantenimiento de Comunidades</h1>
        <iframe class="m-auto p-5 border-2 mb-5" width="800" height="488"
                src="https://www.youtube.com/embed/DJ6LOxe__Xo" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
<!--        <img-->
<!--            src="/img/comunidades/mantenimiento-comunidades.jpg"-->
<!--            class="w-full object-cover"-->
<!--            style="height: 400px;"-->
<!--        />-->
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            En DeCero contamos con profesionales especializados en diversas áreas, lo que nos permite ofrecer una amplia
            variedad de servicios relacionados al mantenimiento general de comunidades de viviendas y edificios
            comerciales.
          </p>

          <!--  <div class="text-center mb-8 lg:hidden">
             <presupuesto-button></presupuesto-button>
           </div> -->

          <p class="mb-5 font-medium">
            Brindamos un servicio integral que incluye:
          </p>

          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Mantenimiento de grupos de presión.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Paneles solares térmicos.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Porteros y video porteros.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Antenas.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Puertas de garaje.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Placas solares.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Centralizado de contadores.
          </p>

          <p class="mb-5">
            También ofrecemos servicios de limpieza de áreas comunes, mantenimiento de piscinas y jardinería.
          </p>

          <div class="text-center mb-5">
            <presupuesto-button></presupuesto-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PresupuestoButton from "../components/PresupuestoButton";
import ChatButton from "../components/ChatButton";
import ContactForm from "../components/ContactForm";

export default {
  components: {PresupuestoButton, ContactForm, ChatButton},
  metaInfo: {
    title: 'Mantenimiento Comunidades',
    meta: [
      {name: 'description', content: 'Decero'}
    ]
  }
};
</script>