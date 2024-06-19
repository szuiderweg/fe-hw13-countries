import './App.css';
import worldMap from './assets/world_map.png';
import {regionHelper} from "./helpers/regionHelper.js";
import {useState} from "react";
import axios from "axios";
//todo:



function App() {
    //State dingen
    const [foundCountries, setFoundCountries] = useState([]);
    console.log("foundCountries");
    console.log(foundCountries);

    //handler functies
    function handleAllCountries(){
        void getAllCountries();//GET API call
       // console.log(foundCountries[0]);
        //console.log(foundCountries);//ok, state is nog niet klaar met updaten wanneer deze console log draait, maar dat geeft niet zo, want uiteindelijk gaat het om het renderen van het resultaat in html even verderop. Daar verwacht ik geen probleem
        //opgelost: console.log binnen getAllCountries aangezet ipv result van de API call ipv state. vet lelijk, maar het werkt wel

        //map alle landnamen in console
        // const countryNames = foundCountries.map(country => {
        //     return country.name;
        // });
        // console.log(countryNames);
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
            console.log(result.data);
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

                {/*klooien met conditional renderen van de lijst*/}
                {foundCountries.length>0  &&
                    <section >
                         <ul className="country-list"> {/* lijst met alle landen */}
                             {foundCountries.map((country) => {
                                 return <li key={country.cca3}>
                                     <article className="country-card">
                                         <div><img src={country.flag} alt="flag" className="flag"/>
                                             <h4 className={regionHelper(country.region)}>{country.name}</h4>
                                         </div>
                                         <p>Has a population of {country.population} people</p>
                                     </article>
                                 </li>
                             })}
                         </ul>
                    </section>
                }

                {/*todo: deel in fragment naar component schrijven*/}
            {/*    vlag, naam , inwoners */}
            </main>


        </>
    )
}

export default App
