(function (requirejs) {
    "use strict";

    requirejs.config({
        baseUrl: 'rawbase/js/lib',
        paths: {
            jquery: 'jquery-1.10.2.min',
            app: '../app',
            slickgrid: './SlickGrid-2.1',
            jqueryui: './jquery-ui-1.10.3/ui/minified',
            sigma: './sigma',
            d3: './d3'
        },
        shim: {
            'jquery-ui.min': {
                deps: ['jquery']
            },
            'slickgrid/lib/jquery.event.drag-2.2': {
                deps: ['jquery']
            },
            'jquery.openid': {
                deps: ['jquery']
            },
            'jquery.simplemodal.1.4.4.min': {
                deps: ['jquery']  
            },
            'bootstrap.min': {
                deps: ['jquery']
            },
            'bootstrap-select.min': {
                deps: ['bootstrap.min']
            },
            'slickgrid/slick.core': {
                deps: ['jquery','slickgrid/lib/jquery.event.drag-2.2']
            },
            'slickgrid/slick.formatters': {
                deps: ['slickgrid/slick.core']
            },
            'slickgrid/slick.grid': {
                deps: ['slickgrid/slick.core']
            },
            'sigma/sigma.parseGexf': {
                deps: ['sigma/sigma.min']
            },
            'jquery.tipsy' : {
                deps: ['jquery']
            },
            'n3': {
                exports: 'n3'
            },
            'd3/d3': {
                exports: 'd3'
            },
            'd3/d3.geom': {
                deps: ['d3/d3'],
                exports: 'd3.geom'
            },
            'd3/d3.layout': {
                deps: ['d3/d3.geom'],
                exports: 'd3.layout'
            },
        },
    });

    require(['app/application', 'bootstrap.min'], function (Application) {
        var app = new Application();
        app.init();
    });
})(requirejs);