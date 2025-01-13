import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './data.js'
import _ from 'lodash';

let dataCopy = _.cloneDeep(data)
dataCopy.map((a, i)=>
    dataCopy[i].count = 0
)
console.log(dataCopy)




let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = 'jungyn'
        },
        addAge(state, action){
            state.age += action.payload  //payload는 소포
        }
    }
})
// useState()와 유사
let shoes = createSlice({
    name : 'shoes',
    initialState : dataCopy,
    reducers : {
        addCount(state, action){
            console.log('aaa', state[0].title, action.payload)
            state[action.payload].count += 1
        }
    }
});


export let { changeName, addAge } = user.actions;  //destructuring문법 
export let { addCount } = shoes.actions;  //destructuring문법 

export default configureStore({
    reducer : {
        shoes : shoes.reducer,
        user : user.reducer
    }
})