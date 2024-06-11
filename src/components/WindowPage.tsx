import React from 'react'
import Container from './Container';
import Navigation from './windowModules/Navigation';
import Settings from './windowModules/Settings';
import Header from './windowModules/Header';
import Footer from './windowModules/Footer';
import wrapper from '../modules/wrapper.module.scss'


const WindowPage: React.FC = () => {

    return (
        <div>
            <div className={wrapper.wrapper}>
                <header className={wrapper.header}>
                    <Header />
                </header>
                <main className={wrapper.main}>
                    <Navigation />
                    <Container />
                    <Settings />
                </main>
                <footer className={wrapper.footer}>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default WindowPage;