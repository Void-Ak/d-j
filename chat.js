let openchat = document.getElementById("chat-open");
let closechat = document.getElementById("close-btn2");
let chatui  = document.getElementById("en-main");

openchat.addEventListener("click" , () =>
{
   // openchat.style.cssText = "display:none";
   chatui.style.cssText = "display:block";
});

closechat.addEventListener("click" , () =>
{
   chatui.style.cssText = "display:none";
   // openchat.style.cssText = "display:block";

});



let sendbtn  = document.getElementById("send-btn");
let chatcustom  = document.getElementById("chat-cust");
let chatuser = document.getElementById("chat-come");
let customchat  = document.getElementById("chat-cs"); 
let dchat = document.getElementById("default-chat");

sendbtn.addEventListener("click" , function()
{
let chatinp = document.getElementById("chat-inp").value;
    
     let r = `
     <p id="chat-come">${chatinp}</p> <br>
     `;
     let p = 
    ` <p id="define-msg ">plz enter your email address our team reply you in 24 hours </p>
    `;
    // customchat.classList.add("chat-cs");
    chatcustom.innerHTML += r ;
    dchat.innerHTML  = p;
    // customchat.innerHTML 
});

