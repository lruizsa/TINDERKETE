// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define las traducciones
const resources = {
  en: {
    translation: {
      "erreserbak": {
        "header": "Reservation",
        "description": "You can make private or public matches in the reservation area!",
        "sportType": "Sport Type",
        "playerCount": "Player Count",
        "location": "Location",
        "time": "Time",
        "isPublic": "Make it public",
        "submit": "Submit",
        "yourReservations": "Your Reservations",
        "public": "Public",
        "private": "Private",
      },
      "login":{
        "password" : "password",
        "noAccount" : "Don't have an account?",
        "emailHolder" : "Enter email",
        "passHolder" : "Enter password",
        
      },
      "footer":{
        "ref" : "Contact",
        "esaldi" : '"More than sport, real ties!"',
        "esaldi2" : "In Tinderkete, we combine passion and tradition. Are you ready for the next challenge?",
      },
        "login": {
        "password": "password",
        "noAccount": "Don't have an account?",
        "emailHolder": "Enter email",
        "passHolder": "Enter password",
      },
      "mapak": {
        "header": "Frontons and Ratchets",
        "description": "Choose a field type to view the location of Google Maps.",
        "google":"Open on Google Maps",
        "frontoiak":"Frontons",
        "trinketeak":"Ratchets",
      },
      "gutaz": {
        "main" : "Our aim is to encourage the practice of Basque sports by young people. Play on the fronton and ratchet easily, creating open or closed groups and booking places. Meet the big fans and start participating!",
        "section" : "Get to know the Web",
        "section2" : "Our goal is to provide a professional platform to make Basque sports easier.",
        "grid1" : "Lezo Fronton",
        "grid1-1" : "Make your reservation and play in a historic place, always available.",
        "grid2" : "Game Teams",
        "grid2-2" : "Create and join the teams, meet the other players and start playing.",
        "grid3" : "Urnieta Fronton",
        "grid3-3" : "Book easy and enjoy a fronton that combines modernity and tradition.",
        "grid4" : "Urnieta Fronton",
        "grid4-4" : "Book easy and enjoy a fronton that combines modernity and tradition.",
        "grid5" : "Urnieta Fronton",
        "grid5-5" : "Book easy and enjoy a fronton that combines modernity and tradition.",
        "komunitatea" : "Join the Community!",
        "komunitatea2" : "You want to find friends to play Basque sports? Register today and start your experience!",
        "register" : "Register now"
      },
      "kontaktua": {
        "header" : "Contact with us.",
        "header2" : "Don't stop thinking!",
        "izena" : "First and last name",
        "izenap" : "Put yout first and last name",
        "email" : "Email",
        "emailp" : "Write your email",
        "telefonoa" : "Phone number",
        "telefonoap" : "Write your phone number",
        "mezua" : "Message",
        "mezuap" : "Write your message",
        "bidali" : "Send"
      },
      "produktCard": {
        "prezioa" : "Prize:",
        "erosi" : "Buy"
      },
      "produkt":{
        "header" : "Products",
        "header2" : "Best training and products!",
        "iritziak" : "Customer opinions"
      }
      

    }
  },
  eu: {
    translation: {
      "erreserbak": {
        "header": "Erreserbak",
        "description": "Erreserbak egiteko gunean partida pribatuak edo publikoak egin ditzakezu!",
        "sportType": "Zelai mota",
        "playerCount": "Jokalari kopurua",
        "location": "Lokalekua",
        "time": "Ordua",
        "isPublic": "Publikoa egin",
        "submit": "Sartu",
        "yourReservations": "Zure Erreserbak",
        "public": "Publikoa",
        "private": "Pribatua"
      },
      "login":{
        "password" : "pasahitza",
        "noAccount" : "Konturik ez?",
        "emailHolder" : "Sartu emaila",
        "passHolder" : "Sartu pasahitza",
      },
      "footer":{
        "ref" : "Kontaktua",
        "esaldi" : '"Kirola baino gehiago, benetako loturak!"',
        "esaldi2" : "Tinderketen, pasioa eta tradizioa batzen ditugu. Prest zaude hurrengo erronkarako?",
      },
        "login": {
        "password": "pasahitza",
        "noAccount": "Konturik ez?",
        "emailHolder": "Sartu emaila",
        "passHolder": "Sartu pasahitza",
      },
      "mapak": {
        "header": "Frontoiak eta Trinketeak",
        "description": "Aukeratu kantxa mota bat Google Mapsen kokapena ikusteko.",
        "google":"Google Mapsen Ireki",
        "frontoiak":"Frontoiak",
        "trinketeak":"Trinketeak",        
      },
      "gutaz": {
        "main" : "Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua. Jolastu frontoian eta trinketean erraz, talde irekiak edo itxiak sortuz eta tokiak erreserbatuz. Ezagutu zale amorratuak eta hasi parte hartzen!",
        "section" : "Ezagutu Webgunea",
        "section2" : "Gure helburua da euskal kirolak errazago egiteko plataforma profesional bat eskaintzea.",
        "grid1" : "Lezo Frontoia",
        "grid1-1" : "Egin zure erreserba eta jolastu leku historiko batean, beti eskuragarri.",
        "grid2" : "Partida Taldeak",
        "grid2-2" : "Sortu eta batu taldeetan, ezagutu beste jokalariak eta hasi jolasten.",
        "grid3" : "Urnieta Frontoia",
        "grid3-3" : "Erreserbatu erraz eta gozatu modernitate eta tradizioa uztartzen dituen frontoian.",
        "grid4" : "Urnieta Frontoia",
        "grid4-4" : "Erreserbatu erraz eta gozatu modernitate eta tradizioa uztartzen dituen frontoian.",
        "grid5" : "Urnieta Frontoia",
        "grid5-5" : "Erreserbatu erraz eta gozatu modernitate eta tradizioa uztartzen dituen frontoian.",
        "komunitatea" : "Egin bat Komunitatearekin!",
        "komunitatea2" : "Euskal kiroletan aritzeko lagunik aurkitu nahi? Erregistratu gaur eta hasi zure esperientzia!",
        "register" : "Erregistratu orain"
      },
      "kontaktua": {
        "header" : "Jarri gurekin kontaktuan.",
        "header2" : "Ez gelditu gogoekin!",
        "izena" : "Izen abizenak",
        "izenap" : "Sartu izen abizenak",
        "email" : "Email-a",
        "emailp" : "Idatzi email-a",
        "telefonoa" : "Telefonoa",
        "telefonoap" : "Idatzi telefonoa",
        "mezua" : "Mezua",
        "mezuap" : "Idatzi mezu bat",
        "bidali" : "Bidali"
      },
      "produktCard": {
        "prezioa" : "Prezioa:",
        "erosi" : "Erosi"
      },
      "produkt": {
        "header" : "Produktuak",
        "header2" : "Entranamendu eta produktu hoberenak!",
        "iritziak" : "Bezeroen iritziak"
      }
    }
  }



  
};

// Configuración de i18next
i18n
  .use(initReactI18next) // Conectar react-i18next
  .init({
    resources,
    lng: 'eu', // Idioma por defecto
    interpolation: {
      escapeValue: false // No es necesario para React
    }
  });

export default i18n;
