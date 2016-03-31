var jQuery = {
    version: 1.19,
    fn: {}
};

(function defineType($) {
    
    if( $.version < 1.15 )
        throw 'Plugin requires jQuery version 1.15+'
        
    $.fn.myPlugin = function() {
        // my plugin code
    }
    
    
})(jQuery)