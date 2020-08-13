<template>
    <div id="app">
        <div id="load-screen">
            <canvas id="wave"></canvas>
            <canvas id="magiana-load"></canvas>
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
            const waveSet = {
                length: 25,
                range: 10,
                celling: 100,
                offset: 10,
                speed: 5
            };
            let wavePath = new paper.Path();
            wavePath.fillColor = "#555";

            let botLeft = new paper.Point(0, paper.view.size.height);
            let botRight = new paper.Point(
                paper.view.size.width,
                paper.view.size.height
            );

            let topPoints = [];

            let topWidthDistance = paper.view.size.width / waveSet.length;

            for (let i = 0; i <= waveSet.length; i++) {
                topPoints.push(
                    new paper.Point(topWidthDistance * i, waveSet.celling)
                );
            }

            wavePath.moveTo(botRight);
            wavePath.lineTo(botLeft);

            for (let point of topPoints) {
                wavePath.lineTo(point);
            }
            wavePath.lineTo(botRight);

            console.log(paper.view.size.height + " " + paper.view.size.width);

            paper.view.onFrame = e => {
                let offsetSinus =
                    (Math.sin(e.count / 100) + 1) * paper.view.size.width;

                for (let i = 0; i <= waveSet.length + 2; i++) {
                    let segment = wavePath.segments[i];
                    if (segment.point.y != paper.view.size.height && i != 1) {
                        let sinus = Math.sin(e.time * waveSet.speed + i * 0.27);
                        segment.point.y =
							sinus * waveSet.range + waveSet.celling;
                        segment.point.y += (offsetSinus / 10 + waveSet.offset);
                    }
                }

				wavePath.smooth({ from: 2, to: length });

			};
			
			
        });
    }
};
</script>

<style lang="scss">
@import "./css/reset";

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

    #magiana-load {
        position: relative;
        width: 50vw;
        height: 50vw;
    }
}
</style>
