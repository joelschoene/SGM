// todo write proper comments

var SGM = window.SGM || {};

// Augmenting Types
Function.prototype.method = function( name, func ) {

    if( !this.prototype[name] ) {
        this.prototype[name] = func;
    }
    return this;

};

// document.writeln( (-10 / 3).integer())  // -3
Number.method( 'integer', function() {
    return Math[ this < 0 ? 'ceil' : 'floor'](this);
});

// console.log(("   raja   ").trim());
String.method( 'trim', function() {
   return this.replace(/^\s+|\s+$/g,"");
});

// console.log(("   raja").ltrim());
String.method( 'ltrim', function() {
   return this.replace(/^\s+/g,"");
});

// console.log(("raja   ").rtrim());
String.method( 'rtrim', function() {
   return this.replace(/\s+$/g,"");
});

/*
* Usage
* var tmp = [5,9,12,18,56,1,10,42,30,7,97,53,33,35,27];
*    tmp=tmp.sortNum(); // returns 1,5,7,9,10,12,18,27,30,33,35,42,53,56,97 
*/
Array.prototype.sortNum = function() {
   return this.sort( function (a,b) { return a-b; } );
}

SGM.Utils = ( function(){

    return {

        init: function() {
            //console.log(4);
        },

        // http://javascript.crockford.com/remedial.html
        isEmpty: function(o) {
            var i, v;
            if (typeOf(o) === 'object') {
                for (i in o) {
                    v = o[i];
                    if (v !== undefined && typeOf(v) !== 'function') {
                        return false;
                    }
                }
            }
            return true;
        }

    };  // return

})();   // SGM.Utils