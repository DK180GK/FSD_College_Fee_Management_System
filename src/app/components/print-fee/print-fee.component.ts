import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-fee.component.html',
  styleUrls: ['./print-fee.component.css']
})
export class PrintPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
printPage(){
  window.print()
}
}