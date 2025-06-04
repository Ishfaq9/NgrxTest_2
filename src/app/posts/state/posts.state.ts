import { Post } from "./posts.model";

export interface PostState {
    posts: Post[];
}

export const initailState : PostState = {
    posts: [
        { id: 1, title: 'Post 1', description: 'Content of Post 1' },
        { id: 2, title: 'Post 2', description: 'Content of Post 2' },
        { id: 3, title: 'Post 3', description: 'Content of Post 3' },
        { id: 4, title: 'Post 4', description: 'Content of Post 4' },
        { id: 5, title: 'Post 5', description: 'Content of Post 5' }
    ],

}