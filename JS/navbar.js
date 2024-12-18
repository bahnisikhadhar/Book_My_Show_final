
const signButton = document.querySelector(".sign_btn");
const signPopUp = document.querySelector(".sign_pop_up");
const modalClose = document.querySelector(".modalclose");
const phoneNumber = document.querySelector(".phone_num");
const termsCondition = document.querySelector(".terms");
const continueBox = document.querySelector(".continue");
const height = document.querySelector(".height");
const signPopUpVerify = document.querySelector(".sign_pop_up1");
const continueBox1 = document.querySelector(".continue1");
const phoneNumVerify = document.querySelector(".phonenum_verify");
const leftChevronIcon = document.querySelector(".leftchevro_icon");
const firstOtpBox = document.querySelector(".otp_box1");
const resendOtp = document.querySelector(".resnd_otp");
const otpBox = document.querySelectorAll(".otp_box");
const invalidMsg = document.querySelector(".invalid_msg");
const rightNavRest = document.querySelector(".right_nav_rest");
const rightNavRest1 = document.querySelector(".right_nav_rest1");
const signPopUpContainer = document.querySelector(".sign_pop_up_container");
const signPopUpContainer1 = document.querySelector(".sign_pop_up_container1");
const noOtpLogin = document.querySelector(".noOtp");
let profileName = document.querySelector(".username")
// let searchInput = document.getElementById('movieSearch');
// let suggestionsContainer = document.getElementById('suggestionsContainer');
let sentOtp;
profileName.innerHTML = localStorage.getItem("user")??`Hi,<span class="user_name">Guest</span>`

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  rightNavRest.classList.add("display_none");
  rightNavRest1.classList.add("display_flex");
}

signButton.addEventListener("click",()=>{
    signPopUpContainer.classList.add("display_block");
});

modalClose.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_block");
})

height.addEventListener("click",()=>{
    phoneNumber.style.borderBottom = "1px solid rgb(156, 154, 154)";
    termsCondition.classList.remove("display_none");
    continueBox.classList.remove("display_block");
})
phoneNumber.addEventListener("click",()=>{
    phoneNumber.style.borderBottom = "1px solid red";
    termsCondition.classList.add("display_none");
    continueBox.classList.add("display_block");
    
})

phoneNumber.addEventListener("input",(event)=>{
    if(phoneNumber.value.length == 13){
        continueBox.classList.add("background_red");
    }else{
        continueBox.classList.remove("background_red");
    }
})

continueBox.addEventListener("click",()=>{
   signPopUpContainer.classList.add("display_none");
   signPopUpContainer1.classList.add("display_block");
    phoneNumVerify.innerText = phoneNumber.value;
   
})

noOtpLogin.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_block");
    rightNavRest.classList.add("display_none");
    rightNavRest1.classList.add("display_flex");
    localStorage.setItem("isLoggedIn", true);
})


//----------------------------------------------------------------------------------------------------------------
  
leftChevronIcon.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_none");
   signPopUpContainer1.classList.remove("display_block");
   termsCondition.classList.remove("display_none");
   continueBox.classList.remove("display_block");
})

//-----------------------------------------------------City-pop-up--------------------------------------------------
const hideCity = document.querySelector(".hide");
const viewCity = document.querySelector(".view");
const lowerpartCity = document.querySelector(".lowerpart_city");
const rightNavCityOption = document.querySelector(".right_nav_city");
const rightNavCityOptionPhone = document.querySelector(".right_nav_city1");
const cityPopUp = document.querySelector(".city_pop_up");
const mainBody = document.querySelector("main");
const cityName = document.querySelector(".city_name");
const cityName1 = document.querySelector(".city_name1");
const cityPopUpContainer = document.querySelector(".city_pop_up_container");

viewCity.addEventListener("click",(e)=>{
    e.stopPropagation();
  lowerpartCity.classList.add("display_block");
   viewCity.classList.add("display_none");
})

hideCity.addEventListener("click",(e)=>{
    e.stopPropagation();
   lowerpartCity.classList.remove("display_block");
   viewCity.classList.remove("display_none");
})

rightNavCityOption.addEventListener("click",()=>{
   cityPopUpContainer.classList.add("display_block");
   cityPopUp.classList.add("display_block");
})


cityPopUpContainer.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(!e.target.classList.contains("city_pop_up"))
    cityPopUpContainer.classList.remove("display_block");
    cityPopUp.classList.remove("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName.innerText=event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName.innerText=event.target.alt;
        }
})

// -----------------------------------------HAMBURGER---------------------------------------------------------
const hamburgerLogin = document.querySelector(".hamburger_login");
const hamburger = document.querySelector(".nav_hamburger");
const hamIcon = document.querySelector(".ham_icon");
const hamburger1 = document.querySelector(".nav_hamburger1");
const hamburgerSignOut = document.querySelector(".hamburger_signOut");
const hamburgerContainer = document.querySelector(".nav_hamburger_container");


