import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from '../../store/app.state';
import { addPost } from '../state/posts.action';
import { Post } from '../state/posts.model';

@Component({
  selector: 'app-add-post',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  showDescriptionErrors() {

    if (this.postForm.get('description')?.touched) {
      if (this.postForm.get('description')?.hasError('required')) {
        return 'Description is required';
      } else if (this.postForm.get('description')?.hasError('minlength')) {
        return 'Description must be at least 10 characters long';
      }
    }
    return null;
  }

  onAddPost() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      //this.postForm.reset();

      const post: Post = {
        title: this.postForm.value.title,
        description: this.postForm.value.description,
      };

      console.log(post);
      this.store.dispatch(addPost({post}));
    } else {
      this.postForm.markAllAsTouched();
    }
  }

  postForm!: FormGroup;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
}
