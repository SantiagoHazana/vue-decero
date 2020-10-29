<template>
    <div>
        <menu-component></menu-component>
        <router-view />
        <footer-component></footer-component>
    </div>
</template>
<style lang="scss">
    @import './sass/app.scss';
</style>
<script>
import MenuComponent from "./components/Menu";
import FooterComponent from "./components/Footer";
// import './sass/app.scss';
export default {
    components: { MenuComponent, FooterComponent }
};
</script>
