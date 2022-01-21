import axios from 'axios'
import { Dispatch } from 'redux'

// table des matière de toute les actions 
export const GET_POSTS = "GET_POSTS"
/* 
1)recuperation de la bdd
2) puis on met les données recuperé dans le reducer
3) l'action s'appelle GET_POSTS puis dans le reducer on va faire un switch
 et lui dire quand tu reçois GET_POSTS avec t'elle donné tu feras le
 comportement suivant.
 4) payload indique ce que l'on transporte qu'elles données */



export const getPosts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:3000/arrondissementContour')
            console.log(res.data)
            dispatch({
                type: GET_POSTS, payload: res.data
            })
        } catch (err) {
            return console.log(err)
        }
    }
}