<template>
    <div id="body">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {
        const paper = require("paper");

        let waveElement = document.getElementById("wave");

        paper.setup(waveElement);

        this.$nextTick(() => {

        });
    }
};
</script>

<style lang="scss">
@import "./styles/reset";

html,
body,
#app {
    height: 100%;
}

</style>
