<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:justify-center lg:pt-24">
      <div class="w-full lg:w-4/5">
        <h1 class="text-3xl text-red-600 text-center font-medium mt-5 mb-3 lg:text-4xl lg:text-left lg:px-6">
          Cocinas
        </h1>
          <iframe class="m-auto p-5 border-2 " width="800" height="488" src="https://www.youtube.com/embed/RsvIZ4NJsvY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

</template>

<script>
import PresupuestoButton from "@/components/PresupuestoButton";
import ContactForm from "@/components/ContactForm";
import ChatButton from "@/components/ChatButton";

export default {
    components: { PresupuestoButton, ContactForm, ChatButton },
    metaInfo: {
        title: 'Cocinas',
        meta: [
            { name: 'description', content: 'Decero' }
        ]
    }
};
</script>

<style scoped>

</style>