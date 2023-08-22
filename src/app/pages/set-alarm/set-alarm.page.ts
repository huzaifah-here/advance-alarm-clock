import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-set-alarm',
  templateUrl: './set-alarm.page.html',
  styleUrls: ['./set-alarm.page.scss'],
})
export class SetAlarmPage implements OnInit {
  selectedHours: number = 6;
  selectedMinutes: number = 0;
  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  return(){
    this.nav.back();
  }

  saveAlarm(){
    this.nav.back();
  }
  onHoursSliderChange(event: CustomEvent) {
    this.selectedHours = event.detail.value;
  }

  onMinutesSliderChange(event: CustomEvent) {
    this.selectedMinutes = event.detail.value;
  }

  private hourIncrementInterval: any;
  private minuteIncrementInterval: any;

  onHourTouchStart() {
    this.hourIncrementInterval = setInterval(() => {
      this.selectedHours = (this.selectedHours + 1) % 13; // Increment hours and loop between 1 and 12
    }, 200);
  }

  onHourTouchEnd() {
    clearInterval(this.hourIncrementInterval);
  }

  onMinuteTouchStart() {
    this.minuteIncrementInterval = setInterval(() => {
      this.selectedMinutes = (this.selectedMinutes + 1) % 60; // Increment minutes and loop between 0 and 59
    }, 200);
  }

  onMinuteTouchEnd() {
    clearInterval(this.minuteIncrementInterval);
  }

}
