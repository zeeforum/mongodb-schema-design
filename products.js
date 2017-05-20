var mongoose = require('mongoose');
var Category = require('./category');

var productSchema = {
	name: {type: String, require: true},
	//picture must start with http://
	pictures: [{type: String, match: /^http:\/\//i}],
	price: {
		amount: {type: Number, required: true},
		//only 3 currency supported for now
		currency: {
			type: String,
			enum: ['USD', 'EUR', 'GBP'],
			required: true
		}
	},
	category: Category.categorySchema
};

var schema = new mongoose.Schema(productSchema);

var currencySymbols = {
	'USD': '$',
	'EUR': '€',
	'GBP': '£'
};

/**
 * Human readable string form price "$25" rather than "25 USD"
 */
schema.virtual('displayPrice').get(function() {
	return currencySymbols[this.price.currency] + '' + this.price.amount;
});

schema.set('toObject', {virtuals: true });
schema.set('toJSON', {virtuals: true});

module.exports = schema;
module.exports.productSchema = productSchema;