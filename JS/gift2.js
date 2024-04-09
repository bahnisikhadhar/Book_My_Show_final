import { getNavbarHTML } from "./modules/navbarModule";
import { getFooter2HTML } from "./modules/footerModule";

document.querySelector('.m_container').innerHTML = getNavbarHTML();
document.querySelector('.m_footer2').innerHTML = getFooter2HTML();

document.addEventListener('DOMContentLoaded', function() {
    // Dynamically create a script tag for navbar.js
    const script = document.createElement('script');
    script.src = '../JS/navbar.js';
    script.type = 'module';
    
    const otpScript = document.createElement('script');
      otpScript.src = '../JS/otp.js';
    // Append the script tag to the document body
    document.body.appendChild(script);
    document.body.appendChild(otpScript);
  });