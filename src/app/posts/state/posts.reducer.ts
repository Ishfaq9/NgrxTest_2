import { createReducer, on, State } from "@ngrx/store";
import { initailState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.action";

export function PostsReducer(state: any, action: any) {
    return _PostsReducer(state, action);
}
const _PostsReducer = createReducer(
    initailState, 
    on(addPost, (state, action) => {
        let posts = { ...action.post };
        posts.id = (state.posts.length + 1);
        console.log(posts);
        return {
          ...state,
          posts: [...state.posts, posts],
        };

    })
    ,
    on(updatePost, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
          return action.post.id === post.id ? action.post : post;
        });
    
        return {
          ...state,
          posts: updatedPosts,
        };
    })  
    ,on(deletePost, (state, {id}) => {
        const updatedPosts = state.posts.filter((post) => post.id != id);
        return {
          ...state,
          posts: updatedPosts,
        };
    })
        
);