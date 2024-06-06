sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, JSONModel, ODataModel) {
    "use strict";

    return UIComponent.extend("incture.project3.Component", {
        metadata: {
            manifest: "json"
        },

        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set up models
            var oDataModel = new ODataModel(this.getMetadata().getManifestEntry("sap.app").dataSources.NorthwindOData.uri);
            this.setModel(oDataModel, "NorthwindDataModel");

            var mLookupModel = new JSONModel();
            this.setModel(mLookupModel, "mLookupModel");

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});
