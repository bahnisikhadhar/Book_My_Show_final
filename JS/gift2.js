import { getNavbarHTML } from "./modules/navbarModule";
import { getFooter2HTML } from "./modules/footerModule";

document.querySelector('.m_container').innerHTML = getNavbarHTML();
document.querySelector('.m_footer2').innerHTML = getFooter2HTML();