/**
 * Array, Javascript Extended Functions
 */

if(!Array.prototype.forEach)
Array.prototype.forEach = function (fn) {
	for(var i in this) {
		if(isNaN(i)) continue;
		var r = fn(this[i], +i, this);
	}
	return this;
};

/**
 * String, Javascript Extended Functions
 */

String.prototype.capitalize = function (capitalize_all_letters) {
	if(capitalize_all_letters)
		return this.split(' ').forEach(function(v,i,a){a[i] = v.capitalize()}).join(' ');
	return this.charAt(0).toUpperCase() + this.slice(1);
};