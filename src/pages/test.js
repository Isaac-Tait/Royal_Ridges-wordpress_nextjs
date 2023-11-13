import Header from '../components/Header';
import Footer from '../components/Footer';

import Blog from '../components/Wordpress';
const Test = () => {
  return (
    <div>
      <Header />
      <div className='h-96'>
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Test;
