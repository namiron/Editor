import React from 'react'
import Body from './Body';
import Navigation from './windowModules/Navigation';
import Settings from './windowModules/settings/Settings';
import Header from './windowModules/Header';
import Footer from './windowModules/Footer';
import wrapper from '../modules/wrapper.module.scss'
import { UseParametersStateHook } from '../hooks/hooks';


const WindowPage: React.FC = () => {
    //------------------------------------------
    const [parameters, setParameters] = UseParametersStateHook()
    console.log('parameters', parameters);

    //------------------------------------------


    return (
        <div>
            <div className={wrapper.wrapper}>
                <header className={wrapper.header}>
                    <Header />
                </header>
                <main className={wrapper.main}>
                    <Navigation />
                    <Body parameters={parameters} setParameters={setParameters} />
                    <Settings setParameters={setParameters} />
                </main>
                <footer className={wrapper.footer}>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default WindowPage;