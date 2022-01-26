import { createSlice } from "@reduxjs/toolkit";
import LabeledValue from "./InterfaceDonnée";


// interface
// qui represente les données 
const initialState: LabeledValue = {
    arrondissement: {},
    lieuDeTournage: {},
}

const arrondissementSlice = createSlice({
    name: "arrondissement",
    initialState,
    reducers: {
        addArrondissement: (state, { payload }) => {
            state.arrondissement = payload;
        }
    }
})

const lieuDeTournageSlice = createSlice({
    name: "lieuDeTournage",
    initialState,
    reducers: {
        addLieuDeTournage: (state, { payload }) => {
            state.lieuDeTournage = payload;
        }
    }
})

export const { addArrondissement } = arrondissementSlice.actions
export const { addLieuDeTournage } = lieuDeTournageSlice.actions

export const getAllArrondissement = (state: any) => state.arrondissement.arrondissement
export const getAllLieuDeTournage = (state: any) => state.lieuDeTournage.lieuDeTournage

export const lieudetournage = lieuDeTournageSlice.reducer
export const arrondissement = arrondissementSlice.reducer
