import { GET_POSTS } from "../actions/post.action";

const initialState = {}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
        // return tout ce qu'il y  a dans le get qu'on  a fait dans post.action
        default:
            return state
        // sinon tu return le state qui est vide => initialState
    }
}