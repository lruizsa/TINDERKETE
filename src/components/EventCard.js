import React from 'react';
import { useTranslation } from "react-i18next";

function EventCard({
  title,
  location,
  date,
  time,
  description,
  price,
  participants,
  maxParticipants,
  image,
  participantImages,
}) {
  const { t } = useTranslation();

  return (
    <div className="card shadow-lg rounded-lg overflow-hidden">
      {/* Imagen del evento */}
      <img
        src={image}
        className="w-full h-64 object-cover"
        alt={`${title}`}
      />
      <div className="p-4">
        {/* Título y detalles del evento */}
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-gray-600">
          <strong>{location}</strong> - {date} at {time}
        </p>
        <p className="text-sm text-gray-800 mb-2">{description}</p>

        {/* Precio y participantes */}
        <p className="text-sm text-gray-700 mb-4">
          <strong>{t('eventcard.prezioa')}</strong> {price}€ <br />
          <strong>{t('eventcard.jokalariak')}</strong> {participants}/{maxParticipants}
        </p>

        {/* Participantes */}
        <div className="mb-3">
          <strong className="block text-sm">{t('eventcard.partaideak')}</strong>
          <div className="flex -space-x-2">
            {/* Muestra las imágenes de los participantes */}
            {participantImages.length > 0 ? (
              participantImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Participant ${index + 1}`}
                  className="rounded-full border-2 border-white w-10 h-10"
                />
              ))
            ) : (
              <p className="text-gray-600">{t('eventcard.sinParticipantes')}</p>
            )}
          </div>
        </div>

        {/* Botón de inscripción */}
        <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          {t('eventcard.apuntatu')}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
