import './_app.scss'

import Footer from './modules/Footer/Footer'
import Header from './modules/Header/Header'
import Main from './modules/Main/Main'
import Order from './modules/Order/Order'

function App() {
    return (
        <div className="app">
            <Header />
            <main className="mainSection">
                <Main />
                <Order />
            </main>
            <Footer />
        </div>
    )
}

export default App
