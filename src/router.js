import Vue from "vue";
import Router from "vue-router";
import ErrorComponent from "./components/Error";
import Home from "./views/Home";
import ExpertosEnReformas from "./views/ExpertosEnReformas";
import Domotica from "./views/Domotica";
import DecoracionDeInteriores from "./views/DecoracionDeInteriores";
import ElectricidadYFontaneria from "./views/ElectricidadYFontaneria";
import EnergiasRenovables from "./views/EnergiasRenovables";
import Contacto from "./views/Contacto";
import MantenimientoComunidades from "@/views/MantenimientoComunidades";
Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/expertos-en-reformas",
            component: ExpertosEnReformas,
            name: "expertos-en-reformas"
        },
        {
            path: "/domotica",
            component: Domotica,
            name: "domotica"
        },
        {
            path: "/decoracion-de-interiores",
            component: DecoracionDeInteriores,
            name: "decoracion-de-interiores"
        },
        {
            path: "/electricidad-y-fontaneria",
            component: ElectricidadYFontaneria,
            name: "electricidad-y-fontaneria"
        },
        {
            path: "/energias-renovables",
            component: EnergiasRenovables,
            name: "energias-renovables"
        },
        {
            path: "mantenimiento-comunidades",
            component: MantenimientoComunidades,
            name: "mantenimiento-comunidades"
        },
        {
            path: "/contacto",
            component: Contacto,
            name: "contacto"
        },
        {
            path: "*",
            component: ErrorComponent,
            name: "error"
        }
    ],
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
});
