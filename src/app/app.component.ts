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

playDrumSoundOne() {
  var audio = new Audio('../assets/sounds/drumSound1.wav');
  audio.play();
}
playDrumSoundTwo() {
  var audio = new Audio('../assets/sounds/drumSound2.wav');
  audio.play();
}
playDrumSoundThree() {
  var audio = new Audio('../assets/sounds/drumSound3.wav');
  audio.play();
  }
playDrumSoundFour() {
  var audio = new Audio('../assets/sounds/drumSound4.wav');
  audio.play();
}
playDrumSoundFive() {
  var audio = new Audio('../assets/sounds/drumSound5.wav');
  audio.play();
}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    
    if (event.keyCode === KEY_CODE.q) {
      this.playDrumSoundOne();
    }
    if (event.keyCode === KEY_CODE.w) {
      this.playDrumSoundTwo();
    }
    if (event.keyCode === KEY_CODE.e) {
      this.playDrumSoundThree();
    }
    if (event.keyCode === KEY_CODE.r) {
      this.playDrumSoundFour();
    }
    if (event.keyCode === KEY_CODE.t) {
      this.playDrumSoundFive();
    }
  }
}