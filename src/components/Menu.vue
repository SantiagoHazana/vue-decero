npm
<template>
    <nav
        class="md:p-2 py-2 px-3 z-10 bg-black text-white lg:fixed w-full z-50 border-b-2"
    >
        <div
            class="container mx-auto flex flex-wrap items-center justify-between font-medium flex-row-reverse lg:flex-row"
        >
            <div>
                <router-link class="cursor-pointer" :to="{ name: 'home' }">
                    <img src="/img/logo-png-2.jpg" class="max-w-sm"/>
                </router-link>
            </div>
            <div
                class="text-3xl pl-3 pr-10 lg:hidden"
                @click.prevent="showDropDown = !showDropDown"
            >
                &equiv;
            </div>
            <ul id="desktop" class="hidden lg:flex">
                <router-link
                    :to="{ name: 'expertos-en-reformas' }"
                    :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                >Expertos en reformas
                </router-link
                >
                <router-link
                    :to="{ name: 'decoracion-de-interiores' }"
                    :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                >Decoración de interiores
                </router-link
                >
                <router-link
                    :to="{ name: 'electricidad-y-fontaneria' }"
                    :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                >Electricidad y fontanería
                </router-link
                >
                <router-link
                    :to="{ name: 'energias-renovables' }"
                    :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                >Energías renovables
                </router-link
                >
                <t-dropdown text="Mas Servicios" toggle-on-hover :classes="{
                            button: 'font-medium md:px-5 py-2 hover:text-' +
                                  color +
                                  '-500 cursor-pointer border-b border-black hover:border-' +
                                  color +
                                  '-500 transition-all duration-300',
                            wrapper: 'inline-flex flex-col',
                            dropdownWrapper: 'relative z-10',
                            dropdown: 'origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white',
                            enterClass: '',
                            enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
                            enterToClass: 'transform opacity-100 scale-100',
                            leaveClass: 'transition ease-in transform opacity-100 scale-100',
                            leaveActiveClass: '',
                            leaveToClass: 'transform opacity-0 scale-95 duration-75', }">
                    <div class="py-1 rounded-md shadow-xs bg-black">
                        <router-link
                            :to="{ name: 'domotica' }"
                            :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300 block px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out'
                    "
                        >Domótica
                        </router-link
                        >

                        <router-link
                            :to="{ name: 'mantenimiento-comunidades' }"
                            :class="
                      'block md:px-5 py-2 hover:text-' +
                          color +
                          '-500 cursor-pointer border-b border-black hover:border-' +
                          color +
                          '-500 transition-all duration-300 block px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out'
                  "
                        >Mantenimiento de Comunidades
                        </router-link
                        >

                        <router-link
                            :to="{ name: 'administracion-comunidades' }"
                            :class="
                      'block md:px-5 py-2 hover:text-' +
                          color +
                          '-500 cursor-pointer border-b border-black hover:border-' +
                          color +
                          '-500 transition-all duration-300 block px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out'
                  "
                        >Administración de Comunidades
                        </router-link
                        >
                    </div>
                </t-dropdown>
                <router-link
                    :to="{ name: 'contacto' }"
                    :class="
                        'md:px-5 py-2 hover:text-' +
                            color +
                            '-500 cursor-pointer border-b border-black hover:border-' +
                            color +
                            '-500 transition-all duration-300'
                    "
                >Contacto
                </router-link
                >
            </ul>
        </div>

        <ul
            v-if="showDropDown"
            class="md:flex flex-wrap items-center justify-start font-medium lg:hidden"
        >
            <router-link
                :to="{ name: 'expertos-en-reformas' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Expertos en reformas
            </router-link
            >
            <router-link
                :to="{ name: 'decoracion-de-interiores' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Decoración de interiores
            </router-link
            >
            <router-link
                :to="{ name: 'electricidad-y-fontaneria' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Electricidad y fontanería
            </router-link
            >
            <router-link
                :to="{ name: 'energias-renovables' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Energías renovables
            </router-link
            >
            <router-link
                :to="{ name: 'domotica' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Domótica
            </router-link
            >
            <router-link
                :to="{ name: 'mantenimiento-comunidades' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Mantenimiento de Comunidades
            </router-link
            >
            <router-link
                :to="{ name: 'administracion-comunidades' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Administración de Comunidades
            </router-link
            >
            <router-link
                :to="{ name: 'contacto' }"
                :class="
                    'block md:px-5 py-2 hover:text-' +
                        color +
                        '-500 cursor-pointer border-b border-black hover:border-' +
                        color +
                        '-500 transition-all duration-300'
                "
            >Contacto
            </router-link
            >
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showDropDown: false,
            color: "red"
        };
    },

    methods: {
        scrollToSection(section) {
            let element = document.getElementById(section);
            element.scrollIntoView({behavior: "smooth", block: "end"});
        }
    }
};
</script>
