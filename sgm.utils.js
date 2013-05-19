// todo write proper comments
var SGM = window.SGM || {};

// Augmenting Types
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}
// document.writeln( (-10 / 3).integer())  // -3
String.method('integer', function() {
	return Math[ this < 0 ? 'ceiling' : 'floor'](this);
});

SGM.Utils = (function(){

	SGM.init();

	return {

		init: function() {

		}
		
	};  // return

})();  // SGM.Utils