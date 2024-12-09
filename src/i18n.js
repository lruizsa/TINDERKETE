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
