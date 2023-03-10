import Quotes from '../../components/quotes';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function FirstPost() {
    return(
    <div className=" bg-fuchsia-200">
        <Header />
        <Quotes />
        <div className="grid sm:grid-cols-3 gap-4 mx-2 my-2"> 
            <div className=""><img src="/CHQuote.png" className='mx-auto shadow rounded' alt='unlicenced calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson '></img></div>
            <div className=""><img src="/CHQuote.png" className='mx-auto shadow rounded' alt='unlicenced calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson '></img></div>
            <div className=""><img src="/CHQuote.png" className='mx-auto shadow rounded' alt='unlicenced calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson '></img></div>
            <div className=""><img src="/CHQuote.png" className='mx-auto shadow rounded' alt='unlicenced calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson '></img></div>
        </div>
        <Footer />
    </div> 
    );
  }
  