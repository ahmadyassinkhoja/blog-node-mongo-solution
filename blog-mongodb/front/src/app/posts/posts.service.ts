import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PostService {

      constructor(private http: HttpClient){}

      posts = this.http.get('http://localhost:3000/posts')

      addPost(post){
        // this.posts.push(post)
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
          })
        };
        this.http.post('http://localhost:3000/addPost', post, httpOptions).subscribe( (data) => console.log(data))

        window.location.reload();
      }

      getPost(id){
          let post = this.http.get(`http://localhost:3000/getPost/${id}`)
          if(post){
            return post
          }
      }

      updatePost(post){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
          })
        };
    
        const updateMovieUrl = `http://localhost:3000/updatePost/${post.id}`
    
        this.http.put(updateMovieUrl,post, httpOptions) .subscribe(data => {
          console.log(data);
        });
    

        window.location.reload();
      }

      deletePost(post){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
          })
        };

        const deletePostUrl = `http://localhost:3000/deletePost/${post.id}`
        this.http.delete(deletePostUrl, httpOptions) .subscribe(data => {
          console.log(data);
        });
        

        window.location.reload();
      }
}