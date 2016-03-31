interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}

var $ = <jQuery>function(selector) {
    // Find DOM element
}

$.version = 1.12;

var element = $('#container');
element.