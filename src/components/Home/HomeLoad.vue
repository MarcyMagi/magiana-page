<template>
    <canvas id=""></canvas>
</template>

<script>
export default {
    data() {
        return {};
    },

    props: [],

    mounted() {
        const paper = require("paper");

        let waveElement = document.getElementById("wave");

        paper.setup(waveElement);

        const waveSet = {
            length: 25,
            range: 10,
            celling: 100,
            offset: 10,
            speed: 5
        };


        this.$nextTick(() => {});
    }
};
</script>

<style lang="scss" scoped>

# {
    width: 100%;
    height: 100%;
    background-color: $primary-color;
}

</style>
