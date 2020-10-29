<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:pt-24">
      <div>
        <h1
          class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6"
        >Contacto</h1>

        <map-and-contact></map-and-contact>
        <data-contact class="mt-20 lg:mt-0"></data-contact>
      </div>
      <whatssap-button></whatssap-button>
      <!-- <chat-button class="hidden lg:block"></chat-button> -->
    </div>
  </div>
</template>

<script>
import WhatssapButton from "../components/WhatssapButton";
import PresupuestoButton from "../components/PresupuestoButton";
import ChatButton from "../components/ChatButton";
import ContactForm from "../components/ContactForm";
import MapAndContact from "../components/MapAndContact";
import DataContact from "../components/DataContact";

export default {
  components: {
    WhatssapButton,
    PresupuestoButton,
    ContactForm,
    ChatButton,
    MapAndContact,
    DataContact
  },
  metaInfo: {
    title: 'Contacto',
    meta: [
      { name: 'description', content: 'contacto' }
    ]
  }
};
</script>