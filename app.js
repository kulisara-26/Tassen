//börja med att kontrollera öppentid
function opennow (){
    const nu= new Date(); //skapa ny datum objekt
    const dag= nu.getDay(); //letar nu dag 
    const tidNu = nu.getHours();// leta nu tid

    // kontrollerar att öppna eller stäng
    
    if (dag >= 1 && dag <=5 && tidNu >= 7 && tidNu < 18){
         return `Öppet just nu`;
         }else if(dag === 6 && tidNu >=9 && tidNu < 14){
         return ` 🐶 Öppet just nu`;
        }else {
        return ` 🐶 Stäng just nu`;
        }   
}
function uppdateraStatus() {
    document.getElementById("status").textContent = opennow();
}

uppdateraStatus();
setInterval(uppdateraStatus, 1000);
//uppdetera klockan
function uppdateraTid() {
    const nu = new Date();
    const timmar = String(nu.getHours()).padStart(2,"0");
    const minute =String(nu.getMinutes()).padStart(2,"0");;
    const sekunde = String(nu.getSeconds()).padStart(2,"0");;
    document.getElementById("klockan")
    .textContent= `${timmar}:${minute}:${sekunde}`;

}
uppdateraTid();
setInterval(uppdateraTid, 1000);

// 

