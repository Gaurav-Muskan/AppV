sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",
    "sap/m/GroupHeaderListItem"
],
function (Controller, Filter, Sorter, GroupHeaderListItem) {
    "use strict";

    return Controller.extend("com.incture.odataapp.controller.First", {
        onInit: function () {
            // this.getOdataService();
        },
        getOdataService: function () {
            let oDataModel = this.getOwnerComponent().getModel(),
                oJsonModel = this.getOwnerComponent().getModel("jsonModel"),
                sPath = "/Employees";
            let oFilter = new Filter({
                // /Employees=[{id,name...},{id,name }]
                path: 'FirstName',
                operator: "EQ",
                value1: "Nancy"
            });
            let oSorter = new Sorter({
                path: 'Country',
                descending: false,
                group: true,
                groupHeaderFactory: this.getGroupHeader
            });
            oDataModel.read(sPath, {
                // filters: [oFilter],
                sorters: [oSorter],
                success: function (successData) {
                    oJsonModel.setProperty("/listData", successData.results);
                    // debugger;
                },
                error: function (errorMsg) {
                    console.log("Error :" + errorMsg);
                }
            });
        },
        getGroupHeader: function (oGroup) {
            return new GroupHeaderListItem({
                title: oGroup.key,
                upperCase: false
            });
        }
    });
});
