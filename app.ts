	var support = {
	    'os_Windows': isSupported('Windows'),
	    'os_iOS': isSupported('iOS'),
	    'os_Android': isSupported('Android'),
	}
	
	function isSupported(os) {
	    return Math.random() >= 0.5;
}