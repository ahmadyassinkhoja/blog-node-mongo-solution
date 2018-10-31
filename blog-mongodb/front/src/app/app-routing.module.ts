import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

import { ReactiveFormsModule } from '@angular/forms';

// import { MovieDetailComponent } from './movie-detail/movie-detail.component'

// import { MoviesService } from './movies/movies.service'

import { PostDetailComponent } from './post-detail/post-detail.component'

import { PostService } from './posts/posts.service'

const routes: Routes = [
    { path: '', component: PostsComponent },
    { path: 'post/:id', component: PostDetailComponent }
]


@NgModule({
    declarations:[
        PostsComponent,
        PostComponent,
        PostDetailComponent
    ],
    imports:[
        RouterModule.forRoot(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[RouterModule],
    providers:[PostService]
})
export class AppRoutingModule {}