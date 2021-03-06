

/*estrapolo il nome e i km da percorrere */
const userName = document.getElementById('my-input-name');
const userKm = document.getElementById('my-input-km');

/*creo la costante del selector per iniziare il ciclo per calcolare il prezzo e lo sconto*/

const userSelector = document.getElementById('my-select');
let userDiscount;


// CONTROLLO IL VALUE DELLE OPTION E PEROGNI CASO ASSEGNO UN VALORE DI SCONTO, POI STAMPO IL RISULTATO
const userGenerator = document.getElementById('my-btn-generator');
userGenerator.addEventListener('click', function(){
    console.log(userName.value);
    console.log(userKm.value);
    let ticketPrice = userKm.value * 0.17;
    if( userSelector.value == '0' ){
        userDiscount = 0.17;
        ticketPrice = (ticketPrice - (ticketPrice * userDiscount)).toFixed(2);
        console.log('minorenne');
        console.log(ticketPrice);
        document.getElementById('my-ticket-price').innerHTML += `Il prezzo del biglietto è: ${ticketPrice} €`;
        document.getElementById('my-age').innerHTML = `minore di 18 anni`;
    } else if( userSelector.value == '2'){
        userDiscount = 0.33;
        ticketPrice = (ticketPrice - (ticketPrice * userDiscount)).toFixed(2);
        console.log('vecchi');
        console.log(ticketPrice);
        document.getElementById('my-ticket-price').innerHTML = `Il prezzo del biglietto è: ${ticketPrice} €`;
        document.getElementById('my-age').innerHTML = `over 65 anni`;
    } else{
        userDiscount = 1;
        ticketPrice = (ticketPrice).toFixed(2);
        console.log('normali');
        console.log(ticketPrice);
        document.getElementById('my-ticket-price').innerHTML = `Il prezzo del biglietto è: ${ticketPrice} €`;
        document.getElementById('my-age').innerHTML = `compresa trai 18 e 64 anni`;
    };
    document.getElementById('output').classList.remove('d-none');
    document.getElementById('my-name').innerHTML = `${userName.value}`;
});

//assegno ad una costante il valore del button annulla e creo un ascoltatore per resettare tutto

const userCancel = document.getElementById('my-btn-cancel');
userCancel.addEventListener('click' , function(){
    document.getElementById('my-form').reset();
    document.getElementById('my-name').innerHTML = ` `;
    document.getElementById('my-age').innerHTML = ` `;
    document.getElementById('my-ticket-price').innerHTML = ` `;
    document.getElementById('output').classList.add('d-none');
});

