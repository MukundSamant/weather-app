import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {transform} from 'ol/proj';
import {defaults} from 'ol/control';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges, OnInit {
  tileLayer: TileLayer;
  map: Map;
  @Input() mapCenter: number[];

  constructor() {
    this.tileLayer = new TileLayer({
      source: new OSM()
    });
  }

  ngOnInit() {
    this.map = new Map({
      layers: [this.tileLayer],
      loadTilesWhileInteracting: true,
      target: 'map',
      view: new View({
        resolution: 1,
        center: transform([13.4050, 52.5200], 'EPSG:4326', 'EPSG:3857')
      }),
      controls: defaults({
        attribution: false,
        zoom: false,
        rotate: false
      })
    });
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.mapCenter && this.mapCenter) {
      const mapView: View = this.map.getView();
      mapView.setCenter(transform(this.mapCenter, 'EPSG:4326', 'EPSG:3857'));
      mapView.setZoom(10);
    }
  }

}
