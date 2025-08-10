import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#214598] text-center w-[97%] pt-[20px] pb-[10px] mt-[10px]">
      <div className="max-w-5xl space-y-[15px]">
        <p className="font-['Raleway']" style={{ color: '#ffffff' }}><b>Телефон</b>: <a href="tel:+79031341349" style={{ color: '#ffffff' }}>+7 903 134 13 49</a></p>
        <p className="font-['Raleway']" style={{ color: '#ffffff' }}><b>E-mail</b>: <a href="mailto:blueline@internet.ru" style={{ color: '#ffffff' }}>blueline@internet.ru</a></p>
        <p className="font-['Raleway']" style={{ color: '#ffffff' }}>
          <b>Адрес</b>: Бизнес-парк GREENWOOD на МКАДе, 72 км МКАД, Московская обл, Красногоский район, п/о Путилково, строение 23, офис 49.
        </p>
      </div>
      <p className="font-['Raleway']" style={{ color: '#ffffff' }}>&copy; Blue Line {currentYear}</p>
    </footer>
  );
}
