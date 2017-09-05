import { Component, OnInit, HostListener } from '@angular/core';
declare var jquery:any;
declare var $ :any;

export enum KEY_CODE {
  q = 81,
  w = 87,
  e = 69,
  r = 82,
  t = 84,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  playDrumSound(items: number) {
    let audio;

    switch(items) {
      case 1:
        audio = new Audio('./assets/sounds/drumSound1.wav');
        break;
      case 2:
        audio = new Audio('./assets/sounds/drumSound2.wav');
        break;
      case 3:
        audio = new Audio('./assets/sounds/drumSound3.wav');
        break;
      case 4:
        audio = new Audio('./assets/sounds/drumSound4.wav');
        break;
      case 5:
        audio = new Audio('./assets/sounds/drumSound5.wav');
        break;
    }
    audio.play();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch(event.keyCode) {
      case KEY_CODE.q:
        this.playDrumSound(1);
        break;
      case KEY_CODE.w:
        this.playDrumSound(2);
        break;
      case KEY_CODE.e:
        this.playDrumSound(3);
        break;
      case KEY_CODE.r:
        this.playDrumSound(4);
        break;
      case KEY_CODE.t:
        this.playDrumSound(5);
        break;
    }
  }
}