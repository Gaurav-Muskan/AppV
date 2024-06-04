sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("incture.project3.controller.First", {
        onInit: function () {
            // Initialize JSON Model
            var mLookupModel = new JSONModel();
            this.getView().setModel(mLookupModel, "mLookupModel");
            this.mLookupModel = mLookupModel;

            // Get Northwind Data Model
            var NorthwindDataModel = this.getOwnerComponent().getModel("NorthwindDataModel");
            this.NorthwindDataModel = NorthwindDataModel;

            // Call function to fetch Employees data
            this.getEmployeesSet();
        },

        getEmployeesSet: function () {
            var sUrl = "/Employees";
            var mLookupModel = this.mLookupModel;
            var NorthwindDataModel = this.NorthwindDataModel;

            NorthwindDataModel.read(sUrl, {
                success: function (oData) {
                    var aEmployeesGroupSet = oData.results;
                    console.log("Data fetched successfully:", aEmployeesGroupSet); // Log fetched data
                    mLookupModel.setProperty("/aEmployeesGroupSet", aEmployeesGroupSet);
                    mLookupModel.refresh();
                },
                error: function (oError) {
                    console.error("Error fetching data:", oError); // Log error
                    mLookupModel.setProperty("/aEmployeesGroupSet", []);
                    mLookupModel.refresh();
                }
            });
        },

        onComboBoxChange: function (oEvent) {
            // Event handler for ComboBox change
            var selectedKey = oEvent.getSource().getSelectedKey();
            console.log("Selected key:", selectedKey);
        }
    });
});
