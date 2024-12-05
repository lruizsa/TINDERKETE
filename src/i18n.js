// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define las traducciones
const resources = {
  en: {
    translation: {
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
      "private": "Private"
    }
  },
  eu: {
    translation: {
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
