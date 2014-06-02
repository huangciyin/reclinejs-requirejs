define(['core', './backend.csv','./backend.dataproxy','backend.memory','./model','./view.flot','./view.graph',
            './view.grid','./view.map','./view.multiview','./view.slickgrid','./view.timeline','./view.facetviewer',
            './widget.field','./widget.filtereditor','./widget.pager','./widget.queryeditor','./widget.valuefilter'],
function (recline,R_Backend_CSV,R_Backend_DataProxy,R_Backend_Memory,R_Model,R_View_Flot,R_View_Graph,R_View_Grid,R_View_Map,
          R_View_Multiview,R_View_Slickgrid,R_View_Timeline,R_View_Facetviewer,R_View_Fields,R_View_Filtereditor,
          R_View_Pager,R_View_Queryeditor,R_View_Valuefilter) {

    recline.Backend = recline.Backend ||{};
    recline.Backend.CSV = R_Backend_CSV;
    recline.Backend.Dataproxy = R_Backend_DataProxy;
    recline.Backend.Memory = R_Backend_Memory;
    recline.Model = R_Model;
    recline.View = R_View_Flot;

    return recline
});
