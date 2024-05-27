let features = document.getElementById("features");
let featuresContent = document.querySelector(".features");
features.addEventListener("click",function () {
    featuresContent.classList.toggle("hidden");
})
let company = document.getElementById("company");
let companyContent = document.querySelector(".company");
company.addEventListener("click", function () {
  companyContent.classList.toggle("hidden");
});
let featuresMobile = document.getElementById("features-mobile");
let featuresContentMobile = document.querySelector(".features-mobile");
featuresMobile.addEventListener("click",function () {
    featuresContentMobile.classList.toggle("hidden");
})
let companyMobile = document.getElementById("company-mobile");
let companyContentMobile = document.querySelector(".company-mobile");
companyMobile.addEventListener("click", function () {
  companyContentMobile.classList.toggle("hidden");
});
let burgerIcon = document.querySelector(".burger");
let mobileMenu = document.querySelector(".container");
burgerIcon.addEventListener("click",function () {
    mobileMenu.classList.remove("hidden")
})
let closeIcon = document.getElementById("close");
closeIcon.addEventListener("click",function () {
    mobileMenu.classList.add("hidden")
})