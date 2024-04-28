const gold = document.getElementById("seats_gold");
const seatrow2 = Number(gold.getAttribute("seatrow2"));
const seatcol2 = Number(gold.getAttribute("seatcol2"));
const seat_total_amountEl = document.getElementById("seats_total_amount");
const dynamic_nav_el = document.querySelector(".seat_nav");
const amoutShowButton = document.querySelector(".seat_total_amount");
const amountShowAnchorEl = document.querySelector(".amount_show_anchor");
const paymentButton = document.querySelector(".seat_type1");
let totalSelectedSeats = 0;

const id = new URLSearchParams(window.location.search).get("id");
const theatreName = new URLSearchParams(window.location.search).get("theatreName");
const seats = parseInt(sessionStorage.getItem('numSeats'));
const Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f";
const Base_Url = "https://api.themoviedb.org/3/";

const ticketPrice = 280;

const renderDetails = async () => {
  const res = await fetch(`${Base_Url}movie/${id}?${Api_key}`);
  const movieData = await res.json();
  const date = '27/12/2022';
  const res1 = await fetch(`https://lackadaisical-salt-radium.glitch.me/shows?date=${date}`);
  const data = await res1.json();
  let theatreDetail = '';
  const theatre = data.data.theatres;
  for (let i = 0; i < theatre.length; i++) {
    if (theatre[i].id == theatreName)
      theatreDetail = theatre[i].theatreName;
  }
  const { original_title } = movieData;
  const template = `
    <div class="seat_nav_content container">
      <div class="seat_left_nav_item">
        <div class="seat_cheveron"><a href="../HTML/theatre.html?id=${id}" class="fa fa-angle-left back-logo"></a></div>
        <div class="api_fetched_detail">
          <p class="seat_movie_name">${original_title} <span class="seat_adult">(U/A)</span></p>
          <p class="seat_theater_name">${theatreDetail}</p>
        </div>
      </div>
      <div class="seat_right_nav_item">
        <p class="num_of_tickets pointer"><span id="tickt_no">${seats}</span> Tickets </p>
        <a href="../HTML/theatre.html?id=${id}"><div class="seat_close_icon" style="color:white;"><span class="fa fa-close pointer"></span></div></a>
      </div>
    </div>
  `;
  dynamic_nav_el.innerHTML = template;
};

const generateSeats = (container, row, col) => {
  let seatHtml = '';
  for (let i = 0; i < row; i++) {
    seatHtml += `<div class='row' id='row-${i}'>`;
    for (let j = 0; j < col; j++) {
      seatHtml += `<div class='seat pointer' id='seat-${i}-${j}'>${String.fromCharCode(65 + i)}${j + 1}</div>`;
    }
    seatHtml += `</div>`;
  }
  container.innerHTML = seatHtml;
};

generateSeats(gold, seatrow2, seatcol2);

const seatsContainer = document.querySelectorAll('.seat');

seatsContainer.forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('selected')) { 
      if (totalSelectedSeats < seats) {
        seat.classList.add('selected');
        totalSelectedSeats++;
      }
    } else {
      seat.classList.remove('selected');
      totalSelectedSeats--;
    }

    const ticketTotal = totalSelectedSeats * ticketPrice;
    amoutShowButton.innerText = ticketTotal;

    if (totalSelectedSeats === 0) {
      paymentButton.style.display = 'none';
    } else {
      paymentButton.style.display = 'block';
    }
  });
});


window.addEventListener("DOMContentLoaded", () => {
  renderDetails();
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
  selectedSeats.forEach(seatId => {
    const seat = document.getElementById(seatId);
    if (seat) {
      seat.classList.add('selected');
      seat.classList.add('disabled'); 
    }
  });
});

amountShowAnchorEl.addEventListener("click", function(event) {
  event.preventDefault();
  const price = document.querySelector('.seat_total_amount').innerText;
  if(totalSelectedSeats === seats){
    const selectedSeats = [];
    seatsContainer.forEach(seat => {
      if (seat.classList.contains('selected')) {
        selectedSeats.push(seat.id);
      }
    });
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    window.location.href = '../HTML/payment.html?price=' + price;
  } else {
    alert("Please select all seats");
  }
});



seatsContainer.forEach(seat => {
  seat.addEventListener('click', () => {
    paymentButton.style.display = 'flex';
  });
});


