import React from "react"
import useGlobalState from "@/presentation/hooks/useGlobalState"
import Context from "@/presentation/context"

type Props = {
    children: React.ReactNode
}

const GlobalStateProvider = ({ children }: Props) => {
    return (
        <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
    )
}

export default GlobalStateProvider
