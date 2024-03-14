sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/jquery"
], function(Controller, JSONModel, jQuery) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.ProductList", {

        onInit: function() {
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "productModel");
            this.fetchData();
        },

        fetchData: function() {
            var sApiUrl = "https://services.odata.org/TripPinRESTierService/(S(id))/People";
            jQuery.ajax({
                url: sApiUrl,
                method: "GET",
                dataType: "json",
                success: function(oData) {
                    var productModel = this.getView().getModel("productModel");
                    if (!productModel) {
                        productModel = new JSONModel();
                        this.getView().setModel(productModel, "productModel");
                    }
                    productModel.setData(oData);
                    console.log(productModel);
                }.bind(this),
                error: function(error) {
                    console.error("Error fetching API data:", error);
                }
            });
        }
    });
});












