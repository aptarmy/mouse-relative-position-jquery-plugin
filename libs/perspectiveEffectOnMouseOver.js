(function($){
	/**
	 * Make perspective effect on mouseover the object
	 * @return {object} jQuery object
	 */
	$.fn.perspectiveEffectOnMouseOver = function(){
		return this.each(function() {
			$(this).mouseover(function(event){
				$(this).relativeMousePosition(event, "center", function(x, y, element){
					x /= 10;
					y /= 10;
					$(element).transition({perspective: "500px", rotateY: x * -1 + "deg", rotateX: y + "deg"}, 100, "ease");
				})
			})
			.mousemove(function(event){
				$(this).relativeMousePosition(event, "center", function(x, y, element){
					x /= 10;
					y /= 10;
					$(element).transition({perspective: "500px", rotateY: x * -1 + "deg", rotateX: y + "deg"}, 0);
				})
			})
			.mouseout(function(event){
				$(this).transition({perspective: "500px", rotateY: "0deg", rotateX: "0deg"}, 400, "ease");
			});
		});
	};
})(jQuery);