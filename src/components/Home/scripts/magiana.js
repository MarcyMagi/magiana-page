// NOT IN USE ------

let paper;

module.exports = {
    importMagiana: () => {
        //Create loading avatar
        let magianaFaceSVG = require("../../../assets/face.svg");

        paper.project.importSVG(magianaFaceSVG, {
            onLoad: svg => {
                svg.scale(2, svg.bounds.topLeft);

                //centering
                svg.translate(
                    new paper.Point(
                        paper.view.bounds.center.x - svg.bounds.width / 2,
                        paper.view.bounds.center.y - svg.bounds.height / 2
                    )
                );

                //let magianaGroup = svg.children[1];
            }
        });
    },

    setPaper: p => {
        paper = p;
    }
};
