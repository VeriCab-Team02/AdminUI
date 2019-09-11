import { commonReducer } from './ReducerCommon'
import { createStore } from 'redux'

export const inputField={
    type:'INPUT_FIELD',
    payLoad:''
}

export const dataField={
    type:'DATA_FIELD',
    payload:{},
}

const store = createStore(commonReducer)

export default store