//First attempt at function creation		
		// function countdown(options) {
		// 	var settings = { "date": null };
		// 	if (options) {
		// 		$.extend(settings, options);
		// 	}


(function($) {
	$.fn.countdown = function(userDate) {
		var settings = { "date": null };
		if (userDate) {
			$.extend(settings, userDate);
		}

	this_sel = $(this);

	function counting() {
		eventDate = Date.parse(settings["date"]) / 1000;
		currentDate = Math.floor($.now() / 1000);
		seconds = eventDate - currentDate;

		days = Math.floor(seconds / (60 * 60 * 24));
		seconds = seconds - (days * 60 * 60 * 24);
		hours = Math.floor(seconds / (60 * 60));
		seconds = seconds - (hours * 60 * 60);
		minutes = Math.floor(seconds / 60);
		seconds = seconds - (minutes * 60);
		//alert(days + " " + hours + " " + minutes + " " + seconds);


		this_sel.find(".days").text(days);
		this_sel.find(".hours").text(hours);
		this_sel.find(".minutes").text(minutes);
		this_sel.find(".seconds").text(seconds);
		}

	counting();

	interval = setInterval(counting, 1000);
		//alert(settings["date"]);
	}
})(jQuery);