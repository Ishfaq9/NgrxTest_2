import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './Counter/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export const routes: Routes = [
    {
        path :'',
        component: HomeComponent
    },
    {
        path: 'counter',
        loadChildren: () => import('./Counter/counter.module').then(m => m.counterModule)
    }
    ,
    {
        path: 'posts',
        loadChildren: () => import('./posts/post.module').then(m => m.postModule)
        
    }
    ,
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthRoutes)
    }
];
