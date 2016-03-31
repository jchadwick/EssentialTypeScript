interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}


var $ = <jQuery>function(selector: string) {
    // Find DOM element
}

$.version = 1.18

var container = $('#container');
