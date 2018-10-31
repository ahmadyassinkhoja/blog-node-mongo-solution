import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  get title(){
    return this.postForm.controls.title
  }
  get body(){
    return this.postForm.controls.body
  }

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.postsService.posts.subscribe( (data) => this.posts = data)
  }

  addPost(postForm, photo){
    let newPost = {
      title: postForm.value.title,
      body: postForm.value.body,
      image: '../assets/images/' + photo.files[0].name
    }

    this.postsService.addPost(newPost)
  }

  deletePost(post){
    this.postsService.deletePost(post)
  }

}
