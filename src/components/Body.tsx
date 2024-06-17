import React from 'react';
import bodyStyle from '../modules/body.module.scss';
import ContentBlock from './windowModules/ContentBlock';
import { IBodyProps } from '../types/IProps';

const Body: React.FC<IBodyProps> = ({ parameters, setParameters, children }) => {
    return (
        <div className={bodyStyle.body} style={{
            background: 'rgb(46, 46, 46)',
            color: '#000',
        }}>
            <ContentBlock parameters={parameters} setParameters={setParameters}>
                {children}
            </ContentBlock>
        </div>
    );
};

export default Body;
