import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code500',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = '错误消息';
  constructor() { }

  ngOnInit() {}

}
