 /* global toyboxApp */
toyboxApp.model = (function () {
	var Toy, Toybox, initModule;
	
	//Toy constructor
	Toy = function ( newName, newColour, newCost ) {
		this.name = newName || 'unnamed';
		this.colour = newColour || 'white';
		this.cost = newCost || 0.0;
	};

	Toy.prototype.toString = function () {
		return this.name + " ("  + this.colour + ') $' + this.cost;
	};
 
	//Toybox cunstructor
	Toybox = function () {
		this.toyCount = 0;
		this.allMyToys = [] ;
	};

	Toybox.prototype.addToy = function ( newName, newColour, newCost ) {
		var newToy = new Toy( newName, newColour, newCost );
		this.allMyToys.push( newToy );
		this.toyCount += 1;
	};
  
	Toybox.prototype.toString = function () {
		var outStr, aToy;
		out = '';
		//NOTE: need to enable experimental javascript harmony/ES6 features
		for ( aToy of this.allMyToys) {  
			outStr += aToy.toString() + '\n';
		}
		return outStr;
	};
    
    Toybox.prototype.getToyCount = function () {
		return this.toyCount;
	};

    initModule = function () {
        return new Toybox();
        
    };
    
    return {initModule: initModule};
} () );