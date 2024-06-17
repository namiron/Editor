
export interface IParametersProps {
    background?: string;
    color?: string;
    size?: string;
    border?: string;
}


export interface WithSetParameters {
    setParameters: React.Dispatch<React.SetStateAction<IParametersProps>>;
}

export interface IBodyProps {
    parameters: IParametersProps;
    setParameters: React.Dispatch<React.SetStateAction<IParametersProps>>;
    children?: React.ReactNode;
}

export interface IContentBlockProps extends WithSetParameters {
    parameters: IParametersProps;
    children?: React.ReactNode;
}


export interface ISettingsProps extends WithSetParameters { }

export interface ISettingsForComponentProps extends Partial<WithSetParameters> { }
