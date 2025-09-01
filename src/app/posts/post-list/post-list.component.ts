import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../state/posts.model';
import { getPosts } from '../state/posts.selector';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { deletePost } from '../state/posts.action';

@Component({
    selector: 'app-post-list',
    imports: [CommonModule,RouterModule],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css'
})
export class PostListComponent {

    posts!: Observable<Post[]>;
    constructor(private store:Store<Appstate>) {}
    
    ngOnInit() {
    this.posts = this.store.select(getPosts );
    }

    onDelete(id: number ) {
        if(confirm("Are you sure you want to delete this post?")) {
            this.store.dispatch(deletePost({id}));
        }
    }

}
