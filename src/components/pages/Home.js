import React from 'react'
import CardGamer from '../cardGamer/CardGamer.js'
import Hello from '../Hello.js'
import Cards from '../cards/Cards.js'
import Tv from '../tv/Tv.js'
import Compteur from '../compteur/Compteur.js'
import Time from '../time/Time.js'
import InputRef from '../inputRef/InputRef.js'
import Form from '../form/Form.js'
import ToDo from '../toDo/toDo.js'

function Home() {
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
        </>
    )
}

export default Home