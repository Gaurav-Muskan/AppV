sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
        onInit: function() {
            // Initialization code here
        },

        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        }
    });
});
