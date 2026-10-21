//börja med att kontrollera öppentid
function uppdateraStatus() {
    const nu = new Date();
    const veckodagar =[
        "Söndag",
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag"
    ];
    const dagar= veckodagar[nu.getDay()];
    document.getElementById("dag").textContent =
        `📅${dagar} ` ;
    document.getElementById("status").textContent =
        opennow();

}

function opennow (){
    const nu= new Date(); 
    const dag= nu.getDay();  
    const minuterNu = nu.getHours() * 60 + nu.getMinutes();
  
//måndag-fredag
if (dag >= 1 && dag <= 5) {

    if (minuterNu >= 7 * 60 && minuterNu < 18 *60){
        return "🐶 Tassen är öppet just nu. Vi stänger kl. 18.00.";
    }
    if (minuterNu < 7 *60){
        return "🐶 Tassen är stängt just nu. Vi öppnar kl. 07.00.";
    }
    if (dag === 5) {
            return "🐶 Tassen är stängt just nu. Vi öppnar på lördag kl. 09.00.";
        }

        return "🐶 Tassen är stängt just nu. Vi öppnar nästa vardag kl. 07.00.";
}
//lördag
if (dag ===6){
    if(minuterNu >= 9 * 60 && minuterNu < 14 * 60){
        return "🐶 Tassen är öppet just nu. Vi stänger kl. 14.00.";   
    }
    if(minuterNu<9 *60){
        return  "🐶 Tassen är stängt just nu. Vi öppnar kl. 09.00.";
    }
        return "🐶 Tassen är stängt just nu. Vi öppnar på måndag kl. 07.00.";
}
// söndag
 return "🐶 Tassen är stängt just nu. Vi öppnar på måndag kl. 07.00.";
}
uppdateraStatus();
setInterval(uppdateraStatus, 1000);
//uppdetera klockan
function uppdateraTid() {
    const nu = new Date();

    const timmar = String(nu.getHours()).padStart(2,"0");
    const minuter =String(nu.getMinutes()).padStart(2,"0");
    const sekunder = String(nu.getSeconds()).padStart(2,"0");

    const klocka =document.getElementById("klockan")
    if(klocka){
        klocka.textContent= `🕒 ${timmar}:${minuter}:${sekunder}`;
    }
}
uppdateraTid();
setInterval(uppdateraTid, 1000);

  //_--------------------------------------------------
  //klass som beskriver en tjänst
  class tjanst{
    constructor(namn, beskrivning, pris){
        this.namn = namn;
        this.beskrivning = beskrivning;
        this.pris = pris
    }

 // skapa HTML för tjänster
visatjanster() {
    const artikel =document.createElement("article");

        const rubrik = document.createElement("h3");
        rubrik.textContent=this.namn;

        const beskrivning =document.createElement("p");
        beskrivning.textContent=this.beskrivning;

        const pristext = document.createElement("p");
        pristext.textContent= "Pris:" + this.pris + " kr";

        artikel.append(rubrik, beskrivning, pristext);

        return artikel; 
    }
}

        // skapar objekt från klass med new
  const tjanster= [
    new tjanst(
        "Hunddagis -heldag",
        "En trygg och rolig dag för din hund: heldag",
        320
    ),
    new tjanst(
        "Hunddagis-halvdag",
        "En trygg och rolig dag för din hund: halvdag",
        190  
    ),
    new tjanst(
        "Pensionat per natt",
        "En trygghet för din hund att bo i hemmiljö",
         450
    ),
    new tjanst(
         "Klippkort 10 heldagar",
        "En trygg och rolig dag för din hund",
        2800
    ),
    new tjanst(
         "Hämtning och lämning",
        "Enligt överenkommelse",
         150
    )
  ];
  
 

  //visa tjänster på webbsidan
 function visatjanster() {

    const lista = document.getElementById("tjansterlistan");
    
    if (!lista){
        console.error("Element tjänster saknar i html!!!");
        return;
    
    }
lista.replaceChildren();

tjanster.forEach(function(tjanst) {
    lista.appendChild(tjanst.visatjanster());
    });
 }
 visatjanster();
   

//----------------------------------------------
 

//Skapa array med töm bokning 
let bookning = [];
try{

const sparat= localStorage.getItem("tassenBookingar")

    if (sparat !== null){
            const data=JSON.parse(sparat);

        if (Array.isArray(data)){
            bookning = data;
        }
         } 
        }catch (error){
            console.error("kunden inte hämta bookningar:",error);
                
         }

//skapa bokning 

const formulär =document.getElementById("bookningsform");
const hundform =document.getElementById("hundsnamn");
const datumform=document.getElementById("datum");
const agaremobil=document.getElementById("agaremobil")
const felmeddelandet=document.getElementById("felmeddelande");

const bekraftelse = document.getElementById("bekraftelse");


