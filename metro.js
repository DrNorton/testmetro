

$().ready(function () {

    // find svg in dom
    var svgContainer = d3.select("body").select("svg");

    /**
     * get class from foreach station and add box rect, that
     * click on it, because bad click on path
     */
    d3.selectAll(".station").each(function () {
        var bbox = this.getBBox();
        var rectangle = svgContainer.append("rect")
            .attr("x", bbox.x)
            .attr("y", bbox.y - (bbox.height / 3))
            .attr("width", bbox.width)
            .attr("height", bbox.height + (bbox.height / 1.7))
            .attr("class", $(this).attr("class") + " station_rect")
            .style("fill", "transparent");
    });



    /**
     * Click on rect and catch id station
     */
    d3.selectAll(".station_rect").on("click", function (d, i) {
        var attrClass = $(this).attr("class");
        //console.log(attrClass);
        // find id station
        var match = attrClass.match(/station_(\d+)/i)
        if (match) {
            callFlutter(attrClass);
            //selectMetro.performClick(attrClass);
            //            // animate circle
            //            animateCircleClick(this.getBBox(), attrClass);
            //            // animate text select
            //            animateTextSelect("."+match[0])
        }
        return false;
    });

    function animateTextSelect(classElement) {
        var elem = d3.select(classElement);

        // animate text select
        elem.transition()
            .duration(150)
            .style("fill", "steelblue")
            .each("end", function () {
                // after animate set back color
                elem.transition()
                    .duration(150)
                    .style("fill", "#3d3d3d")
            });
    }

    function animateCircleClick(bbox, stationId) {
        var circle = svgContainer.append("circle")
            .attr("cx", bbox.x + (bbox.width / 2))
            .attr("cy", bbox.y + (bbox.height / 2))
            .attr("r", 0)
            .style("opacity", .5)
            .style("fill", "steelblue")
            // animation circle
            .transition()
            .duration(300)
            .attr("r", 55)
            .style("opacity", 0)
            .each("end", function () {
                // load pseudo url to catch from webview url
                //                window.location.href = "http://pseudo/"+stationId;
                callFlutter(attrClass);
                $(this).remove();
            });
    }

});
