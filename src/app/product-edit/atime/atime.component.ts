import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-atime',
  templateUrl: './atime.component.html',
  styleUrls: ['./atime.component.scss']
})
export class AtimeComponent implements OnInit {

  @Input() startTime:Date;
  @Input() endTime:Date;
  @Output() removeOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  remove(){
    this.removeOut.emit(this);
  }
}
