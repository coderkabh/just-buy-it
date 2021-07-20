import React from 'react'

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <Link to="/"><img src= {imgPath} className="home__image" /></Link>
               <div className="home__row">
                   <Product
                    id={2110000001}
                    title="Realme Buds Q in-Ear True Wireless Earbuds (Black)"
                    price={1999}
                    image = 'https://image05.realme.net/general/20200703/1593771000257.jpg'
                    rating={3}
                    />
                   <Product
                   id={2110000002}
                   title="Summerking Portable Compact Evaporator Primo air Cooler with Fan & humidifier for Your Room/Office/belongings (White)"
                   price={10710}
                   image = 'https://kinloindia.com/wp-content/uploads/2021/03/Symphony-Cooler-Siesta-45L.jpg'
                   rating={4}/>
               </div>

               <div className="home__row">
                    <Product
                    id={2110000003}
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
                    price={116790}
                    image = 'https://www.bhphotovideo.com/images/images2500x2500/apple_myd82ll_a_13_3_macbook_pro_with_1604809.jpg'
                    rating={3}/>

                    <Product
                    id={2110000004}
                    title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
                    price={50990}
                    image = 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1605262374/Croma%20Assets/Communication/Wearable%20Devices/Images/8985943736350.png'
                    rating={3}/>

                    <Product
                    id={2110000005}
                    title="New Apple iPhone 12 Mini (64GB) & (128GB)"
                    price={139900}
                    image = 'https://www.gizmochina.com/wp-content/uploads/2020/05/iphone-12-pro-max-family-hero-all-600x600.jpg'
                    rating={3}/>
               </div>

               <div className="home__row">
                    <Product
                    id={2110000005}
                    title="Kadence Frontier Series,Black Semi Acoustic Guitar With Die Cast Keys (Bag,Strap,Strings And 3 Picks Stand)"
                    price={7999}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81vGfXYpTbL._AC_SX425_.jpg'
                    rating={3}/>

                    <Product
                    id={2110000006}
                    title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
                    price={1899}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71%2Bl%2BlWv6vL._AC_SY450_.jpg'
                    rating={3}/>

               </div>

           </div>
        </div>
    )
}

export default Home
