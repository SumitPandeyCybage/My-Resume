/** Data for our works items. */
var toggle = 0,
  i = 1,
  j = 0; /** toggle for toggling buttons*/
var min_count = 6;
var tab_buttons = document.querySelectorAll(".tabs-buttons button");
var all = document.querySelector(".our-works .tabs-buttons button[name='all']");
var website = document.querySelector(".our-works .tabs-buttons button[name='website']");
var branding = document.querySelector(".our-works .tabs-buttons button[name='branding']");
var list_items = document.querySelectorAll("#our-works-list li");
var plus_icon = document.querySelector(".our-works div > img:first-of-type");
var minus_icon = document.querySelector(".our-works div > img:nth-of-type(2)");
var hamburger_icon = document.getElementById("menu-icon");
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
/** Attaching event listeners. */
for (i = 0; i < tab_buttons.length; i++) {
  tab_buttons[i].addEventListener("click", tab_clicked);
}

set_items_for_our_works(min_count);
function load_our_works() {
  this.style.display = "none"; /** hide button */
  if (this.getAttribute("alt") == "more") {
    minus_icon.style.display = "block"; /*show button*/
    set_items_for_our_works(-1); /** -1 means load all in that category */
  } else {
    plus_icon.style.display = "block"; /*show button*/
    set_items_for_our_works(min_count); /** min_count is default list size */
  }
  window.location = "#our-works-head";
}


/** Called When our-works tab is clicked. Adds active class to clicked tab and calls set_items_for_our_works(min_count) to generate list */
function tab_clicked() {
  minus_icon.style.display = "none";
  all.classList.remove("active");
  website.classList.remove("active");
  branding.classList.remove("active");
  this.classList.add("active");
  set_items_for_our_works(min_count); /** min_count is default list size */
}


/** Used to show/hide li elements according to limit. 
 * @param {number} limit_to_show - no of li items to show
 */
function set_items_for_our_works(limit_to_show) {
  var counter = 0;
  var category = "";
  for (i = 0; i < list_items.length; i++) { /** resetting classes ie removing hide/show/left-margin classes from our-works li items */
    list_items[i].classList.remove("hide");
    list_items[i].classList.remove("show");
  }
  if (website.classList.contains("active"))
    category = "category-website";
  else if (branding.classList.contains("active"))
    category = "category-branding";
  else
    category = "all";
  for (i = 0; i < list_items.length; i++) {
    if (counter >= min_count && limit_to_show == min_count) { /** if limit is min_count add hide to rest li's and skip other code */
      list_items[i].classList.add("hide");
      continue;
    }
    if (category == "all") { /** if category is all add show to li's and skip rest code */
      list_items[i].classList.add("show");
      counter++;
      continue;
    } /** if category is branding/website add show to li's */
    if (list_items[i].classList.contains(category)) {
      list_items[i].classList.add("show");
      counter++;
    } else
      list_items[i].classList.add("hide");
  }
}


var fixHeader = 800;
var scroll = getCurrentScroll();
$(window).scroll(function () {
  scroll = getCurrentScroll();
  if (scroll >= fixHeader){
    $('header').addClass('expand');
  }
  else{
    $('header').removeClass('expand');
  }
});

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
