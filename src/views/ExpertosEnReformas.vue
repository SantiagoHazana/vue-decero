<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1
          class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6"
        >Expertos en reformas</h1>
        <img
          src="/vue-decero/img/servicios/expertos-en-reformas.jpg"
          class="w-full object-cover rounded"
          style="height:400px;"
        />
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            Somos una empresa
            <b class="font-medium">
              especializada en reformas con más de 10 años de
              experiencia
            </b>
            en el sector de la decoración y reforma de viviendas,
            comercios y oficinas.
          </p>

         <!--  <div class="text-center mb-8 lg:hidden">
            <presupuesto-button></presupuesto-button>
          </div> -->

          <p class="mb-5 font-medium">Le asesoramos durante todas las fases de su proyecto:</p>

          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Plasmamos el proyecto en papel para su aprobación.
            <img
              src="/vue-decero/img/expertos-en-reformas/papel.jpeg"
              class="w-full object-cover h-64 mt-3 rounded"
            />
          </p>

          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Planificamos y coordinamos todos los sectores durante
            las distintas fases del proyecto.
            <img
              src="/vue-decero/img/expertos-en-reformas/plan.jpg"
              class="w-full object-cover h-64 mt-3 rounded"
            />
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Detectamos sus necesidades y preferencias en un estudio
            previo.
            <img
              src="/vue-decero/img/expertos-en-reformas/estudio-previo.png"
              class="w-full object-cover h-64 mt-3 rounded"
            />
          </p>
          <p class="bg-gray-100 px-6 py-4 rounded mb-2">
            <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
            Nos encargados de todas las gestiones relacionadas:
            solicitud de permisos y licencias.
            <img
              src="/vue-decero/img/expertos-en-reformas/licencias.jpg"
              class="w-full object-cover h-64 mt-3 rounded"
            />
          </p>

          <p
            class="font-extrabold border-l-4 border-r-4 border-red-500 pl-3 text-xl my-10 p-5 bg-gray-100"
          >
            ¡No tienes que ocuparse de nada! Nuestros profesionales
            se encargarán de todo.
          </p>

          <!-- <div class="text-center mb-8 lg:hidden">
            <presupuesto-button></presupuesto-button>
          </div> -->

          <p class="mb-5">
            El compromiso, la calidad y la garantía son los tres
            pilares básicos en los que está basada nuestra empresa.
            Todo ello gracias a un excelente equipo de profesionales
            altamente cualificado y motivado, capaz de realizar
            todos los proyectos que nos solicita nuestro cliente.
          </p>
          <p class="mb-5">
            Apostamos por una construcción sostenible, realizamos
            todo tipo de trabajos: reformas de edificios, locales
            comerciales, baños y cocinas, aislamientos;
            prácticamente toda clase de soluciones a la medida de
            cada cliente y toda clase de servicios relacionados con
            la construcción.
          </p>
          <p class="mb-5">
            Estamos especializados en obra civil, edificación y
            unifamiliar.
          </p>
          <p class="mb-5">
            Una vez que el cliente nos muestra los cambios que desea
            realizar, nos centramos en sus objetivos, y le
            asesoramos sobre interiorismo, preparándole un proyecto
            a su medida.
          </p>
          <p class="mb-5">
            Trabajamos con una gran variedad de materiales y
            contamos con las últimas tendencias del mercado para
            obtener unas viviendas con el máximo confort respetando
            el ahorro energético.
          </p>
          <p class="mb-5">
            Para poder ofrecer todo tipo de soluciones
            personalizadas, contamos con la colaboración y
            coordinación de distintos sectores, ejecutando las obras
            en el menor tiempo posible y cumpliendo los plazos
            establecidos.
          </p>
          <p class="mb-5">
            Puede ponerse en contacto con nuestra empresa a través
            de nuestra página web, teléfono o personalmente en
            nuestra oficina comercial.
          </p>
          <p class="mb-8">
            Si lo desea puede solicitar presupuesto sin compromiso
            ni coste alguno.
          </p>

          <div class="text-center mb-5">
            <presupuesto-button></presupuesto-button>
          </div>
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
    title: 'Expertos en Reformas en Benalmádena con Decero Proyectos y Reformas',
    meta: [
      { name: 'description', content: 'Somos Decero, Proyectos y Reformas, una empresa expertos en Reformas en Arroyo de la Miel, Benalmádena. Ofrecemos presupuestos de reformas integrales, reformas de viviendas, reformas de cocinas, reformas de baños, locales, comunidades' }
    ]
  }
};
</script>
