import React from 'react'

//Styles
import './Home.css'

function Home() {
  return (
    <section className="home__container">
        <img src="/src/assets/images/PizzaHome.png" alt="Pizza Home" className="pizza_home"/>
        <div className="home__container__info">
            <h1>Welcome to Pizza Zima!</h1>
            <h2>Delicious Pizzas Made to Perfection</h2>
            <p>
                At Pizza Zima, we pride ourselves on crafting mouthwatering pizzas that will satisfy your cravings.
                Whether you're a fan of classic Margherita, loaded Meat Lovers, or adventurous BBQ Chicken, we have the perfect pizza for you.
                Our pizzas are made with the finest ingredients, hand-tossed dough, and a blend of flavorful sauces and cheeses.
                Each bite is a delightful explosion of taste that will leave you wanting more.
            </p>
            <button>Order Now</button>
        </div>
    </section>
  )
}

export default Home