🐶 Hundpensionatet tassen 🐶
Om projekt
Tassen är en webbplats för hunddagis och hundpensionat. Plats för tolv hundar, stort inhägnat utomhusområde.
Syftet.
Att skapa en tydlig webbplats där besökare kan läsa och se till tjänster och skicka en bookning för sin hund.
Projektet är byggt med:
1. HTML ⇥ webbplatsens struktur ⇥ formulär ⇥ label ⇥ input
2. CSS ⇥ design, layout och Responsivitet ⇥ css flexbox och css Grid
3. JavaScript ⇥ interaktivitet och funktioner. ⇥ DOM manipulation ⇥ LocalStorage

🐶 Så kör min projektet
⇥ Öppna hundpensionatet mappen i Visual Studio Code.
⇥ Öppna filen index.html.
⇥ Högerklicka på index.html och välj Open with Live Server.
⇥ Webbplatsen öppnas i webbläsaren.
⇥ När jag ändrar och sparar HTML-, CSS- eller JavaScript-filerna uppdateras webbplatsen i webbläsaren

🐶Webbplats funktioner.
1. öppettider och aktuell tid med hjälp av JavaScript för att visa information om öppettider och uppdatera klockan.

2. Tjänster skriver i en array med objekt och visar dynamiskt på webbsidan. Det gör det enklare att uppdatera och hantera uppgifter i tjänster.

3. Bokningsförfrågningar för besökaren kan fylla i ett formulär med hunds namn, önskat datum och ägarens mobilnummer. Med hjälp av Javascript att skapa ett boknings objekt. Bokningarna sparar i LocalStorage vilket gör att bokningarna stannar kvar efter att laddas om i samma webbläsare. Besökare kan boka och avboka bokning. 

4. kundomdömen som lagrar i en Array med objekt och varje objekt som finns ett omdöme och information om vem som har skrivit det.

5. Kontaktformulär skrivs på HTML för besökare, skriver förnamn, efternamn, e-post och meddelandet. Javascript kontrollerar att alla fält fyller. Om något fält är töm visa ett meddelande annars visa ett bekräftelsemeddelande.

🐶CSS: Flexbox och Grid
Jag använder både Flexbox och Grid för att skapa en tydlig och respons  layout eftersom de har olika styrkor. CSS Grid där innehållet behöver organiseras i rader och kolumner och det ska passa med tjänster som visar bredvid varandra.
CSS Flexbox används för att justera element i en rad eller i kolumn.

🐶 Function och forEach()
Jag använder forEach() för att gå igenom Array och visar information på webbsidan. Denna information läggs till i DOM. Jag valde forEach() för att  åtgärda för varje bokning och tjänster utan att skapa nya array.

🐶localStorage och JSON
Jag använder LocalStorage för att spara bokningsförfrågningar i webbläsaren. När sidan öppnas igen hämtar JavaScript de sparade uppgifterna.
Jag använder JSON.stringify() för att omvandla arrayen till en text som kan sparas och JSON.parse() för att omvandla den sparade texten tillbaka till Javascript-data.

🐶 State-hantering
Jag använder array som heter booking som håller reda på bokningsförfrågan. När en bokning läggs till eller ta bort, uppdatera booking. Jag använder localstorage för att spara bookingar i webbläsare. och även tjänster använder jag array för att lättare när jag vill uppdatera tjänster

🐶 En bugg du fastnade på i javascript:
När jag arbetar händer det ibland att koden inte fungerar eftersom jag har skrivit fel funktionsnamn eller variabelnamn. Jag undersöker koden med hjälp av DevTools för att hitta var felet uppstår. Jag använder konsolen för att läsa felmeddelanden . När jag hittade felet rättar jag namnet och testar koden igen.

🐶Kort reflektion:
	Jag har lärt mig mer genom att testa och felsöka när jag upptäcker felen. Under skriver hundpensionatet lär jag mer om html , css och javascript. Jag över mer om att skapa funktion, objekt, array eller spara i localstorage. Samt att en webbplats ska vara interaktiv behöver att över andra om css också.

🐶Scope och callbacks
Jag använder addEventListerner()  att hantera händelse.Event används för att hantera händelse och förhindra att sida laddas om.







