import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import quoteArr from './Quote.json'
import './App.css'

function App() {
    return (
        <>
            <Header />
            
            {quoteArr.map((quote,index)=>{
                return <MainBody key={index} quote={quote.quote} author={quote.author}/>
            })}
            
            <Footer />
        </>
    );
}

export default App
