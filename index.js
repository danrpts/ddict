function Dictionary (attributes) {
	this.attributes = attributes || {};
	return (this instanceof Dictionary) ? this : new Dictionary(attributes);
}

Dictionary.prototype.has = function (key) {
	var attr = this.attributes;
	return (typeof key == 'string') && Object.prototype.hasOwnProperty.call(attr, key) && Object.prototype.propertyIsEnumerable.call(attr, key);
}

Dictionary.prototype.get = function (key) {
	return (typeof key == 'string') && (!!this.attributes[key]) ? this.attributes[key] : undefined;
}

Dictionary.prototype.set = function () {
	var attr = this.attributes;
	
	// Prevent null argument[0] because: null != null. Also prevent Array argument.
	if (typeof arguments[0] == 'object' && arguments[0] === arguments[0] && arguments[0].constructor != Array) {
	
		// Shallow clone to copy objects by reference.
		for (prop in arguments[0]) {
			attr[prop] = arguments[0][prop];
		}
	}
	
	if (typeof arguments[0] == 'string') attr[arguments[0]] = arguments[1];
	return this;
}

Dictionary.prototype.toString = function () {
	return JSON.stringify(this.attributes);
}

module.exports = Dictionary;