import React from 'react'
import { IParametersProps, ISettingsForComponentProps } from '../../../types/IProps';
import { useForm, SubmitHandler } from "react-hook-form";

const SettingsForComponent: React.FC<ISettingsForComponentProps> = ({ setParameters }) => {
    //--------------------------------------
    const { register, handleSubmit, formState: { errors } } = useForm<IParametersProps>();
    //--------------------------------------

    const changeParameters: SubmitHandler<IParametersProps> = (data) => {
        if (setParameters) {
            setParameters({
                background: data.background || '#fff',
                color: data.color || '#000',
                size: data.size || '16px',
            })
        }

    }

    return (
        <div>       <div>
            <form onSubmit={handleSubmit(changeParameters)}>
                <input {...register('background')} placeholder="Background" style={{
                    border: '1px solid #fff',
                    color: '#fff'
                }} />
                <input {...register('color')} placeholder="Color" style={{
                    border: '1px solid #fff',
                    color: '#fff'
                }} />
                <input {...register('size')} placeholder="Size" style={{
                    border: '1px solid #fff',
                    color: '#fff'
                }} />
                <button type="submit">Submit</button>
            </form>
        </div></div>
    )
}

export default SettingsForComponent;