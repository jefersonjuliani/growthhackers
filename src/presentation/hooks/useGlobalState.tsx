import { useReducer } from "react"
import storage from "local-storage-fallback"

type State = {
    expand: string;
}

export type Action =
    | { type: 'EXPAND', payload: string };


export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "EXPAND":
            storage.setItem("expand", action.payload)
            return {
                expand: action.payload,
            }
        default: {
            return state
        }
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        expand: JSON.parse(storage.getItem("expand") || '{}')
    })

    return { state, dispatch }
}

export default useGlobalState
