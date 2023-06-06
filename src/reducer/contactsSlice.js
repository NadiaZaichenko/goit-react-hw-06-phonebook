import { createSlice, nanoid } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    contacts : [],
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
           reducer(state, action) {
            state.contacts.push(action.payload);
           } ,
           prepare(data) {
            return { 
                payload: {
                    id: nanoid(),
                    name: data.name,
                    number: data.number,
                },
             };
           },
        },
        deleteContact(state, action) {
           state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        },
}})

const persistConfig ={
    key: 'contacts',
    storage,
}
export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer )

export const {addContact, deleteContact} = contactSlice.actions;
    
export const getContactItems = state => state.contacts.items;