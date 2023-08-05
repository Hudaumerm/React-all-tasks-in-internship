import { configureStore } from '@reduxjs/toolkit'
import  Slice from './Slice'


export const store=configureStore({
    reducer:{CounterRedux:Slice,MessageRedux:Slice,OddRedux:Slice,}
})