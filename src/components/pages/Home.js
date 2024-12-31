import React from 'react'
import CardGamer from '../cardGamer/CardGamer.js'
import Cards from '../cards/Cards.js'
import Hello from '../Hello.js'
import Tv from '../tv/Tv.js'
import Compteur from '../compteur/Compteur.js'
import Time from '../time/Time.js'
import InputRef from '../inputRef/InputRef.js'
import Form from '../form/Form.js'
import ToDo from '../toDo/toDo.js'
import ButtonParent from '../../ButtonParent.js'
import ProductList from '../../ProductList.js'
import CardsProducts from '../cardsProducts/CardsProducts.js'
import CardsBuddies from '../buddies/Buddies';


function Home() {
    const products = [
        { id: 1, name: 'iPhone 14 pro', price: 1400, stock: true },
        { id: 2, name: 'iPhone 15 pro max', price: 2400, stock: false },
        { id: 3, name: 'Samsung Galaxy S20', price: 1200, stock: true },
        { id: 4, name: 'Sony Playstation 5', price: 500, stock: false },
        { id: 5, name: 'Nintendo Switch', price: 400, stock: true },
        { id: 6, name: 'LG Oled 55"', price: 1400, stock: true },
        { id: 7, name: 'iPhone 14 pro', price: 1400, stock: true },
        { id: 8, name: 'iPhone 15 pro max', price: 2400, stock: false },
        { id: 9, name: 'Samsung Galaxy S20', price: 1200, stock: true },
        { id: 10, name: 'Sony Playstation 5', price: 500, stock: false },
        { id: 11, name: 'Nintendo Switch Pro', price: 400, stock: true },
        { id: 12, name: 'LG Oled 65"', price: 1400, stock: true },
    ]

    return (
        <>
            <h1>HOME</h1>

            <p>Hello from Home</p>


            <h1>Les props </h1>

            <CardGamer
                nom="Karla"
                points={100}
                isOnline={true}
            />

            <CardGamer
                nom="Yacine"
                points={80}
                isOnline={false}
                inventory="[marteau]"
            />

            <CardGamer
                nom="Farah"
                points={90}
                isOnline={true}
            />

            <Hello name="Asma" />
            <Hello name="Arthur" />
            <Hello name="Sami" />
            <Hello name="Maimouna" />
            <Hello name="Mohammed" />

            <Cards />
            <h1>TV 1</h1>
            <Tv
                channel={2}
                volume={30}
                isOn={true}
            />
            <h1>TV 2</h1>
            <Tv
                channel={20}
                volume={130}
                isOn={true}
            />
            <h1>TV 3</h1>
            <Tv
                channel={2}
                volume={30}
                isOn={false}
            />



            <h1>Les hooks</h1>

            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>useRef</li>
            </ul>

            <h2>useState</h2>
            <Compteur />

            <h2>useEffect</h2>
            <Time />

            <h2>useRef</h2>
            <InputRef />

            <Form />

            <h2>Petite manip dom</h2>

            <ToDo />

            <ButtonParent />

            <ProductList products={products} />

            {/* <CardsProducts /> */}

            <h1>Binomes API</h1>

            <h2>Groupe 1 : Karla & Maimouna : Entertainement</h2>
            <h2>Groupe 2 : Asma & Yacine : Livres</h2>
            <h2>Groupe 3 : Mahmoudou & Arthur</h2>
            <h2>Groupe 4 : Ilyas & Mario</h2>
            <CardsBuddies />
        </>
    )
}

export default Home