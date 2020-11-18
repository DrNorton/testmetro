

$().ready(function () {
    // find svg in dom
    var svgContainer = d3.select("body").select("svg");
    $("#ui_combo_bodies_all_2811").remove();
    $("#cmbBody_crutch").remove();

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

    d3.selectAll("[id*='line-']").each(function () {
        var bbox = this.getBBox();
        var rectangle = svgContainer.append("rect")
            .attr("x", bbox.x)
            .attr("y", bbox.y - (bbox.height / 3))
            .attr("width", bbox.width)
            .attr("height", bbox.height + (bbox.height / 1.7))
            .attr("class", $(this).attr("class") + " line_rect")
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
            onStationSelectFlutter(attrClass);
            //selectMetro.performClick(attrClass);
            //            // animate circle
            //            animateCircleClick(this.getBBox(), attrClass);
            //            // animate text select
            //            animateTextSelect("."+match[0])
        }
        return false;
    });

    /**
  * Click on rect and catch id station
  */
    d3.selectAll(".line_rect").on("click", function (d, i) {
        var attrClass = $(this).attr("class");
        //console.log(attrClass);
        // find id station
        onLineSelectFlutter(attrClass);
        // var match = attrClass.match(/station_(\d+)/i)
        // if (match) {
        //     callFlutter(attrClass);
        //     //selectMetro.performClick(attrClass);
        //     //            // animate circle
        //     //            animateCircleClick(this.getBBox(), attrClass);
        //     //            // animate text select
        //     //            animateTextSelect("."+match[0])
        // }
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


    const w = $('#scheme-metro').width();
    const s = w - w / 2
    $('body').scrollLeft(200);
    const r = $('#scheme-metro').position()
    console.log(r)

    /**
 * jQuery function to scroll the viewport middle to the element.
 */
    $.fn.scrollToMiddle = function (options) {
        var settings = $.extend({
            duration: 1000
        }, options);

        return this.each(function () {
            var $el = $(this);
            var elOffset = $el.offset().left;
            var elHeight = $el.width();
            var windowHeight = $(window).width();
            var offset;
            if (elHeight < windowHeight) {
                offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
            }
            else {
                offset = elOffset;
            }
            $('html, body').animate({
                scrollLeft: 300
            }, settings.duration);
        });
    };


    $('#scheme-metro').scrollToMiddle({ duration: 500 });
});


