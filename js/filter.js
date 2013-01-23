(function() {

	var objMap = function(obj, fn, context) {
		var acc = {};
		Object.keys(obj).forEach(function(key) {
			var value = obj[key];
			acc[key] = fn.call(context, value, key, obj);
		}, {});
		return acc;
	};

	var search = function(set, term) {
		var regExps = term.split(' ')
			.filter(Boolean)
			.map(function(s) { return s.replace(/[^a-zA-Z-]/, '[a-zA-Z-]*'); })
			.map(function(s) { return new RegExp(s); })
		console.log("changed", term, "into", regExps);

		var l = regExps.length;

		return objMap(set, function(value, name) {
			for (var i = 0; i < l; i++) {
				if (!regExps[i].test(value.tags)) {
					return false;
				}
			}
			return true;
		});
	}

	window.search = search;
})();
