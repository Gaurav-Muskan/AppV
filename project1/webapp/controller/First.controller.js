sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
        onInit: function() {
            // Initialization code here
        },

        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        },

        onSubmit: function() {
            var name = this.getView().byId("idIpName").getValue();
            var msg = "Welcome to UI5 " + name;
            var align = this.getView().byId("idIpAlign").getValue();
            this.getView().byId("idTxtMsg").setTextAlign(align);
            this.getView().byId("idTxtMsg").setText(msg);
            this.getView().byId("idIpName").setEnabled(false);
            this.getView().byId("idIpAlign").setEnabled(false);
        },

        onHideShow: function() {
            var txtOnBtn = this.getView().byId("idBtnHideShow").getText();
            if (txtOnBtn === "Hide") {
                this.getView().byId("idTxtMsg").setVisible(false);
                this.getView().byId("idLblName").setVisible(false);
                this.getView().byId("idIpName").setVisible(false);
                this.getView().byId("idLblAlign").setVisible(false);
                this.getView().byId("idIpAlign").setVisible(false);

                this.getView().byId("idBtnHideShow").setText("Show");
            } else {
                this.getView().byId("idTxtMsg").setVisible(true);
                this.getView().byId("idLblName").setVisible(true);
                this.getView().byId("idIpName").setVisible(true);
                this.getView().byId("idLblAlign").setVisible(true);
                this.getView().byId("idIpAlign").setVisible(true);

                this.getView().byId("idBtnHideShow").setText("Hide");
            }
        }
    });
});
