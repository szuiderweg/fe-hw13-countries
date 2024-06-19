//steppenplan:
//in: werelddeel of region (string)
//uit: string met classname die past bij het kleurtje  in css sheet gebruiken we die om de landnamen een kleurtje te geven
//stappen: maak een lijstje met de belangrijkste regio's en bedenk er een kleurtje voor
//wijs de kleuren toe in een switch statement
//return en exporteer de classname.
export function regionHelper(region){
    let regionColour = "";

    switch(region){
        case "Asia":
            regionColour = "red-region";
            break;
        case "Americas":
            regionColour = "green-region";
            break;
        case "Africa":
            regionColour = "blue-region";
            break;
        case "Europe":
            regionColour = "yellow-region";
            break;
        case "Oceania":
            regionColour = "purple-region";
            break;
        case "Antarctic":
            regionColour = "grey-region";
            break;
        default:
            regionColour = "other-region";
    }

    return regionColour;
}

// 0     "Asia": rood
// 1	"Americas": groen
// 2	"Africa": blauw
// 3	"Europe": geel
// 4	"Oceania": paars
// 5	"Antarctic": grijs
// 6 overig