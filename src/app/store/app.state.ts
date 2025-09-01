import { counterReducer } from "../Counter/state/counter.reducer";
import { CounterState } from "../Counter/state/counter.state";
import { PostsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";
import { SharedReducer } from "../shared/components/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/components/shared.selector";
import { SharedState } from "../shared/components/shared.state";

export interface Appstate {
    counter: CounterState;
    posts: PostState;
    [SHARED_STATE_NAME]: SharedState;
}

export const appReducers = {
    counter: counterReducer,
    posts: PostsReducer,
      [SHARED_STATE_NAME]: SharedReducer,
}