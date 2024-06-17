
import React from "react"
import { IParametersProps } from "../types/IProps"
import { ITypeToHookParameters } from "../types/ITypes"

export const UseParametersStateHook: ITypeToHookParameters = () => {

    const [parameters, setParameters] = React.useState<IParametersProps>({})

    return [parameters, setParameters]

}