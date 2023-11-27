let platinum = document.getElementById("seats_platinum");
let gold = document.getElementById("seats_gold");
let silver = document.getElementById("seats_silver");
let seatrow1 = Number(platinum.getAttribute("seatrow1"));
let seatcol1 = Number(platinum.getAttribute("seatcol1"));
let seatrow2 = Number(gold.getAttribute("seatrow2"));
let seatcol2 = Number(gold.getAttribute("seatcol2"));
let seatrow3 = Number(silver.getAttribute("seatrow3"));
let seatcol3 = Number(silver.getAttribute("seatcol3"));
const seat_total_amountEl = document.getElementById("seats_total_amount")
const dynamic_nav_el = document.querySelector(".seat_nav")
const close_pointer_el = document.querySelector(".seat_close_icon")
const amoutShowButton = document.querySelector(".seat_total_amount");
const amountShowAnchorEl = document.querySelector(".amount_show_anchor")
const amountBtnContainer = document.querySelector(".seat_type1")
const backLogoEl = document.querySelector(".seat_cheveron")
let currentrow1, currentrow2, currentrow3;


const id = new URLSearchParams(window.location.search).get("id");
const theatreName = new URLSearchParams(window.location.search).get("theatreName");
let seats= sessionStorage.getItem('numSeats');
let Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f"
let Base_Url = "https://api.themoviedb.org/3/"



// localStorage.clear() ;

const renderDetails = async () => {
  const res = await fetch(`${Base_Url}movie/${id}?${Api_key}`)
  const movieData = await res.json();
  let date='27/12/2022'
  const res1 = await fetch(`https://lackadaisical-salt-radium.glitch.me/shows?date=${date}`);
  const data = await res1.json();
  let theatreDetail = '';
  let theatre = data.data.theatres;
  for(let i =0; i<theatre.length; i++){
    if(theatre[i].id == theatreName)
    theatreDetail = theatre[i].theatreName;
  }
  console.log(movieData);
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
    <p class="num_of_tickets pointer"><span id="tickt_no">${seats} </span>Tickets </p>
     <a href="../HTML/theatre.html?id=${id}"><div class="seat_close_icon" style="color:white";><span class="fa fa-close pointer"></span></div></a>
  </div>
</div>
  
  
  
  `
  //
  dynamic_nav_el.innerHTML = template;

}


//-----FeedBack by Prakash Sir-------------------------need to convert it in function,add common class so that can -----------------------------------------

for (let i = 0; i < seatrow1; i++) {
  platinum.innerHTML = platinum.innerHTML + `<div class='row' id='row1-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
  currentrow1 = document.getElementById(`row1-${i}`);
  for (let j = 0; j < seatcol1; j++) {
    currentrow1.innerHTML = currentrow1.innerHTML + `<div class='seat1 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}

for (let i = 0; i < seatrow2; i++) {
  gold.innerHTML = gold.innerHTML + `<div class='row' id='row2-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp;&nbsp; </span></div>&nbsp;`;
  currentrow2 = document.getElementById(`row2-${i}`);
  for (let j = 0; j < seatcol2; j++) {
    currentrow2.innerHTML = currentrow2.innerHTML + `<div class='seat2 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}

for (let i = 0; i < seatrow3; i++) {
  silver.innerHTML = silver.innerHTML + `<div class='row' id='row3-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
  currentrow3 = document.getElementById(`row3-${i}`);
  for (let j = 0; j < seatcol1; j++) {
    currentrow3.innerHTML = currentrow3.innerHTML + `<div class='seat3 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}

// --------------------------------------------------------------------------------------------------------------
//With Local storage

let lastSelectedType = null;

function handleSeatSelection(seats, ticketPrice, selectedSeatsKey) {
  let selectedSeats = [];
  let ticketCount = 0;
  let ticketTotal = 0;
  let count = seats.length; // assuming 'seats' is a NodeList
  let temp = 0;

  if (localStorage.getItem(selectedSeatsKey)) {
    selectedSeats = JSON.parse(localStorage.getItem(selectedSeatsKey));
    ticketTotal = ticketCount * ticketPrice;
  }

  seats.forEach(seat => {
    if (selectedSeats.includes(seat.id)) {
      seat.classList.add('selected');
      seat.style.backgroundColor = '#eee';
      seat.style.border = "none";
    }

    seat.addEventListener('click', e => {
      if (lastSelectedType && lastSelectedType !== selectedSeatsKey) {
        // Deselect all seats of the last selected type
        document.querySelectorAll('.selected').forEach(selectedSeat => {
          selectedSeat.classList.remove('selected');
        });
        // Reset the counts
        ticketCount = 0;
        temp = 0;
        selectedSeats = [];
      }
      lastSelectedType = selectedSeatsKey;

      if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        ticketCount--;
        temp--; // decrement temp when a seat is deselected
        selectedSeats = selectedSeats.filter(s => s !== seat.id);
      } else {
        if (temp >= count) {
          // prevent selecting more seats if the limit is reached
          return;
        }
        seat.classList.add('selected');
        ticketCount++;
        temp++; // increment temp when a seat is selected
        selectedSeats.push(seat.id);
      }

      ticketTotal = ticketCount * ticketPrice;

      console.log(`${ticketCount} tickets, total cost: ${ticketTotal}`);

      // Add the display_flex class whenever a seat is clicked
      amountBtnContainer.classList.add("display_flex");

      // Update the total price in the UI
      amoutShowButton.textContent = ticketTotal.toString();
    });
  });
}

// Use the function for each type of seat
handleSeatSelection(document.querySelectorAll('.seat1'), document.getElementById('ticket_price1').textContent, 'selectedSeats1');
handleSeatSelection(document.querySelectorAll('.seat2'), document.getElementById('ticket_price2').textContent, 'selectedSeats2');
handleSeatSelection(document.querySelectorAll('.seat3'), document.getElementById('ticket_price3').textContent, 'selectedSeats3');

//-----------------------------------------------------------------------------------------------------

amountShowAnchorEl.addEventListener("click", function(event) {
  event.preventDefault();
  const price = document.querySelector('.seat_total_amount').innerText;
  window.location.href = '../HTML/payment.html?price='+price ;
  localStorage.setItem('selectedSeats1', JSON.stringify(selectedSeats1));
  localStorage.setItem('selectedSeats2', JSON.stringify(selectedSeats2));
  localStorage.setItem('selectedSeats3', JSON.stringify(selectedSeats3));

});





window.addEventListener("DOMContentLoaded", () => renderDetails())