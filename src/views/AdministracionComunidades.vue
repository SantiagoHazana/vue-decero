<template>
    <div class="container mx-auto">
        <div class="lg:flex lg:justify-center lg:pt-24">
            <div class="w-full lg:w-4/5">
                <h1
                    class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6"
                >Administración de Comunidades</h1>
                <img
                    src="/img/comunidades/administracion-comunidades.jpg"
                    class="w-full object-cover"
                    style="height: 400px;"
                />
                <div class="py-6 px-6 text-gray-900 text-xl font-light leading-relaxed">
                    <p class="mb-5 font-bold text-2xl">
                        Una empresa dedicada a la gestión y administración de Comunidades de propietarios. Siempre
                        accesible y a
                        disposición para asegurar un buen funcionamiento de la Comunidad.
                    </p>

                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Detallados controles contables.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Contabilización de los ingresos/gastos & preparación de balances.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Elaboración de presupuestos con sus cuotas de comunidad.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Realización de los cobros y pagos de la comunidad. incluyendo seguimiento de las devoluciones.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Gestión administrativa: Libro de Actas, custodia, redacción y transcripción de las reuniones de
                        la Comunidad.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Seguimiento permanente de los morosos, reclamando el pago vía correo electrónico y continuas
                        llamadas telefónicas.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Envío de circulares informativas mensuales a todos los propietarios de la Comunidad, detallando
                        el estado de sus cuentas (ingresos y gastos).
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Supervisión del funcionamiento de las instalaciones de la comunidad.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Despacho on-line, servicios de registros y seguimiento de averías.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Servicio de Empresas: fontanería, electricidad, ascensores, cerrajería, otros.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Atención telefónica 24 hs.
                    </p>
                    <p class="bg-gray-100 px-6 py-4 rounded mb-2">
                        <i class="fas fa-check-square text-green-600 fa-lg pr-1"></i>
                        Idiomas Español, Italiano e Inglés.
                    </p>

                    <p class="mb-5 font-bold text-xl">
                        Contamos con gran experiencia en el servicio de administración de cooperativas de
                        viviendas y comunidades de propietarios, urbanizaciones con servicios, centros
                        comerciales, puertos deportivos, instalaciones privadas o comunes; entidades colaboradoras
                        de la gestión urbanística y todo lo relacionado con la administración de bienes inmuebles
                        en Málaga y provincia.
                    </p>

                    <!--          <p-->
                    <!--              class="font-extrabold border-l-4 border-r-4 border-red-500 pl-3 text-xl my-10 p-5 bg-gray-100"-->
                    <!--          >-->
                    <!--            ¡No tienes que ocuparte de nada! Nuestros profesionales-->
                    <!--            se encargarán de todo.-->
                    <!--          </p>-->

                    <!--          <p class="my-8 font-medium">-->
                    <!--            Si lo desea puede solicitar presupuesto sin compromiso-->
                    <!--            ni coste alguno.-->
                    <!--          </p>-->

                    <div class="text-center mb-5 mt-10">
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
        title: 'Administración de Comunidades',
        meta: [
            {name: 'description', content: 'Decero'}
        ]
    }
};
</script>