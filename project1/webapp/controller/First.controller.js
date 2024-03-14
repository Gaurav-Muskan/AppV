sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
	"use strict";
    // /**
    //  * @param {typeof sap.ui.core.mvc.Controller} Controller
    //  */
    // function (Controller,MessageToast) {
    //     "use strict";

        return Controller.extend("restinpeace.project1.controller.First", {
            onInit() {
                // set data model on view
                const oData = {
                   recipient : {
                      name : "World"
                   }
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
             },    
            onShowHello() {
                MessageToast.show("Hello World");
              },
            onGoSecond: function(){
                this.getOwnerComponent().getRouter().navTo("Second");
            }
        });
    });
