'use strict'

var DepositeContent = function (text) {
  if (text) {
    var o = JSON.parse(text);
    this.balance = new BigNumber(o.balance);
    this.expiryHeight = new BigNumber(o.expiryHeight);
  } else {
    this.balance = new BigNumber(0);
    this.expiryHeight = new BigNumber(0);
  }
};

DepositeContent.prototype = {
  toString: function () {
    return JSON.stringify(this);
  }
};

var PublicContract = function(){
	  LocalContractStorage.defineMapProperty(this, "bankVault", {
    parse: function (text) {
      return new DepositeContent(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  });

};

PublicContract.prototype = {
	init: function (){
		var destination; 
		var cost; 
		var route; 
		var cost_for_rental; 
		var cost_for_ride; 
	},

	set: function (name, value){
		LocalContractStorage.set("destination", destination);
		LocalContractStorage.set("cost", cost);
		LocalContractStorage.set("route", route);
		LocalContractStorage.set("cost_for_rental", cost_for_rental);
		LocalContractStorage.set("cost_for_ride", cost_for_ride);
	}
} 




