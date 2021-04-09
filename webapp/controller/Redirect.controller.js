sap.ui.define([
	'sap/m/library',
	"sap/ui/core/mvc/Controller"
], function (mobileLibrary, Controller) {
	"use strict";
	var URLHelper = mobileLibrary.URLHelper;
	return Controller.extend("com.xpertal.redirect.redirectCalendary.controller.Redirect", {
		onInit: function () {
			
		},
		onRedirectclick: function(oEvent){
			var sCrPlaza = this.byId("inputCrplaza").getValue().toUpperCase() ;
			var sCrTienda = this.byId("inputCrtienda").getValue().toUpperCase() ;
			console.log(sCrPlaza + sCrTienda);
			var url = "https://oxxo.reflexisinc.com/RWS4/WebClockLogin.jsp?UnitID=" + sCrPlaza + sCrTienda +" &locationID=Caja_POS";
			URLHelper.redirect(url, false);
		}
	});
});