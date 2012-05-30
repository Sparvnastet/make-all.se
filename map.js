var options = {
    projection: new OpenLayers.Projection("EPSG:900913"),
    displayProjection: new OpenLayers.Projection("EPSG:4326")
};

var map = new OpenLayers.Map('map', options);

var mapnik = new OpenLayers.Layer.OSM("OpenStreetMap (Mapnik)");

var size = new OpenLayers.Size(100,68);
var offset = new OpenLayers.Pixel(-(size.w/2), -(size.h/2));
var icon = new OpenLayers.Icon('makeall-small.png', size, offset);
var poi = new OpenLayers.Layer.Markers( "Markers" );

poi.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(18.119309,59.332492)
                                    .transform(map.displayProjection, map.projection),
                                    icon.clone()));

map.addLayers([mapnik, poi]);

var area = 0.001;

map.zoomToExtent(new OpenLayers.Bounds(18.119309-area,59.332492-area,
                                       18.119309+area,59.332492+area)
                 .transform(map.displayProjection, map.projection));
