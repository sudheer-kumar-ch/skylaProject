let findStayNavItemEl = document.getElementById("findStay");
let findStaySectionEl = document.getElementById("findStaySection");
let homePageEl = document.getElementById("homePage");


let homeSectionOneEl = document.getElementById("homeSectionOne");
let homeSectionTwoEl = document.getElementById("homeSectionTwo");
let homeSectionThreeEl = document.getElementById("homeSectionThree");

let kondapurItemEl = document.getElementById("kondapurItem");
let kondapurSectionTwoEl = document.getElementById("kondapurSectionTwo");

let homeIconEl = document.getElementById("homeIcon");

let jubileeHillsItemEl = document.getElementById("jubileeHillsItem");
let jubileeHillsSectionTwoEl = document.getElementById("jubileeHillsSectionTwo");

let hitechCityItemEl = document.getElementById("hitechCityItem");
let hitechCitySectionTwoEl = document.getElementById("hitechCitySectionTwo");

let banjaraHillsItemEl = document.getElementById("banjaraHillsItem");
let banjaraHillsSectionTwoEl = document.getElementById("banjaraHillsSectionTwo");

let gachibowliItemEl = document.getElementById("gachibowliItem");
let gachibowliSectionTwoEl = document.getElementById("gachibowliSectionTwo");

let aboutSkylaItemEl = document.getElementById("aboutSkylaItem");
let aboutSkylaSectionEl = document.getElementById("aboutSkylaSection");



//LOCATIONS SECTION START

findStayNavItemEl.onclick = function(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}


homeIconEl.onclick = function(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}
    
kondapurItemEl.onclick =  function() {
    homeSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    kondapurSectionTwoEl.classList.remove("d-none");
}

jubileeHillsItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    jubileeHillsSectionTwoEl.classList.remove("d-none");
}

hitechCityItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    hitechCitySectionTwoEl.classList.remove("d-none");
}

banjaraHillsItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    banjaraHillsSectionTwoEl.classList.remove("d-none");
}

gachibowliItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    gachibowliSectionTwoEl.classList.remove("d-none");
}
//LOCACATIONS SECTION END

//ABOUT SKYLA SECTION START
aboutSkylaItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");

    aboutSkylaSectionEl.classList.remove("d-none");
}
//HOME ICON ACTION
function homeIconInAboutSkyla(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}
// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Function to handle click event
function handleClick(event) {
    // Remove 'active' class from all boxes
    boxes.forEach(box => box.classList.remove('active'));
    
    // Add 'active' class to the clicked box
    event.currentTarget.classList.add('active');
}

// Add click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

//ABOUT SKYLA LOCATIONS TEXT LINK
let gachibowliLocationLinkEl = document.getElementById("gachibowliLocationLink");
let banjaraHillsLocationLinkEl = document.getElementById("banjaraHillsLocationLink");
let hitechCityLocationLinkEl = document.getElementById("hitechCityLocationLink");
let jubileeHillsLocationLinkEl = document.getElementById("jubileeHillsLocationLink");
let kondapurLocationLinkEl = document.getElementById("kondapurLocationLink");


function locationGachibowli(){
    banjaraHillsLocationLinkEl.classList.add("d-none");
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");

    gachibowliLocationLinkEl.classList.remove("d-none");
};

function locationBanjaraHills(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");

    banjaraHillsLocationLinkEl.classList.remove("d-none");
}

function locationHitechCity(){
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");

    hitechCityLocationLinkEl.classList.remove("d-none");
}

function locationJubileeHills(){
    hitechCityLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");

    jubileeHillsLocationLinkEl.classList.remove("d-none");
}

function locationKondapur(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");

    kondapurLocationLinkEl.classList.remove("d-none");
}
//ABOUT SKYLA LOCATIONS TEXT LINK END