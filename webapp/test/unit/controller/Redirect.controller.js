/*global QUnit*/

sap.ui.define([
	"com/xpertal/redirect/redirectCalendary/controller/Redirect.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Redirect Controller");

	QUnit.test("I should test the Redirect controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});