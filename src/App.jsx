import './App.css';
import worldMap from './assets/world_map.png';
import {useState} from "react";
import axios from "axios";
//todo:



function App() {
    //State dingen
    const [foundCountries, setFoundCountries] = useState([]);
    const [ hidden, setHidden] = useState(true)

    //handler functies
    function handleAllCountries(){
        void getAllCountries();//GET API call
        console.log(foundCountries[0]);
        // console.log(foundCountries);

    }


    //API requests
    async function getAllCountries(){
        try{
            //const result = await axios.get('https://restcountries.com/v3.1/all?fields=name,population');
            //! the restcountries API is so slow, does not respond to get all countries request, it times out.
            // a query for a single country sometimes yields a response. Chuck Norris API from lesson 13 example does work:
            //const result = await axios.get('https://api.chucknorris.io/jokes/random');
            //possible solution is to use 2 other API's:  https://countryinfoapi.com/ for information about countries
            //https://flagsapi.com/ for the flag images

            const result = await axios.get('https://countryinfoapi.com/api/countries');

            //console.log(result.data[0].name);
            // console.log(result.data);
            setFoundCountries(result.data);//update State with received data

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
                    onClick={() => handleAllCountries()}
                >Alle landen</button>
                { foundCountries !== [] && <section>
                    <article className="country-card">
                        <p> ik ben er wel!</p>
                        {/*<h4>{foundCountries[0].name}</h4>*/}
                        {/*<p>Has a population of {foundCountries[0].population} people</p>*/}
                    </article>

                </section> }
            {/*    vlag, naam , inwoners */}
            </main>


        </>
    )
}

export default App
