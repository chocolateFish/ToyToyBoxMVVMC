 /*ToyboxApp: 
*model, view, viewModel and controller are instantiated here
*
 */
var toyboxApp = (function () {
    var initModule = function () {
        var model = toyboxApp.model.initModule();
        var view = toyboxApp.view.initModule({nameInput:document.querySelector("#toyName"),
                                    colorInput:document.querySelector("#toyColor"),
                                    costInput:document.querySelector("#toyCost"),
                                    addBtn:document.querySelector("#addToyBtn"),
                                    toyList:document.querySelector("#toyList"),
                                    countOutput:document.querySelector("#toyCount")
                                    })
        var viewModel = toyboxApp.viewModel.initModule(view, model);
        var controller = toyboxApp.controller.initModule(model, viewModel);
      
        controller.render();
        //click even fot btn
        controller.onClickAddBtn();

    };
    
    return {initModule:initModule};
} () );