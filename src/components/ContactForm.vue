<template>
  <div>
    <form @submit.prevent="sendEmail" class="mt-5 text-gray-800 contact-form">
      <input
        class="outline-none appearance-none bg-transparent w-full text-grey-darker mr-3 py-1 px-2 border-b-2 border-grey-light focus:border-red-300 mb-5"
        name="user_name"
        type="text"
        placeholder="Nombre y Apellido"
        autocomplete="off"
      />
      <input
        class="outline-none appearance-none bg-transparent w-full text-grey-darker mr-3 py-1 px-2 border-b-2 border-grey-light focus:border-red-300 mb-5"
        name="user_phone"
        type="text"
        placeholder="Teléfono o celular"
        autocomplete="off"
      />
      <input
        class="outline-none appearance-none bg-transparent w-full text-grey-darker mr-3 py-1 px-2 border-b-2 border-grey-light focus:border-red-300 mb-5"
        name="user_email"
        type="text"
        placeholder="Email"
        autocomplete="off"
      />
      <textarea
        class="outline-none appearance-none bg-transparent w-full text-grey-darker mr-3 py-1 px-2 border-b-2 border-grey-light focus:border-red-300"
        name="message"
        type="text"
        placeholder="Escriba su consulta"
        autocomplete="off"
      ></textarea>
      <div class="mt-10">
        <input
            type="submit"
            value="Enviar"
          v-if="!loading"
          class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded cursor-pointer"
          />
        <a
          v-else
          disabled
          class="bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-500 rounded"
          type="button"
          >Enviando...</a
        >
        <div class="mt-5">
          <a
            href="/politicas.pdf"
            target="_blank"
            class="text-blue-500 underline text-xs w-full"
          >
            Políticas de privacidad y tratamiento de los datos.
          </a>
        </div>
        <a
          v-if="currentCloseButton == 'true'"
          @click="close()"
          class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded cursor-pointer"
          >Cerrar</a
        >
      </div>
    </form>

    <transition name="fade">
      <div
        @click="show = false"
        v-if="show"
        class="fixed bg-smoke bg-black top-0 left-0 h-screen w-full flex items-center justify-center z-50"
      >
        <div v-if="error == true">
          <div role="alert" class="mt-6">
            <div
              class="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex items-center justify-between w-full"
            >
              <div>Hubo algún error</div>
              <div class="text-right">
                <a
                  class="text-white font-extrabold text-xl py-2 px-4 cursor-pointer text-right"
                  @click="show = false"
                  >x</a
                >
              </div>
            </div>
            <div
              class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
            >
              <p>
                Por favor intente de nuevo, asegúrese de completar su nombre e
                email.
              </p>
              <br />
              <p class="font-bold">decero.eu</p>
            </div>
          </div>
        </div>
        <div v-if="thanks == true" class="w-1/2">
          <div role="alert" class="mt-6">
            <div
              class="bg-green-500 text-white font-bold rounded-tCarl px-4 py-2 flex items-center justify-between"
            >
              <div>Consulta enviada con éxito</div>
              <div class="text-right">
                <a
                  class="text-white font-extrabold text-xl py-2 px-4 cursor-pointer text-right"
                  @click="show = false"
                  >x</a
                >
              </div>
            </div>
            <div
              class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700"
            >
              <p>¡En breve nos comunicaremos!</p>
              <br />
              <p class="font-bold">decero.eu</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Modal from "vue-tailwind-modal";
import emailjs from 'emailjs-com';

export default {
  props: ["closeButton"],
  data() {
    return {
      currentCloseButton: this.closeButton,
      thanks: false,
      error: false,
      loading: false,
      show: false,
    };
  },

  methods: {
    sendEmail: function(e) {
      this.loading = true;
      emailjs.sendForm('service_iy1iuzv', 'template_bg3k2il', e.target, 'user_xcAr3aPGvN1E85vjpaJtl')
          .then((response) => {
            this.loading = false;
            this.thanks = true;
            this.error = false;
            this.show = true;

          }, (error) => {
            this.loading = false;
            this.show = true;
            this.error = true;
          });
    },
    close() {
      this.$emit("close-button");
    },
  },
};
</script>

<style scoped>
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>