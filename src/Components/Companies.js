import React from 'react';
import Fade from "react-reveal/Fade";

function Companies() {
  return (
    <div className="z-50 lg:h-[200px] from-[#110617] to-[#16081c] bg-gradient-to-r lg:px-28 px-10 pb-10">
      <Fade bottom cascade>
        <p className="text-[#696984] font-semibold text-center lg:pt-12 pt-6 whitespace-nowrap">
          Connect with us on our various media platforms
        </p>
        <div className="lg:flex justify-evenly pt-10 grid grid-cols-2 md:grid-cols-3 gap-10">
        <img src="https://img.icons8.com/color/60/null/twitter--v1.png" alt='Twitter'/>
        <img src="https://img.icons8.com/fluency/60/null/instagram-new.png" alt="Instagram"/>
        <img src="https://img.icons8.com/color/60/null/discord-logo.png" alt='Discord'/>
        <img src="https://img.icons8.com/color/60/null/telegram-app--v1.png" alt='Telegram'/>
        <img src="https://img.icons8.com/color/60/null/youtube-play.png" alt='YouTube'/>
        <img src="https://img.icons8.com/color/60/null/linkedin-circled--v1.png" alt='LinkedIn'/>
        <img src="https://img.icons8.com/ios-filled/60/FFFFFF/medium-monogram--v1.png" alt='Medium'/>
        </div>
      </Fade>
    </div>
  );
}

export default Companies