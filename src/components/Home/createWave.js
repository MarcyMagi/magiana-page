module.exports = (paper, waveSet) => {
    //create wavePath
    let wavePath = new paper.Path();

    wavePath.fillColor = waveSet.color;

    //create bottom points in the end of the page
    let botLeft = new paper.Point(0, paper.view.size.height);
    let botRight = new paper.Point(
        paper.view.size.width,
        paper.view.size.height
    );

    //create waveSet.length total of point
    let topPoints = [];

    let topWidthDistance = paper.view.size.width / waveSet.length;

    for (let i = 0; i <= waveSet.length; i++) {
        //uses celling max size idea
        topPoints.push(new paper.Point(topWidthDistance * i, waveSet.celling));
    }

    //create a rectangle figure
    wavePath.moveTo(botRight);
    wavePath.lineTo(botLeft);

    for (let point of topPoints) {
        wavePath.lineTo(point);
    }
    wavePath.lineTo(botRight);

    const update = e => {
        //Sinus to simulate a tide behavior
        let offsetSinus = (Math.sin(e.count / 100) + 1) * paper.view.size.width;

        //run every segment of the path
        for (let i = 0; i <= waveSet.length + 2; i++) {
            let segment = wavePath.segments[i];

            //ignore the bottom points
            if (segment.point.y != paper.view.size.height /*&& i != 1*/) {
                //create the wave aspect
                let sinus = Math.sin(e.time * waveSet.speed + i * 0.27);

                segment.point.y = sinus * waveSet.range + waveSet.celling;

                //add a offset to simulate a tide
                segment.point.y += offsetSinus / 10 + waveSet.offset;
            }

            wavePath.smooth({ from: 2, to: length });
        }
    };

    return {
        path: wavePath,
        update: update
    };
};
