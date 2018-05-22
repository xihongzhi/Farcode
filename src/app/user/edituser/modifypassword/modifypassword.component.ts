import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modifypassword',
  templateUrl: './modifypassword.component.html',
  styleUrls: ['./modifypassword.component.scss']
})
export class ModifypasswordComponent implements OnInit {
 @Input()Parameter:any;
  constructor() { }

  ngOnInit() {
  }

}
