<template>
    <div id="app">
        <div id="load-screen">
            <h1>asdasdas</h1>
            <canvas id="wave"></canvas>
        </div>
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
@import "./reset";

html,
body,
#app {
    height: 100%;
}

$primary-color: #333;
$secondary-color: #aaa;

#load-screen {
    width: 100%;
    height: 100%;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;

    #wave {
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
    }
}
</style>
