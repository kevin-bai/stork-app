import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() rating:number;
  public starsList:boolean[];
  // emptyStars:number[];
  
  constructor() { }

  ngOnInit() {
    console.log(`rating:${this.rating}`)
    this.getStarNum();
  }
  getStarNum():void{
    this.starsList=[];
    for (let index = 0; index <5; index++) {
      this.starsList.push(this.rating>index ? true:false)
    }
    console.log(this.starsList)
  }

}
