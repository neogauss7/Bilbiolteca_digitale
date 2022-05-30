
function sendEmail()
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "ggpignagg@gmail.com",
    Password : "wlepigne",
    To : 'theoremz.team@gmail.com',
    From : document.getElementById("name").value,
    Subject : "Nuova email per la newsletter",
    Body : "Mail: " + document.getElementById("name").value,
}).then(
  message => alert(message)
);
  
}

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
 
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();


