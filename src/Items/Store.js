import { createStore } from "vuex"
import fetchdata from "./fetch"

const store =createStore({
    state(){
        return{
            data:fetchdata
        }
    }})

export default store