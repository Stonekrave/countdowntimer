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

	globalThis = $(this);

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


		globalThis.find(".days").text(days);
		globalThis.find(".hours").text(hours);
		globalThis.find(".minutes").text(minutes);
		globalThis.find(".seconds").text(seconds);
		}

	counting();

	interval = setInterval(counting, 1000);
		//alert(settings["date"]);
	}
})(jQuery);