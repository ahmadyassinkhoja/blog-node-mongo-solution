import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() post
  @Output()deleterequest = new EventEmitter()

  ngOnInit() {
  }

  deleteRequest(post){
    this.deleterequest.emit(post)
  }

}
