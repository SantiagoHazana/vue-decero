<template>
    <div>
        <nav
            class="md:p-2 py-2 px-3 z-50 bg-black text-white lg:fixed w-full border-b-2"
        >
            <div
                class="container mx-auto flex justify-between items-center flex-row-reverse md:flex-row"
            >
                <router-link class="cursor-pointer" :to="{ name: 'home' }">
                    <img src="/img/logo-png-2.jpg" class="max-w-sm" />
                </router-link>
                <div
                    class="text-3xl pl-3 pr-10 md:invisible"
                    @click.prevent="showDropDown = !showDropDown"
                >
                    &equiv;
                </div>
                <div
                    v-if="showDropDown"
                    class="pt-3 hidden lg:block"
                    id="desktop"
                >
                    <router-link
                        :to="{ name: 'expertos-en-reformas' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Expertos en reformas</router-link
                    >
                    <router-link
                        :to="{ name: 'decoracion-de-interiores' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Decoración de interiores</router-link
                    >
                    <router-link
                        :to="{ name: 'electricidad-y-fontaneria' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Electricidad y fontanería</router-link
                    >
                    <router-link
                        :to="{ name: 'energias-renovables' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Energías renovables</router-link
                    >
                    <router-link
                        :to="{ name: 'domotica' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Domótica</router-link
                    >
                    <router-link
                        :to="{ name: 'contacto' }"
                        :class="
                            'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                                color +
                                '-500 cursor-pointer border-b border-black hover:border-' +
                                color +
                                '-500 transition-all duration-300'
                        "
                        >Contacto</router-link
                    >
                </div>
            </div>
            <div
                v-if="showDropDown"
                class="pt-3 lg:hidden font-medium"
                id="mobile"
            >
                <router-link
                    :to="{ name: 'expertos-en-reformas' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Expertos en reformas</router-link
                >
                <router-link
                    :to="{ name: 'decoracion-de-interiores' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Decoración de interiores</router-link
                >
                <router-link
                    :to="{ name: 'electricidad-y-fontaneria' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Electricidad y fontanería</router-link
                >
                <router-link
                    :to="{ name: 'energias-renovables' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Energías renovables</router-link
                >
                <router-link
                    :to="{ name: 'domotica' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Domótica</router-link
                >
                <router-link
                    :to="{ name: 'contacto' }"
                    :class="
                        'block md:inline md:px-5 py-4 md:py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                    >Contacto</router-link
                >
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropDown: true,
            color: "red"
        };
    },

    methods: {
        scrollToSection(section) {
            let element = document.getElementById(section);
            element.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }
};
</script>
