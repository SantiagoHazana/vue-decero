<template>
  <div class="container mx-auto mb-10 px-4" id="contacto">
    <div class="w-full lg:text-center lg:mb-12 mb-5">
      <h1 class="text-4xl text-gray-800 font-bold">Acérquese a nuestras oficinas</h1>
    </div>
    <div class="lg:flex">
      <div class="w-full lg:w-1/2">
        <img src="/decero.jpg" class="w-full object-cover lg:rounded-l" style="height:450px" />
      </div>
      <div class="w-full lg:w-1/2 bg-gray-100 px-10 lg:rounded-r">
        <h1 class="text-3xl text-gray-700 font-semibold pt-5">Podemos ayudaros</h1>
        <contact-form closeButton="false" class="mb-12 lg:mb-0"></contact-form>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
export default {
  components: { ContactForm }
};
</script>
