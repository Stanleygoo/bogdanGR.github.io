var link=document.querySelector(".login"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),password=popup.querySelector("[name=password]"),storage=localStorage.getItem("login");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(a){login.value&&password.value?localStorage.setItem("login",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});var mapOpen=document.querySelector(".js-open-map"),mapPopup=document.querySelector(".modal-content-map"),mapClose=mapPopup.querySelector(".modal-content-close");mapOpen.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("modal-content-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-content-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("modal-content-show")&&mapPopup.classList.remove("modal-content-show")});var link=document.querySelector(".login"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),password=popup.querySelector("[name=password]"),storage=localStorage.getItem("login");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(a){login.value&&password.value?localStorage.setItem("login",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});var mapOpen=document.querySelector(".js-open-map"),mapPopup=document.querySelector(".modal-content-map"),mapClose=mapPopup.querySelector(".modal-content-close");mapOpen.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("modal-content-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-content-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("modal-content-show")&&mapPopup.classList.remove("modal-content-show")});
