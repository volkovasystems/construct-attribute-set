var constructAttributeSet = function constructAttributeSet( attributeSet ){
	/*:
		@meta-configuration:
			{
				"attributeSet:required": "object"
			}
		@end-meta-configuration
	*/

	var attributeObjectSet = { };

	var attributeValue;
	var attribute;
	for( var attributeName in attributeSet ){
		attribute = document.createAttribute( attributeName );
		attribute.nodeValue = attributeValue || "";
		
		attributeObjectSet[ attributeName ] = attribute;
	}

	return attributeObjectSet;
};