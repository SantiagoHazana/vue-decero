<template>
    <div class="bg-gray-800 text-white text-center py-5 text-xs">
        <cookie-law>
            <div slot-scope="props" class="container mx-auto">
                <p class="text-xl">
                    Este sítio utiliza cookies para mejorar tu experiencia!
                </p>
                <button
                    class="skew bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-xl m-2"
                    @click="props.accept"><span>Acepto!</span></button>
                <button
                    class="skew bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded text-xl m-2"
                    @click="props.close"><span>Solo necesarias</span></button>
            </div>

        </cookie-law>
        Todos los derechos reservados -
        <a
            href="/politicas.pdf"
            target="_blank"
            class="text-blue-300 underline text-xs w-full"
        >
            Políticas de privacidad y tratamiento de los datos.
        </a>
    </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
    components: {CookieLaw}
}
</script>