sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
        onInit: function() {
            // Initialization code here
        },
        OnSubmit: function() {
            var name=this.getView().byId("idIpName").getValue();//We got the input which we have filled in the inbox.
            var msg="Welcome to UI5 "+name;
            //For second task i.e show align acc. to user's choice.
            var align=this.getView().byId("idIpAlign").getValue();
            this.getView().byId("idTxtMsg").setTextAlign(align);
            this.getView().byId("idTxtMsg").setText(msg);
            //disable input field...
            this.getView().byId("idIpName").setEnabled(false);
            this.getView().byId("idIpAlign").setEnabled(false);
        },
        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        }
    });
});
