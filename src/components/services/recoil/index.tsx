import React from "react";
import { atom ,selector} from "recoil";
//atom is variable that store data
//selector is object to get data from atom 
//useRecoilstate is state to manipulate data from atom<setter> like useState in react  
//useRecoilValue is to show data from selector or atom,

let counterAtom=atom({
    key:'counterAtom',
    default:0
})

const getCounterAtomVal=selector({
    key:'getCounterAtom',
    get:(({get})=>{
        let getCounterValue=`counter : ${get(counterAtom)} times`
            return getCounterValue
    })
})
export {
    getCounterAtomVal,
    counterAtom
}