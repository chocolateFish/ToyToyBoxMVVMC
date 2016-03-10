 /*View knows about: 
 * DOM elements -can get an element or it's input value
 * html strings - can set innerHTML, but uses callbacks to get values of data
 */

 /* global toyboxApp */
toyboxApp.view = (function () {
	var View, initModule;
	
	/**@class*/
	View = function (elements) {
        this._elements = elements;
	};
	
	View.prototype.renderList = function (callback) {
        var template = '<option id="{{id}}">{{text}}</option>';
        this._elements.toyList.innerHTML = callback(template);
    };
        
    
    View.prototype.getInputData = function () {
        var data = [this._elements.nameInput.value, this._elements.colorInput.value, this._elements.costInput.value];
        return data;
    };
    
    View.prototype.getBtn = function () {
        return this._elements.addBtn;
    };
    
    View.prototype.displayToyCount = function (callback) {
         var template = '<strong>{{count}}</strong> toy{{checkPlural}} in the toybox';
         this._elements.countOutput.innerHTML = callback(template);
    };
    
    initModule = function (elements){
        return new View(elements);
    }
	    return {initModule: initModule}
} () );
