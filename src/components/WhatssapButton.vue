<template>
  <div>
    <button
      @click="sendWhatssap()"
      class="fixed bottom-0 left-0 mb-3 ml-4 text-white bg-green-500 px-4 py-3 rounded-full text-3xl font-black"
      target="_blank"
    >
      <i class="fab fa-whatsapp fa-lg"></i>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone_url: "34722263334",
      phone: "+34 722 26 33 34",
      text: "Hola! Me interesa saber sobre.."
    };
  },
  methods: {
    sendWhatssap() {
      window.location.href =
        "https://wa.me/" + this.phone_url + "?text=" + this.text;
    }
  }
};
</script>