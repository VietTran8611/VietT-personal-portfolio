function display(){
  if(!document.getElementById("dark-div").classList.contains("dark-div-activate")){
  document.getElementById("dark-mode").style.display = "block";
  document.getElementById("light-mode").style.display = "none";
  } else{
  document.getElementById("dark-mode").style.display = "none";
  document.getElementById("light-mode").style.display = "block";
  } 
}

display()


document.getElementById("dark-mode").addEventListener("click",function(){
      document.documentElement.style.setProperty('--clr-light', '#121212');
      document.documentElement.style.setProperty('--clr-dark', '#fff');
      document.documentElement.style.setProperty('--bs', '0.25em 0.25em 0.75em rgba(0,0,0,.2),0.125em 0.125em 0.25em rgba(0,0,0,.19)');
      document.getElementById("dark-div").classList.add("dark-div-activate")
      document.getElementById("dark-mode").style.display = "none";
      document.getElementById("light-mode").style.display = "block";

  })
  
  document.getElementById("light-mode").addEventListener("click",function(){
      document.documentElement.style.setProperty('--clr-light', '#fff');
      document.documentElement.style.setProperty('--clr-dark', '#303030'); 
      document.documentElement.style.setProperty('--bs', '0.25em 0.25em 0.75em rgba(0,0,0,.25),0.125em 0.125em 0.25em rgba(0,0,0,.15)');
      document.getElementById("dark-div").classList.remove("dark-div-activate")
      document.getElementById("dark-mode").style.display = "block";
      document.getElementById("light-mode").style.display = "none";
  })

const toggle=document.getElementById("toggle-nav")
toggle.addEventListener("click",function(){
  document.body.classList.toggle('nav-open')
})


document.querySelectorAll('.nav__link').forEach(link=>{
  link.addEventListener("click",function(){
    document.body.classList.remove('nav-open')
  })
})