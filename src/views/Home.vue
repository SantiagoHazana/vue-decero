<template>
  <div>
    <section class="h-screen header relative lg:overflow-hidden" id="home">
      <div class="absolute inset-0 z-negative">
        <img
          src="https://i2.wp.com/www.delikatissen.com/wp-content/2016/05/2a.jpg"
          class="object-cover w-full h-full"
        />
      </div>

      <div class="absolute bg-black opacity-50 z-negative w-full h-full"></div>

      <div
        class="absolute z-10 text-white w-full h-full flex content-center justify-center flex-wrap px-4"
      >
        <div class="w-full lg:w-1/3 text-center lg:flex lg:flex-wrap lg:justify-center lg:mt-40">
          <img src="/img/logo-home.png" class="opacity-50 lg:mt-40" />
          <!--  <h1 class="text-7xl font-light">DeCero</h1>
          <h2 class="text-2xl text-gray-300 font-medium">- PROYECTOS Y REFORMAS -</h2>-->
        </div>
        <div class="w-full text-center flex flex-wrap justify-center">
          <!-- <vue-typed-js
            :strings="['Tu lo sueñas, nosotros lo hacemos posible.']"
            :loop="true"
            :typeSpeed="40"
            :showCursor="false"
            :backDelay="5000"
          >
            <h1
              class="rounded typing text-6xl px-3 mt-0 lg:text-5xl italic lg:tracking-normal text-gray-200 lg:py-0 lg:px-6"
              style="font-family: 'Oswald', sans-serif;"
            ></h1>
          </vue-typed-js>-->

          <h1
            class="text-4xl py-1 px-3 mt-2 lg:text-6xl italic lg:tracking-normal text-gray-200 lg:py-2 lg:px-6"
            style="font-family: 'Oswald', sans-serif;"
          >Tu lo sueñas, nosotros lo hacemos posible</h1>
        </div>
        <div class="w-full flex flex-wrap justify-center mt-5">
          <whatssap-button></whatssap-button>
          <!-- <presupuesto-button></presupuesto-button>
          <chat-button class="hidden md:block"></chat-button>-->
        </div>
      </div>
    </section>

    <atajos-component class="lg:my-20"></atajos-component>
    <proyectos-component class="lg:my-40 mt-10"></proyectos-component>
    <contact-home></contact-home>
    <data-contact></data-contact>
  </div>
</template>

<script>
import WhatssapButton from "../components/WhatssapButton";
import PresupuestoButton from "../components/PresupuestoButton";
import ChatButton from "../components/ChatButton";
import AtajosComponent from "../components/Atajos";
import ProyectosComponent from "../components/ProyectosComponent";
import ContactHome from "../components/ContactHome";
import DataContact from "../components/DataContact";
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";
Vue.use(VueTypedJs);

export default {
  components: {
    WhatssapButton,
    PresupuestoButton,
    ChatButton,
    AtajosComponent,
    ProyectosComponent,
    ContactHome,
    DataContact,
    VueTypedJs
  },
  metaInfo: {
    title: 'Empresas de Reformas en Arroyo de la Miel con Decero Proyectos y Reformas',
    meta: [
      { name: 'description', content: 'Somos Decero, Proyectos y Reformas, una empresa de Reformas en Arroyo de la Miel. Ofrecemos presupuestos de reformas integrales, reformas de viviendas, reformas de cocinas, reformas de baños, locales, comunidades' }
    ]
  }
};
</script>