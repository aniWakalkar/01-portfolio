import React from 'react';
import Navbar from './components/Navbar';
import Middle from './components/Middle';
import Footer from './components/Footer';
const App = () => {
    return (
        <>
        <div className="font-sans px-16">
            <Navbar />
            <hr/>
            <Middle />
            {/* Add other sections/components */}
            <Footer />
        </div>
        </>
    );
}

export default App;
