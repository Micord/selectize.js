Selectize.define('input_max_length', function(options) {
	var self = this;
	this.setup = (function() {
		var original = self.setup;
		return function() {
			original.apply(this, arguments);
			this.$control_input.attr('maxlength', this.settings.maxlength);
		};
	})();
});
