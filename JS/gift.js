import { getNavbarHTML } from './modules/navbarModule.js';
import { getFooter2HTML } from './modules/footerModule.js';
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

// Selectors

const selectOption = document.querySelector('.options');
const giftVouchers = document.querySelectorAll('.voucher-items');
const container = document.querySelector('.gift-vouchers');
let result = [];

const fetchData = async () => {
    const result = await fetch('https://prakash-dey.github.io/api/gift.json');
    const tweets = await result.json();
    let store = tweets.images;
    return store;
}


document.addEventListener("DOMContentLoaded", async () => {
    result = await fetchData();
    result.map((gift) => {
        showGift(gift);
    })
})



selectOption.addEventListener('click', (e) => {
    let text = e.target.innerText;

    if (text === 'All') {
        container.innerHTML = '';
        result.map((gift) => {
            showGift(gift);
        })
    }

    else if (text === 'Generic') {
        container.innerHTML = '';
        let genericGifts = result.filter((gift) => gift.type == "Generic");
        genericGifts.map((gift) => {
            showGift(gift);
        })
    }

    else if (text === 'Occasion') {
        container.innerHTML = '';
        let occasionGifts = result.filter((gift) => gift.type == "Occasion");
        occasionGifts.map((gift) => {
            showGift(gift);
        })
    }

    else if (text === 'Festival') {
        container.innerHTML = '';
        let festivalGifts = result.filter((gift) => gift.type == "Festival");
        festivalGifts.map((gift) => {
            showGift(gift);
        })
    }

    else if (text === 'Combos') {
        container.innerHTML = '';
        let combosGifts = result.filter((gift) => gift.type == "Combos");
        combosGifts.map((gift) => {
            showGift(gift);
        })
    }

})


function showGift(gift) {
    let element = document.createElement('li');
    element.setAttribute('class', 'voucher-items');
    element.innerHTML = `
        <div class="image">
            <img src="${gift.src}" alt="img">
        </div>
        `;
    container.append(element);
}





