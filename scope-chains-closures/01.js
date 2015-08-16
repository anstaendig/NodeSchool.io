function foo() {
	var bar;
	quux = 2;
	function zip() {
		bar = true;
		var quux;
	}
	return zip;
}