hamIcon.addEventListener("click",()=>{
    hamburger.classList.add("display_block");
 })
 
 mainBody.addEventListener("click",()=>{
     hamburger.classList.remove("display_block");
     hamburger1.classList.remove("display_block");
 })
 
 hamburgerLogin.addEventListener("click",()=>{
     hamburger.classList.remove("display_block");
     signPopUpContainer.classList.add("display_block");
 
 })
 
 rightNavRest1.addEventListener("click",()=>{
    console.log("hi")
  hamburger1.classList.add("display_block");
 })
 
 hamburgerSignOut.addEventListener("click",()=>{
     rightNavRest1.classList.remove("display_flex");
     rightNavRest.classList.remove("display_none");
     hamburger1.classList.remove("display_block");
 
     // localStorage.setItem("isLoggedIn", false);
     localStorage.removeItem("isLoggedIn");
 })
 
 
//--------------------------------------------FOR PHONE VIEW----------------------------------------------------
const belowBarUser=document.querySelector(".below_bar_user");

rightNavCityOptionPhone.addEventListener("click",()=>{
    cityPopUpContainer.classList.add("display_block");
    cityPopUp.classList.add("display_block");
})

mainBody.addEventListener("click",()=>{
    cityPopUpContainer.classList.remove("display_block");
    cityPopUp.classList.remove("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName1.innerText = event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName1.innerText = event.target.alt;
        }
})

belowBarUser.addEventListener("click",()=>{
  hamburger.classList.add("display_block");
})



//---------------------------------------Signin with Google-----------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult, signInWithPopup,signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
//import {   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw9njQdmjj9CQsP88oTNkF_NC9gdoKNt0",
    authDomain: "auth-54ab3.firebaseapp.com",
    projectId: "auth-54ab3",
    storageBucket: "auth-54ab3.appspot.com",
    messagingSenderId: "1026883799189",
    appId: "1:1026883799189:web:f273ec6a236b747eb9339c"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const googleBtn = document.getElementById("google_btn")

googleBtn.addEventListener("click", async (e) => {
    signInWithRedirect(auth, provider);
    const result =  await getRedirectResult(auth)
    console.log(result);
   
        try{
            
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("user", auth.currentUser.displayName);
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(user,"inside try block");
            // 
           
          
        }catch(error) {
           
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(error,"inside catch block");
            // ...
       
        };
})

// --------------------------------------SEARCH FUNCTIONALITY--------------------------------------------------

  const Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f";

  const searchInput = document.getElementById('movieSearch');
  const suggestionsContainer = document.getElementById('suggestionsContainer');
  
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

searchInput.addEventListener('input', debounce(function () {
  let searchTerm = searchInput.value.trim();
  suggestionsContainer.innerHTML = '';

  suggestionsContainer.style.display = "block";
  const closeIconDiv = document.createElement("div");
  closeIconDiv.classList.add("close_icon_div");
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-xmark', 'closeRed');
  closeIcon.addEventListener("click", () => {
      searchTerm = "";
      searchInput.value = "";
      suggestionsContainer.style.display = "none";
  });
  closeIconDiv.appendChild(closeIcon);
  suggestionsContainer.appendChild(closeIconDiv);

  if (searchTerm.length >= 1) {
      fetch(`https://api.themoviedb.org/3/search/movie?${Api_key}&query=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
              const movies = data.results;

              if (movies.length === 0) {
                  const noResults = document.createElement('div');
                  noResults.classList.add('no-results');
                  noResults.textContent = "No such movie found.";
                  suggestionsContainer.appendChild(noResults);
              } else {
                  movies.forEach(movie => {
                      const suggestion = document.createElement('div');
                      suggestion.classList.add('suggestion');

                      // Create the film icon element
                      const filmIcon = document.createElement('i');
                      filmIcon.classList.add('fa-solid', 'fa-film', 'film_icon');

                      // Append the film icon before the movie title
                      suggestion.appendChild(filmIcon);
                      suggestion.appendChild(document.createTextNode(` ${movie.title}`));

                      suggestion.addEventListener('click', function () {
                          searchInput.value = movie.title;
                          navigateToNextPage(movie.id);
                      });

                      suggestionsContainer.appendChild(suggestion);
                  });
              }
          })
          .catch(error => {
              console.error('Error fetching movie suggestions:', error);
          });
  }
}, 300));

  function navigateToNextPage(movieId) {
    const currentPagePath = window.location.pathname;
    let redirectionPath = "";
    if (currentPagePath.includes("HTML")) {
        // If the current page is in the HTML directory
        redirectionPath = `movieExpanded.html?id=${movieId}`; // for redirection from movieexpanded,gift page etc
    } else {
        // If the current page is not in the HTML directory
        redirectionPath = `HTML/movieExpanded.html?id=${movieId}`; // for redirection from front page
    }

    // Redirect to the constructed path
    window.location.href = redirectionPath;
}
