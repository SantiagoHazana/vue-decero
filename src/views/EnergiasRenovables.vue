<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1
          class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6"
        >Energías renovables</h1>
        <img
          src="/vue-decero/img/servicios/energias-renovables.jpg"
          class="w-full object-cover"
          style="height: 400px;"
        />
        <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
          <p class="mb-5">
            Convertimos vuestra casa en un hogar sostenible.
            Instalamos sistemas de placas solares desarrolladas con
            la última tecnología tanto en viviendas unifamiliares,
            multifamiliares o grandes instalaciones. Apostamos por
            respetar y cuidar el medio ambiente.
          </p>
          <p class="mb-5">
            Ofrecemos las mejores soluciones para que ahorres en la
            factura de la luz, ya que trabajamos por un consumo
            sostenible y eficiente de la energía. Nos encargamos
            también de la adecuación de potencias, iluminación LED y
            la instalación de placas solares.
          </p>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Adecuación de potencias</span>
            </p>
            <div class="lg:flex lg:items-center">
              <p class="px-4 border-l-2 border-gray-100 mt-3">
                Estudiamos el histórico de la potencia demandada
                por el suministro y realizamos un estudio para
                contratar la potencia según la demanda,
                maximizando así el ahorro. Contamos con
                profesionales que os brindarán el asesoramiento
                necesario.
              </p>
              <img
                src="/vue-decero/img/adecuacion-de-potencias.jpg"
                class="w-full lg:w-1/3 object-cover h-40 rounded mt-4 px-4 lg:px-0"
              />
            </div>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Iluminación led</span>
            </p>
            <div class="lg:flex lg:items-center">
              <p class="px-4 border-l-2 border-gray-100 mt-3">
                Contactad con nosotros si queréis obtener la
                mejor instalación de iluminación LED. Te
                ayudaremos en todo lo que necesitéis para
                conseguir la mayor eficiencia energética en
                vuestro hogar y cuidar el medio ambiente.
              </p>
              <img
                src="/vue-decero/img/iluminacion-led.jpg"
                class="w-full lg:w-1/3 object-cover h-40 rounded mt-4 px-4 lg:px-0"
              />
            </div>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">
                Apostamos por la energía renovable y respetuosa
                con el medio ambiente
              </span>
            </p>
            <div class="lg:flex lg:items-center">
              <p class="px-4 border-l-2 border-gray-100 mt-3">
                Convertimos vuestra casa en un hogar sostenible
                gracias a las placas solares desarrolladas con
                la última tecnología, preparadas para instalar
                en: viviendas unifamiliares, multifamiliares o
                grandes instalaciones.
              </p>
              <img
                src="/vue-decero/img/calefaccion-y-calentador-solar-acs.jpg"
                class="w-full lg:w-1/3 object-cover h-40 rounded mt-4 px-4 lg:px-0"
              />
            </div>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">Calefacción y calentador solar ACS</span>
            </p>
            <div class="lg:flex lg:items-center">
              <p class="px-4 border-l-2 border-gray-100 mt-3">
                Somos instaladores de Energía Solar Térmica y
                acercamos las energías renovables a todo tipo de
                cliente, ofreciendo un precio adecuado junto a
                diseños personalizados que se ajustan a las
                necesidades reales de nuestros clientes.
                Ofrecemos un estudio del consumo y un informe
                técnico completamente gratuitos, y sin suponer
                un compromiso de ningún tipo sobre las posibles
                mejoras que recomendamos.
              </p>
              <img
                src="/vue-decero/img/medio-ambiente.jpg"
                class="w-full lg:w-1/3 object-cover h-64 rounded mt-4 px-4 lg:px-0"
              />
            </div>
          </div>

          <div class="mb-6">
            <p class="bg-gray-100 px-6 py-4 rounded-r">
              <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
              <span class="font-medium">
                La energía solar, una fuente inagotable de
                energía
              </span>
            </p>
            <p class="px-4 border-l-2 border-gray-100 mt-3">
              Conviértase en el dueño de su propia energía
              aprovechando la energía solar fotovoltaica, y súmese
              al autoconsumo eléctrico instalando paneles solares.
              Las ventajas de la energía solar son varias:
            </p>
            <p class="ml-8 mt-3 leading-loose">
              &#8226; Es una fuente interminable de energía.
              <br />&#8226; No contamina.
              <br />&#8226; Contribuye al desarrollo sostenible.
              <br />&#8226; Una vez instalado el sistema fotovoltaico,
              la energía es gratuita y apenas necesita
              mantenimiento.
              <br />&#8226; Reduce los gastos de electricidad. El coste
              de la instalación es una inversión a corto y largo
              plazo.
            </p>
          </div>

          <p class="my-8 font-medium">
            Si lo desea puede solicitar presupuesto sin compromiso
            ni coste alguno.
          </p>

          <div class="text-center mb-8">
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
    title: 'Energía Solar en Mijas con Decero Proyectos y Reformas',
    meta: [
      { name: 'description', content: 'Somos una empresa de energía solar y trabajamos en Mijas.Instalación de placas solares, Iluminación LED, Energías renovables..pídanos presupuesto sin compromiso' }
    ]
  }
};
</script>
