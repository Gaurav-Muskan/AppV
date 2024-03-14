sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("restinpeace.project1.controller.Third", {
            onInit: function () {

            },
            onGoFirst: function(){
                this.getOwnerComponent().getRouter().navTo("RouteFirst");
            }
        });
    });
