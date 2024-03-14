sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("restinpeace.project1.controller.First", {
            onInit: function() {
                // Assuming your label has an ID "myLabel"
                var oLabel = this.getView().byId("myLabel");
                oLabel.addStyleClass("myCustomClass");
            }  ,          
            onShowHello() {
                MessageToast.show("Hello World");
              },
            onGoSecond: function(){
                this.getOwnerComponent().getRouter().navTo("Second");
            }
        });
    });
