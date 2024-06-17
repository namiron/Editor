import { IParametersProps } from "./IProps";

export type ITypeToHookParameters = () => [IParametersProps, React.Dispatch<React.SetStateAction<IParametersProps>>];
