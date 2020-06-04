import {createStore} from "redux";
import reducer from "./reducer";
import {createWrapper} from 'next-redux-wrapper'

export const makeStore = () => {
    const store = createStore(reducer)
    return store
  }

export const wrapper = createWrapper(makeStore, { debug: true })