//hantera formulär
   if (!formulär || !hundform || !datumform || !agaremobil || !felmeddelandet) {
    console.error("Ett eller flera element saknas i HTML.");
} else {
    console.log("Alla formulärelement hittades!");
}
//hanterar efter submit
formulär.addEventListener("submit",function(event){

    event.preventDefault() //förhindrar att sidan laddas om

    
    //hämta information från formulär
    const hundnamn = document.getElementById("hundsnamn").value.trim();
    const datum=document.getElementById("datum").value;
    const mobilnummer=document.getElementById("agaremobil").value.trim();

    const felmeddelandet =document.getElementById("felmeddelande");

    //rensa tidigare fel sms
      felmeddelandet.textContent = "";
    

    //kontrollera fälte
    if(hundnamn ==="" || datum=== "" || mobilnummer===""){
        felmeddelandet.textContent=
        "Fyll i hundens namn och önskat datum och mobilnummer";
        return;
    }

    // skapar nya bokning i array
    const nybookning= {
        id: Date.now(),
        hundnamn: hundnamn,
        datum: datum,
        agaremobil: mobilnummer
    };

// till lägg ny bookning
    laggtillbokningar(nybookning);

    //kontrollera bokning i console.log
    console.log("Nybookning tillagd", nybookning);

    //töm formulär
    formulär.reset();

    // visar ett bekräftelse sms
    bekraftelse.textContent="";
    bekraftelse.textContent= " Din förfrågan har lagts till ";
});


renderaBookningar();

//-------------------------------------------------------------

// functionen om bokningar 
function renderaBookningar(){
    const lista = document.getElementById("bookningslist");
    const meddelande = document.getElementById("felmeddelande");
   
    if(!lista || !meddelande){
        console.log("Bookninglistan saknas");
        return;
    }

    //rensa den gamla visningen
    lista.replaceChildren();

    //kontrollera sms om listan är töm
    if(bookning.length === 0){
        meddelande.textContent=
        "Du har inga bokningsförfrågningar ännu."
        return;
    }
        meddelande.textContent ="";
    //visar varje boknign

    bookning.forEach(function(nybookning){
    const article= document.createElement("article");

    const namn =document.createElement("p");
    namn.textContent= "Hundens namn: " + nybookning.hundnamn;

    const date =document.createElement("p");
    date.textContent="Önskat datum: " + nybookning.datum;

    const agare = document.createElement("p");
    agare.textContent="Ägare mobil number: " + nybookning.agaremobil;
    
//skapa avboka knappen
const avbookning=document.createElement("button")
avbookning.textContent= "Avboka";
avbookning.type ="button";

avbookning.addEventListener("click" ,function(){
    tabortbookning(nybookning.id);
});

article.append(namn,date,agare,avbookning);
lista.appendChild(article);
});  
}
       

//spara bokningar i webbläsaren
function sparaBookning(){
        localStorage.setItem(
            "tassenBookingar",
            JSON.stringify(bookning)
        );
    } 
    //läg till ny bokningen
 function laggtillbokningar(nybookning){
    bookning.push(nybookning);
    sparaBookning();
    renderaBookningar();
}
   

// ta bort bokning
function tabortbookning(id){
    bookning = bookning.filter(function(nybookning){
        return nybookning.id !== id;
    });

    //spard den uppdaterade array efter ta bort
    sparaBookning();
    //kolla listan
    renderaBookningar();
} 


//-----------------------------------------------------
//kundomdömen
const omdomen= [
    {
        text: "Min hund älskar att vara här på Tassen! Personalen är jättertrevlig.",
        person:"Alis"
    },
    {
        text: "Det märks att personaler tycker om hundar.",
        person:"Lisa"
    },
    {
        text: "Personalen är snälla, och ta hand om min hund med omanke",
        person:"Mina"
    },
    {text: "Jag är väldigt nöjd med bemötande och serviven",
        person:"Erik"
    },
    {
        text: "En fastastisk upplevelse för min hund! Personalen är jättertrevlig.",
        person:"Alex"
    }
];

let senasteomdomen = -1;

const textomdomen = document.getElementById("omdomentext");
const omdomenperson =document.getElementById("omdomenperson");
const nyttomdomen =document.getElementById("nyomdomen");

if (!textomdomen || !omdomenperson || !nyttomdomen ){
    console.log("Ett eller flera element flr kundomdömen saknas");
    
    }else{
         nyttomdomen.addEventListener("click", function(){
        
            let slump = Math.floor(Math.random()*omdomen.length)

                if (slump === senasteomdomen){
                    slump =(slump +1) % omdomen.length; 
                }
         senasteomdomen= slump;

         const valtomdomen = omdomen[slump];

         textomdomen.textContent = valtomdomen.text;
         omdomenperson.textContent = " ☺ "+ valtomdomen.person;
});
    }

    /*-------kontaktuppgift---------*/
    const kontaktform =document.getElementById("kontaktform");
    const kontakbekraftelse= document.getElementById("kontakbekraftelse");
    
    kontaktform.addEventListener("submit" , function(event){
        event.preventDefault();
   
    const fornamn=document.getElementById("namn").value.trim();
    const efternamn=document.getElementById("efternamn").value.trim();
    const epost=document.getElementById("email").value.trim();
    const meddelande =document.getElementById("meddelande").value.trim();

    if (!fornamn || !efternamn || !epost|| !meddelande){
        kontakbekraftelse.textContent= "Fyll i alla fält innan du skicka!!"
        kontakbekraftelse.style.color ="red";
        return;
        
    }
    kontakbekraftelse.textContent =
    `Tack ${fornamn}! Ditt meddelande har registrerats.`;
    kontakbekraftelse.style.color= "blue";

   kontaktform.reset(); // tömme formulärets fält efter att meddelandet har registrerats
    
 });


 