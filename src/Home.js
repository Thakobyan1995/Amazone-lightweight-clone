import React from 'react';
import './Home.css';
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img 
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
              className="home__image"
              alt=""
            />
            <div className="home__row">
              <Product
                id="4694321567"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business paperback" 
                price={11.96}
                rating={5}
                image={'https://cdn11.bigcommerce.com/s-5r4ioz00xs/images/stencil/1000x1000/products/122/435/The-Lean-Startup__15170.1551257080.jpg?c=2'}
              />
              <Product
                id="46211226"
                title="LG K7 4G K330 LTE, Android, 8GB, No-Contract T-Mobile Phone, Black" 
                price={79.06}
                rating={4}
                image={'https://images-na.ssl-images-amazon.com/images/I/71Scxad9OCL._AC_SX569_.jpg'}
              />
            </div>  
            <div className="home__row">
              <Product
                id="46847622"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver" 
                price={458}
                rating={5}
                image={'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg'}
              />
              <Product
                id="46155412"
                title="HP 63 | Ink Cartridge | Black | F6U62AN" 
                price={23.06}
                rating={4}
                image={'https://images-na.ssl-images-amazon.com/images/I/71-n%2B9VW%2BeL._AC_SL1500_.jpg'}
              />
              <Product
                id="95623265"
                title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver" 
                price={21.99}
                rating={5}
                image={'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg'}
              />
            </div>
            <div className="home__row">
            <Product
                id="5456421564"
                title="AmazonBasics 48-Piece General Household Home Repair and Mechanic's Hand Tool Kit Set" 
                price={40.99}
                rating={4}
                image={'https://images-na.ssl-images-amazon.com/images/I/810KeTS5OPL._AC_SL1500_.jpg'}
              />
            </div>
        </div>

    )
}

export default Home


