import {Component, OnInit, Input, AfterContentInit, AfterViewInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  providers: [LoggerService]
})
export class StarsComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() rating: number;
  starsList: boolean[];

  constructor(public logger: LoggerService) {
  }

  ngOnInit() {
    console.log(`onInit`)
    this.getStarNum();
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  getStarNum(): void {
    this.starsList = [];
    for (let index = 0; index < 5; index++) {
      this.starsList.push(this.rating > index);
    }
    // console.log(this.starsList);
  }

  getName(el): void {
    console.log(el);
  }
}
