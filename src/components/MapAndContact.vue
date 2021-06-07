<template>
    <div>
        <div class="lg:flex">
            <div class="w-full lg:w-1/2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.2364510907078!2d-4.53553728442789!3d36.59661387999098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fc902c3524dd%3A0x4efd53157ce63ebe!2sAv.%20Cdad.%20de%20Melilla%2C%2024%2C%2029630%20Benalm%C3%A1dena%2C%20M%C3%A1laga!5e0!3m2!1ses-419!2ses!4v1623077610014!5m2!1ses-419!2ses"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
            </div>
            <div class="w-full lg:w-1/2 bg-gray-100 px-10">
                <h1 class="text-3xl text-gray-700 font-semibold pt-5">
                    Podemos ayudaros
                </h1>
                <h3 class="text-xl text-red-600 font-normal pt-1">
                    Acérquese a nuestras oficinas
                </h3>
                <contact-form closeButton="false"></contact-form>
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
