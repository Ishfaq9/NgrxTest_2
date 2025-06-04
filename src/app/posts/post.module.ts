import { Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostListComponent } from "./post-list/post-list.component";

export const postModule: Routes = [
    {
      path: '',
      component: PostListComponent,
      children: [
        { path: 'add', component: AddPostComponent },
        
        {
          path: 'edit/:id',
          component: EditPostComponent,
        },
      ],
    },
  ];