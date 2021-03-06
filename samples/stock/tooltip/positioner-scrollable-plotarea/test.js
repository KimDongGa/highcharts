function test(chart) { // eslint-disable-line no-unused-vars
    var point = chart.series[0].points[8],
        offset = $(chart.container).offset();

    // Set hoverPoint
    point.onMouseOver();

    chart.pointer.onContainerMouseMove({
        type: 'mousemove',
        pageX: point.plotX + chart.plotLeft + offset.left,
        pageY: point.plotY + chart.plotTop + offset.top,
        target: chart.container
    });
}