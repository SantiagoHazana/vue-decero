<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1
          class="text-3xl text-red-600 text-center font-medium mt-5 lg:text-4xl lg:text-left lg:px-6 leading-tight"
        >Electricidad y Fontanería</h1>
        <p class="text-base font-thin text-gray-600 text-center px-4 mb-3 lg:text-left">
          Somos especialistas en instalaciones eléctricas, gas y
          fontanería.
        </p>
        <img
          src="/vue-decero/img/electricidad-y-fontaneria-3.jpg"
          class="w-full object-cover"
          style="height: 400px;"
        />
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            <span class="font-medium">
              Ofrecemos soluciones globales en electricidad y
              fontanería.
            </span>
          </p>
          <p class="mb-5">
            Proporcionamos servicios de instalaciones eléctricas,
            gas y sanitarias. Ofrecemos soluciones globales para sus
            reparaciones, reformas o nuevas instalaciones
            brindándole la tranquilidad y confianza que representa
            el respaldo de nuestros profesionales altamente
            cualificados.
          </p>

          <p class="mb-5">
            Nuestros fontaneros se encargan de la instalación de
            sanitarios, grifería y tuberías, así como de
            los cambios de bajantes o de la sustitución de bañera
            por plato de ducha.
          </p>

          <p class="mb-5">
            También realizamos trabajos de aire acondicionado,
            ventilación y climatización, albañilería, escayola y
            pladur, carpintería de madera y aluminio, etc.
          </p>
          <p class="mb-5">
            Disponemos de profesionales que, gracias a su
            cualificación y experiencia, garantizan la máxima
            calidad en su trabajo, ya sea en viviendas, locales
            comerciales, oficinas o comunidad de vecinos.
          </p>

          <div class="flex my-5">
            <img
              src="/vue-decero/img/electricidad-y-fontaneria-1.jpg"
              class="w-1/2 object-cover h-40 pr-8 rounded"
            />
            <img
              src="/vue-decero/img/electricidad-y-fontaneria-2.jpg"
              class="w-1/2 object-cover h-40 pr-8 rounded"
            />
          </div>

          <p class="my-8 font-medium">
            Si lo desea puede solicitar presupuesto sin compromiso
            ni coste alguno.
          </p>

          <div class="text-center my-8 ">
            <presupuesto-button></presupuesto-button>
          </div>

          <!-- <p class="mb-5 font-medium">Nuestros expertos en interiorismo y estilismo de ambientes:</p>

          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i> Diseñamos los espacios mediante conceptos contundentes, claros y representativos, sin descuidar su viabilidad a nivel técnico y económico.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i> Presentamos la propuesta final con los detalles de costos para su elección y aprobación.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i> Dirigimos la obra y coordinamos el trabajo de todos los gremios involucrados.
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i> Cumplimos los plazos entregando el ambiente reformado, decorado y amueblado.
          </p>

          <p
            class="font-extrabold border-l-4 border-r-4 border-red-500 pl-3 text-xl my-10 p-5 bg-gray-100"
          >¡Usted no tendrá que ocuparse de nada! Nuestros profesionales se encargarán de todo.</p>

          <div class="text-center mb-8 lg:hidden">
            <presupuesto-button></presupuesto-button>
          </div>

          <p
            class="mb-5 font-medium"
          >Dentro de nuestras opciones podemos proponer 5 estilos bien definidos o adaptarnos a sus necesidades:</p>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Estilo Clásico</span>
            </p>
            <p
              class="px-4 border-l-2 border-gray-100 mt-3"
            >Apostando por la belleza de la ornamentación y la sofisticación.</p>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Estilo Minimalista</span>
            </p>
            <p
              class="px-4 border-l-2 border-gray-100 mt-3"
            >Permite exprimir los matices de nuestra sensibilidad e inspiración. Ideal para todos los amantes de la simplicidad, serenidad y sobriedad.</p>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Estilos Rústicos</span>
            </p>
            <p
              class="px-4 border-l-2 border-gray-100 mt-3"
            >Permite una gran libertad en la composición decorativa. Se consigue un ambiente relajado alejado de las modas.</p>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Estilos Orientales</span>
            </p>
            <p
              class="px-4 border-l-2 border-gray-100 mt-3"
            >Permite conseguir una zona tranquila y reposada. La pauta más importante para conseguir una decoración al estilo asiático en la serenidad.</p>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Estilo Inglés</span>
            </p>
            <p
              class="px-4 border-l-2 border-gray-100 mt-3"
            >El elemento esencial es la caoba, madera elegante y fina.</p>
          </div>-->

          

          <!-- <div class="text-center mb-5 lg:hidden">
            <presupuesto-button></presupuesto-button>
          </div>-->
        </div>
      </div>
      <!-- <div class="hidden lg:block lg:w-1/3">
        <div class="lg:fixed">
          <div
            class="lg:border-red-500 lg:rounded-r lg:border-l-2 lg:bg-gray-100 lg:m-4 lg:p-4 lg:pb-8"
          >
            <h1 class="lg:text-xl text-red-600 font-medium">Pide tu presupuesto gratis</h1>
            <contact-form closeButton="false"></contact-form>
          </div>
        </div>
      </div>-->
      <!-- <chat-button class="hidden lg:block"></chat-button> -->
    </div>
  </div>
</template>

<script>
import PresupuestoButton from "../components/PresupuestoButton";
import ChatButton from "../components/ChatButton";
import ContactForm from "../components/ContactForm";

export default {
  components: { PresupuestoButton, ContactForm, ChatButton },
  metaInfo: {
    title: 'Electricidad y Fontanera en Arroyo de la Miel con Decero Proyectos y Reformas',
    meta: [
      { name: 'description', content: 'Electricidad y Fontaneria en Arroyo de la miel con Decero, Proyectos y Reformas. Si necesita un fontanero o electricista en Arroyo de la Miel no dude en llamarnos' }
    ]
  }
};
</script>
