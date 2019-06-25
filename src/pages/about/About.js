import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Facts from '../../components/facts/Facts';
import Footer from '../../components/footer/Footer';
import newsImg1 from '../../style/images/5cc4a388940ab.jpeg';
import newsImg2 from '../../style/images/e5faaa9d-los-nominados-de-premios.jpg';
import tourImg from '../../style/images/album-black-classic-167092_burned.png';
const About = () => {
  return (
    <React.Fragment>
      <Landing />
      <Countdown />
     
      <div className='about-tour'>
        <div className='about-tour-content'>
          <div className='content-header '>
            <h1>Know what you love</h1>
            <p>
              get cool stuff like your own music charts, new music
              recommendations, and a big ol’ community of other music lovers.
            </p>
          </div>
          <div className='content-list'>
            <div className='history-tl-container'>
              <ul className='tl'>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>Explore Your Listening</div>
                  <div className='item-detail'>you can discover things you never knew about your listening habits</div>
                </li>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>Discover New Music</div>
                  <div className='item-detail'>We make discovery easy by recommending things </div>
                </li>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>
                  Meet Your Musical Soulmates
                  </div>
                  <div className='item-detail'>Music’s a lot more fun when you’re sharing it with someone. </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-tour-img'>
          <img src={tourImg} alt='' />
        </div>
      </div>
      <Facts />
      <div className='about'>
        <div className='about-content '>
          <h1>About Mixtape</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa,
            odio tempore hic eveniet aut unde qui blanditiis fugiat, a incidunt
            natus quia. Maxime odit magni voluptas debitis vero at alias
            delectus temporibus sed? Aliquam, esse. Reprehenderit, blanditiis
            commodi consequatur veritatis ea, ipsa tempore corporis voluptates
            quam deleniti laboriosam ab.
          </p>
          <button>
            <Link to='/' className='about-content-link'>
              <p>Home</p>
            </Link>
          </button>
        </div>
      </div>
      <div className='about-news container'>
        <h1>Latest News</h1>
        <div className='news-box'>
          <div className='news-box-img'>
            <img src={newsImg1} alt='' />
          </div>
          <div className='news-box-content'>
            <p>
              <span>Creative</span> | By Joe Lynch
            </p>
            <p>2019 Billboard Music Awards Winners: The Complete List</p>
            <p>
              <small>
                The 2019 Billboard Music Awards hit the MGM Garden Arena in Las
                Vegas on May 1. With Kelly Clarkson hosting and Cardi B leading
                the nominees with 21 noms in 18 categories{' '}
              </small>
            </p>
            <button>
              <a
                href='https://www.billboard.com/articles/news/awards/8509655/billboard-music-awards-2019-winners-list'
                target='_blank' rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </button>
          </div>
        </div>
        <div className='news-box'>
          <div className='news-box-content'>
            <p>
              <span>Creative</span> | By Denise Warner
            </p>
            <p>Here Are All the Winners From the 2019 MTV Movie & TV Awards</p>
            <p>
              <small>
                It's time for the 2019 MTV Movie and TV Awards. The ceremony
                honors performances on both the big and small screen and much
                more. Hosted by actor Zachary Levi, the show was filmed on June
                15, but airs Monday, June 17.
              </small>
            </p>
            <button>
              <a
                href='https://www.billboard.com/articles/news/awards/8509655/billboard-music-awards-2019-winners-list'
                target='_blank' rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </button>
          </div>
          <div className='news-box-img'>
            <img src={newsImg2} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
