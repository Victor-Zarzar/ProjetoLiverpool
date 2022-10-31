require(["esri/Map","esri/views/MapView"],
function(Map,MapView) {
    const map = new Map({
        basemap: "hybrid"
    });


map.basemap = "topo-vector";

}

