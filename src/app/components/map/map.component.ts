import { Component } from '@angular/core';
import { OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = 'yCDRJM5oHLgJvAj419wl'; /* AQUI LA APIKEY DE MAPTILER */
  }

  ngAfterViewInit() {
    const initialState = { lng: 2.177432, lat: 41.382894, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    new Marker({color: "#FF0000"})
      .setLngLat([2.177432,41.382894])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
