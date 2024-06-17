import React, { ReactElement } from 'react';
import { IContentBlockProps } from '../../types/IProps';

const ContentBlock: React.FC<IContentBlockProps> = ({ parameters, setParameters, children }) => {

    const childElement = React.isValidElement(children)
        ?
        React.cloneElement(children as ReactElement<any>, { parameters, setParameters })
        :
        null;

    return (
        <div className='contentBlock' style={{
            background: '#fff',
            color: '#000',
            height: '100%',
        }}>
            {childElement}
        </div>
    );
}

export default ContentBlock;
