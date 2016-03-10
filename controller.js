 /*Controller knows about: 
 * ViewModel - 
 * callbacks in the ViewModel make changes to the Model happen here 
 * event listner code lives here
 *
 * Model - 
 * update/change the model
 */
 
 /* global toyboxApp */
toyboxApp.controller = (function () {
	var Controller, initModule;
    
    function Controller(model, viewModel) {
        this._model = model;
        this._viewModel = viewModel;
  
    };

	Controller.prototype.render = function () {
		this._viewModel.renderList();
        this._viewModel.displayToyCount();
	};
    
    Controller.prototype.addToy = function () {
        var theModel =  this._model;
		this._viewModel.addToy(function (dataArray) {
            theModel.addToy(dataArray[0], dataArray[1], dataArray[2]);
        });
    };
    
    Controller.prototype.onClickAddBtn = function () {
        var _this = this;
        this._viewModel.onClickAddBtn(function (){
            _this.addToy();
            _this.render();
        });
    };
           
    initModule = function (model, viewModel) {
        return new Controller(model, viewModel);
    };
    
	    return {initModule: initModule};
} () );

