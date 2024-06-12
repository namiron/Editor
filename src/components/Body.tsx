
import React from 'react'
import bodyStyle from '../modules/body.module.scss'
import ContentBlock from './windowModules/ContentBlock';


const Body: React.FC = () => {
    return (
        <div className={bodyStyle.body} style={{
            background: 'rgb(46, 46, 46)',
            color: '#000',
        }}><ContentBlock /></div>
    )
}

export default Body;