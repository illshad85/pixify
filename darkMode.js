const darkModeLink = document.getElementById("dark-mode-link")
const mainContent = document.getElementById("main-content")

let inDarkMode = false
darkModeLink.addEventListener("click", function(){
    inDarkMode = !inDarkMode
    if (inDarkMode){
        mainContent.classList.remove("dark-mode")
        darkModeLink.innerText = "Dark Mode"    
    } 
    else{
        mainContent.classList.add("dark-mode")
        darkModeLink.innerText = "Light Mode"
    }
})