<template>
  <div class="fixed bottom-0 right-0 mr-5 w-1/4">
    <div class="flex flex-wrap content-start justify-start">
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-t lg:rounded-b-none flex flex-col justify-between leading-normal"
      >
        <div class="flex items-center cursor-pointer p-4" @click="show = !show">
          <div class="bg-green-500 h-3 w-3 rounded-full mr-2">.</div>
          <img
            class="w-12 h-12 rounded-full mr-4"
            src="https://tailwindcss.com/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p
              class="text-gray-900 leading-none font-bold text-xl animate-flicker"
            >¿Necesitás ayuda?</p>
          </div>
        </div>

        <transition name="fade">
          <div class="p-4" v-if="show">
            <contact-form @close-button="show = !show" closeButton="true"></contact-form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
export default {
  components: { ContactForm },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

.animate-flicker {
  animation: fadeIn 1s infinite alternate;
}
</style>
