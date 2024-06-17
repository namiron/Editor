import React from 'react'
import set from '../../../modules/settings.module.scss'
import { ISettingsProps } from '../../../types/IProps'
import SettingsForComponent from './SettingsForComponent'


const Settings: React.FC<ISettingsProps> = ({ setParameters }) => {
    const block = true
    return (
        <div className={set.settings} >{
            block ? <SettingsForComponent setParameters={setParameters} />
                :
                <p>Settings</p>
        }</div>
    )
}

export default Settings;