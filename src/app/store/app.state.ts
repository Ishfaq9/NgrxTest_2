import { counterReducer } from "../Counter/state/counter.reducer";
import { CounterState } from "../Counter/state/counter.state";
import { PostsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";

export interface Appstate {
    counter: CounterState;
    posts: PostState;
}

export const appReducers = {
    counter: counterReducer,
    posts: PostsReducer
}