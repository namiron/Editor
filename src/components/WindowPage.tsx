import React from 'react'
import Container from './Container';
import Navigation from './windowModules/Navigation';
import Settings from './windowModules/Settings';
import Header from './windowModules/Header';
import Footer from './windowModules/Footer';

const WindowPage: React.FC = () => {

    return (
        <div>
            <div className="wrapper">
                <header className="header">
                    <Header />
                </header>
                <main className="main">
                    <Navigation />
                    <Container />
                    <Settings />
                </main>
                <footer className="footer">
                    <Footer />
                </footer>

            </div>
        </div>
    )
}

export default WindowPage;