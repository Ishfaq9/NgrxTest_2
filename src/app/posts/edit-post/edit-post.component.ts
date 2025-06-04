import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appstate } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../state/posts.model';
import { getPostById } from '../state/posts.selector';
import { updatePost } from '../state/posts.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {

  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<Appstate>,private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '0', 10);
      this.postSubscription = this.store
        .select(getPostById(id))
        .subscribe((data) => {
          this.post = data!;
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title,
      description,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }


}
