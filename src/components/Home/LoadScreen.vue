<template>
    <canvas id="load"></canvas>
</template>

<script>
import colors from "../../styles/_variables.scss";

export default {
    data() {
        return {};
    },

    props: [],

    mounted() {
        console.log(colors);

        const paper = require("paper");

        let waveElement = document.getElementById("load");

        paper.setup(waveElement);

        /*  ----   WAVE PRESET   ----

        length  => total points in the top side of the path
        range   => size of each "wave"
        celling => position of the stream on canvas
        offset  =>

        */

        const topWavePreset = {
            length: 25,
            range: 5,
            celling: 450,
            offset: 15,
            speed: 2,
            color: "#37B89A"
        };

        const midTopWavePreset = {
            length: 25,
            range: 10,
            celling: 470,
            offset: 5,
            speed: -5,
            color: "#389BA1"
        };

        const midBotWavePreset = {
            length: 15,
            range: 10,
            celling: 500,
            offset: 10,
            speed: 6,
            color: "#378FB8"
        };

        const botWavePreset = {
            length: 15,
            range: 7,
            celling: 530,
            offset: 15,
            speed: -6,
            color: "#3467AD"
        };

        this.$nextTick(() => {
            const createWave = require("./createWave");

            let topWave = createWave(paper, topWavePreset);
            let midTopWave = createWave(paper, midTopWavePreset);
            let midBotWave = createWave(paper, midBotWavePreset);
            let botWave = createWave(paper, botWavePreset);

            paper.view.onFrame = e => {
                topWave.update(e);
                midTopWave.update(e);
                botWave.update(e);
                midBotWave.update(e);
            };
        });
    }
};
</script>

<style lang="scss" scoped>
$primary-load: #211b24;

#load {
    width: 100%;
    height: 100%;
    background-color: $primary-load;
}
</style>
