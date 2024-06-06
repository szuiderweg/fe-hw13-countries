import './App.css';
import worldMap from './assets/world_map.png';
import {useState} from "react";
import axios from "axios";

function App() {
    const [foundCountries, setFoundCountries] = useState([]);
    async function getAllCountries(){
        try{
            const result = await axios.get('https://restcountries.com/v3.1/all?fields=name,population');
            //! the restcountries API is so slow, does not respond to get all countries request, it times out.
            // a query for a single country sometimes yields a response
            //const result = await axios.get('https://api.chucknorris.io/jokes/random');
            console.log(result);



        } catch (e){
            console.error(e);
        }
    }




    return (
        <>
            <header>
                <img src={worldMap} alt={"world map"}/>
                <h1>World Regions</h1>
            </header>
            <main>
            {/*hier wordt de lijst zoekresultaten getoond    */}
                <button
                    type="button"
                    onClick={() => getAllCountries()}
                >Knop die iets doet</button>

            {/*    vlag, naam , inwoners */}
            </main>


        </>
    )
}

export default App
