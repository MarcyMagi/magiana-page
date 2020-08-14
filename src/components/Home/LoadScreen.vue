<template>
    <canvas id="load"></canvas>
</template>

<script>
//import colors from "../../styles/_variables.scss";

export default {
    data() {
        return {};
    },

    props: [],

    mounted() {
        const paper = require("paper");

        let waveElement = document.getElementById("load");

        paper.setup(waveElement);

        //Create waves

        /*  ----   WAVE PRESET   ----

        length  => total points in the top side of the path
        range   => size of each "wave"
        size    => position of the stream on canvas
        offset  => tide movement offset
        speed   => velocity of the wave

        */

        const topWavePreset = {
            mobile: {
                length: 25,
                range: 5,
                height: 190,
                offset: 15,
                speed: 2,
                color: "#37B89A"
            }
        };

        const midTopWavePreset = {
            mobile: {
                length: 25,
                range: 6,
                height: 170,
                offset: 8,
                speed: -5,
                color: "#389BA1"
            }
        };

        const midBotWavePreset = {
            mobile: {
                length: 15,
                range: 10,
                height: 140,
                offset: 10,
                speed: 6,
                color: "#378FB8"
            }
        };

        const botWavePreset = {
            mobile: {
                length: 15,
                range: 7,
                height: 110,
                offset: 15,
                speed: -6,
                color: "#3467AD"
            }
        };

        const createWave = require("./createWave");

        let topWave = createWave(paper, topWavePreset);
        let midTopWave = createWave(paper, midTopWavePreset);
        let midBotWave = createWave(paper, midBotWavePreset);
		let botWave = createWave(paper, botWavePreset);
		
		//Create loading avatar

        paper.view.onFrame = e => {
            topWave.update(e);
            midTopWave.update(e);
            midBotWave.update(e);
            botWave.update(e);
        };
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
