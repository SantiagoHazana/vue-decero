<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1
          class="text-3xl text-red-600 text-center font-medium mt-5 lg:text-4xl lg:text-left lg:px-6 leading-tight"
        >Domótica</h1>
        <p
          class="text-base font-thin text-gray-600 text-center px-4 mb-3 lg:text-left"
        >La tecnología avanza y nosotros avanzamos con ella</p>
        <img src="/vue-decero/img/servicios/domotica.jpg" class="w-full object-cover" style="height: 400px;" />
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            El sistema domótico incluye dispositivos a los elementos
            eléctricos, incluidos un control automático de luces,
            enchufes, motores de persianas o cortinas y sistemas de
            calefacción y climatización mediante acceso remoto.
          </p>
          <p class="mb-5">
            Automatizar un espacio es agregar tecnología inteligente
            a nuestra vivienda, oficina o comercio, con el fin de
            aumentar nuestro bienestar con solo un clic.
          </p>

          <!-- <div class="text-center mb-12 lg:hidden">
            <presupuesto-button></presupuesto-button>
          </div> -->

          <p
            class="font-extrabold border-b-4 border-red-500 pl-3 text-xl my-5 p-5 bg-gray-100 text-center lg:text-left"
          >Domótica en casa o comercio</p>
          <p class="mb-5">
            Gracias al control domótico, los elementos pueden
            accionarse manualmente desde cualquier punto de la
            vivienda mediante pulsadores electrónicos,
            interruptores, controladores de estancias y gracias al
            control remoto, desde Smartphone, Tablet, Smart TV, por
            el movimiento de las personas o incluso por voz.
          </p>

          <p class="mb-5 font-medium">Algunas de sus ventajas:</p>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Ahorro energético</span>
            </p>
            <p class="px-4 border-l-2 border-gray-100 mt-3">
              Aplicar Domótica genera un menor gasto económico
              mensual en electricidad, gas natural o agua. Las
              viviendas o espacios de trabajo domótizados adaptan
              la climatización del hogar en función del horario,
              programan los electrodomésticos en horarios de bajo
              consumo o regulan la iluminación artificial en
              función de la luz natural.
            </p>
            <img src="/vue-decero/img/domotica/dom-efi.jpg" class="w-full object-cover h-full mt-6 rounded" />
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Confort</span>
            </p>
            <p class="px-4 border-l-2 border-gray-100 mt-3">
              Nuestra calidad de vida y nivel de confort aumentan
              considerablemente haciendo nuestra vida más fácil y
              tranquila. Desde nuestro equipo o teléfono
              inteligente podemos manejar toda la tecnología
              aplicada, desde el sistema de calefacción o aire
              acondicionado antes de llegar a casa, hasta poder
              cerrar las ventanas si estamos fuera y comienza a
              llover.
            </p>
            <img src="/vue-decero/img/domotica/dom-conf.jpg" class="w-full object-cover h-full mt-6 rounded" />
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Seguridad</span>
            </p>
            <p class="px-4 border-l-2 border-gray-100 mt-3">
              El aumento en la seguridad del hogar o comercio es
              otra de las razones de mayor peso señaladas por
              quienes disponen de la automatización. Estar más
              tranquilos comprobando desde la pantalla de un
              teléfono inteligente lo que ocurre en el interior de
              nuestra casa y poder tomar decisiones en tiempo
              real, es una de las ventajas más importantes que nos
              ofrece la domótica. Además las viviendas
              inteligentes ya están preparadas para evitar
              intrusiones o imprevistos importantes en su
              interior.
            </p>
            <img src="/vue-decero/img/domotica/dom-seg.jpeg" class="w-full object-cover h-full mt-6 rounded" />
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Cuidar el medio ambiente</span>
            </p>
            <p class="px-4 border-l-2 border-gray-100 mt-3">
              Consumir mejor los recursos energéticos y naturales.
              Minimizar la contaminación ambiental. Ayudar a
              cambiar los hábitos medioambientales menos
              sostenibles.
            </p>
            <img src="/vue-decero/img/domotica/dom-amb.jpg" class="w-full object-cover h-full mt-6 rounded" />
          </div>

          <p
            class="font-extrabold border-l-4 border-r-4 border-red-500 pl-3 text-xl my-10 p-5 bg-gray-100"
          >
            ¡No tienes que ocuparte de nada! Nuestros profesionales
            se encargarán de todo.
          </p>

          <div class="text-center mb-8">
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
    title: 'Domótica en Marbella con Decero Proyectos y Reformas',
    meta: [
      { name: 'description', content: 'Si busca una empresa de domótica en Marbella cuente con Decero, Proyectos y Reformas, una empresa de Reformas integrales en Arroyo de la Miel, Benalmádena. Llámenos. Seremos su mejor opción.' }
    ]
  }
};
</script>
