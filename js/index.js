"use strict";var btnKnowMore=document.querySelector(".know-more"),closeBtnKnowMore=document.querySelector(".modal__close-btn"),modalKnowMore=document.querySelector(".modal"),modalContentKnowMore=document.querySelector(".modal__content"),opnenModalKnowMore=function(){modalKnowMore.classList.remove("is-close"),modalContentKnowMore.classList.remove("is-close")},closeModalKnowMore=function(){modalKnowMore.classList.add("is-close"),modalContentKnowMore.classList.add("is-close")},closeKeyDownModalKnowMore=function(e){27===(e.keyCode||e.which)&&(e.preventDefault(),modalKnowMore.classList.add("is-close"),modalContentKnowMore.classList.add("is-close"))};btnKnowMore.addEventListener("click",opnenModalKnowMore),closeBtnKnowMore.addEventListener("click",closeModalKnowMore),modalKnowMore.addEventListener("click",closeModalKnowMore),document.addEventListener("keydown",closeKeyDownModalKnowMore);var asideNavItemAbout=document.querySelector(".nav-about"),asideNavItemWork=document.querySelector(".nav-work"),asideNavItemLabs=document.querySelector(".nav-labs"),aboutTab=document.querySelector(".about__tab"),workTab=document.querySelector(".work__tab"),labsTab=document.querySelector(".labs__tab"),clickTabAbout=function(){aboutTab.classList.add("is-open"),aboutTab.classList.remove("is-close"),workTab.classList.contains("is-open")?(workTab.classList.remove("is-open"),workTab.classList.add("is-close"),asideNavItemWork.classList.remove("is-active-tab")):labsTab.classList.contains("is-open")&&(labsTab.classList.remove("is-open"),labsTab.classList.add("is-close"),asideNavItemLabs.classList.remove("is-active-tab")),asideNavItemAbout.classList.add("is-active-tab")},clickTabWork=function(){workTab.classList.add("is-open"),workTab.classList.remove("is-close"),aboutTab.classList.contains("is-open")?(aboutTab.classList.remove("is-open"),aboutTab.classList.add("is-close"),asideNavItemAbout.classList.remove("is-active-tab")):labsTab.classList.contains("is-open")&&(labsTab.classList.remove("is-open"),labsTab.classList.add("is-close"),asideNavItemLabs.classList.remove("is-active-tab")),asideNavItemWork.classList.add("is-active-tab")},clickTabLabs=function(){labsTab.classList.add("is-open"),labsTab.classList.remove("is-close"),aboutTab.classList.contains("is-open")?(aboutTab.classList.remove("is-open"),aboutTab.classList.add("is-close"),asideNavItemAbout.classList.remove("is-active-tab")):workTab.classList.contains("is-open")&&(workTab.classList.remove("is-open"),workTab.classList.add("is-close"),asideNavItemWork.classList.remove("is-active-tab")),asideNavItemLabs.classList.add("is-active-tab")};asideNavItemAbout.addEventListener("click",clickTabAbout),asideNavItemWork.addEventListener("click",clickTabWork),asideNavItemLabs.addEventListener("click",clickTabLabs);var burderWrap=document.querySelector(".burger__wrap"),burder=document.querySelector(".burger"),sideBar=document.querySelector(".side-bar"),pageMain=document.querySelector(".page-main"),burderOverlay=document.querySelector(".burger-overlay"),clickBurger=function(){burderWrap.classList.toggle("burger--active"),sideBar.classList.toggle("side-bar--show"),pageMain.classList.toggle("page-main--in-full-screen"),burderOverlay.classList.toggle("is-close")},closeKeyDownBurger=function(e){27===(e.keyCode||e.which)&&(e.preventDefault(),burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show"))};burderWrap.addEventListener("click",clickBurger),document.addEventListener("keydown",closeKeyDownBurger),burderOverlay.addEventListener("click",function(){burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show")});var closeKeyEsc=function(e){27===(e.keyCode||e.which)&&(e.preventDefault(),burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show"))};