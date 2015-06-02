requirejs.config({
    baseUrl: '.',
    waitSeconds: 0,
    paths: {
        app: 'app',
        lib: 'lib'
    }
});


define({
    app : {
        string : 'Test.', 
        bool : true,
        floatingPoint: 0.1,
        IntNum: 0110,
        selectorTrigger:'.some-selector'
    }
});