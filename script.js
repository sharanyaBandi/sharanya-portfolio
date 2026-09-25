const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav"),theme=document.querySelector(".theme-toggle");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
theme.addEventListener("click",()=>{document.body.classList.toggle("light");theme.textContent=document.body.classList.contains("light")?"☀":"☾";localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark")});
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");theme.textContent="☀"}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
