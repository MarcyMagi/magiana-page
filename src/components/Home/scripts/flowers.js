/* eslint-disable */

let paper;

const options = {
    sizeDiffernce: 1.2,
    maxFlowers: 2,
    rotationRatio: [3, 2, 1],

    spawnLimits: [300, 500],

    flowerVariationQuantity: 3
};

let flowerVariation = [];

module.exports = {
    createFlowers: () => {
        //Create loading avatar
        let flowerSVG = require("../../../assets/flower.svg");

        console.log(flowerSVG);

        paper.project.importSVG(flowerSVG, svg => {

            for (let i = 0; i < options.flowerVariationQuantity; i++) {
                svg.scale(options.sizeDiffernce);
                flowerVariation.push(svg.children[1].clone());
            }

            let spawnFlower = total => {
                let flowersToSpawn = options.maxFlowers - total;
                for (let i = 0; i < flowersToSpawn; i++) {
                    let variationIndex = Math.floor(
                        Math.random() * flowerVariation.length
                    );
                    let rotationIndex = Math.floor(
                        Math.random() * options.rotationRatio.length
                    );
                    let locationY =
                        Math.floor(
                            Math.random() *
                                (options.spawnLimits[1] -
                                    options.spawnLimits[0])
                        ) + options.spawnLimits[0];



                    let newFlower = flowerVariation[variationIndex]
                    newFlower.translate(new paper.Point(0, LocationY))

                }
            };

            spawnFlower(1);

            const update = () => {};

            return update;
        });
    },

    setPaper: p => {
        paper = p;
    }
};
