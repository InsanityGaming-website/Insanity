const form = document.getElementById("LogIn");
const name = document.getElementById("username");
const errorElement = document.getElementById("error");
let users = []

form.addEventListener("submit",function(event){
    let messages = [];
    if (name.value == "" || name.value == null){
        messages.push("enter username");
    }
    if (email.value == "" || name.value == null){
       messages.push("enter email");
    }
    if (password.value == "" || password.value == null){
        messages.push("enter password");
    }
    if (messages.length > 0){
        event.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
})
function BackToHomePage(){
  window.open("HomePage.html");
}
function LogOut(){
  window.open("Index.html");
}
function LoginWithoutAccount(){
  window.open("HomePage.html");
}
function GoToVideos(){
  window.open("Videos.html");
}
function GoToTips(){
  window.open("Tips.html");
}
function GoToAnnouncements(){
  window.open("Announcements.html");
}
function GoToAboutUs(){
  window.open("AboutUs.html");
}