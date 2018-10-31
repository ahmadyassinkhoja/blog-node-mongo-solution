import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../posts/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostService) { }

  index
  id
  post

  ngOnInit() {
    this.index = this.route.params
    this.id = this.index.value.id
    this.postsService.getPost(this.id).subscribe( (data) => this.post = data)
  }

  updatePost(post){
    this.postsService.updatePost(post)
  }

}
