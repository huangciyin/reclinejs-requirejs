define(['./core','./view.flot'],
    function (recline,recline) {
        recline.View = recline.View || {};
        recline.View.Graph = recline.View.Flot;
        recline.View.GraphControls = recline.View.FlotControls;
        return recline
    });