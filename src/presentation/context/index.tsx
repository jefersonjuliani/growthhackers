import { createContext } from "react"
import { Action } from '@/presentation/hooks/useGlobalState';

export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
}

export interface StateContext {
  expand: string;
}

const defaultState: StateContext = { expand: "false" };

const Context = createContext<Store>({ state: defaultState, dispatch: ()=>{} });

export default Context

