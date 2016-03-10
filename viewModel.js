 /*ViewModel knows about: 
 * View - 
 * event listners attached to buttons
 * data inputs sent to controller (callback) to change model
 * Model - 
 * only to change/ update the view
 * ViewModel CANNOT change the model itself
 */
/* global toyboxApp */
toyboxApp.viewModel = (function () {
	var ViewModel, initModule;
	
	/**@class*/
	ViewModel = function (view, model) {
		this._view = view;
		this._model = model;
	};
  
    /*join the html input button to the click event*/
    ViewModel.prototype.onClickAddBtn = function (callback) {
        var btn = this._view.getBtn();
        btn.onclick = callback;
    };

 /*update the listbox (template html listBox string) in View using model data*/
    ViewModel.prototype.renderList = function () {
        var toysArray, aToy;
        toysArray = this._model.allMyToys;
         this._view.renderList(function (template) {
            var view = "";
            toysArray.forEach(function (aToy) {
                var toyString = "";
		        //view += template.replace('{{id}}', aToy.name).replace('{{text}}', aToy.toString());
                toyString = template.replace('{{id}}', aToy.name);
                toyString = toyString.replace('{{text}}', aToy.toString());
                view = view + toyString;
            });
            return view;
        });
	};
    
   ViewModel.prototype.displayToyCount = function () {
       var toyCount = this._model.toyCount;
       this._view.displayToyCount(function (template) {
           var plural = toyCount === 1 ? '' : 's';
           template = template.replace('{{count}}', toyCount);
           template = template.replace('{{checkPlural}}', plural);
           return template;
       });
	};
   
   
   
    ViewModel.prototype.addToy = function (callback) {
        var dataArray = this._view.getInputData();
        callback(dataArray);
    };

 
	initModule = function (view, model) {
		return new ViewModel(view, model);   
	};
	
	    return { initModule: initModule,
            }
} () );



	