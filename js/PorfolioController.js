// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.

let s1 = document.querySelector('.aboutMe')
let s2 = document.querySelector('.curriculumVitae')
let s3 = document.querySelector('.projects')
let s4 = document.querySelector('.contactMe')
let lastclick;


function changeDisplay(changePage, b, c, d) {
    if(b.classList.contains('gridDisplay')){
        togglDisplay(changePage)
        togglDisplay(b)
    }
    if(c.classList.contains('gridDisplay')){
        togglDisplay(changePage)
        togglDisplay(c)
    }
    if(d.classList.contains('gridDisplay')){
        togglDisplay(changePage)
        togglDisplay(d)
    }
}    

function togglDisplay(pageChange){
    pageChange.classList.toggle('noDisplay')
    pageChange.classList.toggle('gridDisplay')
}
function toggleHidden(page){
    page.classList.toggle('hidden')
}

function endPage(pageToChangeTo,pageComingfrom){
    pageComingfrom.addEventListener("transitionend",ev=>{
        if(pageComingfrom.classList.contains('gridDisplay')){
            togglDisplay(pageComingfrom)
            togglDisplay(pageToChangeTo)
            console.log(togglDisplay(pageComingfrom))
            toggleHidden(pageComingfrom)
        }
        })
    }

const Menu1 = document.getElementById('NavAboutMe')
const Menu2 = document.getElementById('NavCurriculumVitae')
const Menu3 = document.getElementById('NavProjects')
const Menu4 = document.getElementById('NavContactMe')
const collapse = document.getElementsByClassName("collapsible")
const emailbtn = document.getElementById('SendEmailbtn')
 
Menu1.addEventListener('click',()=>{
    changeDisplay(s1,s2,s3,s4)

})
Menu2.addEventListener('click',()=>{
    changeDisplay(s2,s1,s3,s4)

 })
Menu3.addEventListener('click',()=>{
    changeDisplay(s3,s2,s1,s4)

 })
Menu4.addEventListener('click',()=>{
    changeDisplay(s4,s2,s3,s1)
 })


 emailbtn.addEventListener('click',ev=>{
    ev.stopPropagation()
    let FullName = document.getElementById('FullName');
    let UserEmail = document.getElementById('UserEmail');
    let EmailSubject = document.getElementById('subject');
    let EmailMessage = document.getElementById('message');
    let body = 'name: '+FullName.value+'<br/> email: '+UserEmail.value+'<br/>subject: '+EmailSubject.value+'<br/>message: '+EmailMessage.value
    if (FullName.checkValidity() && UserEmail.checkValidity() && EmailSubject.checkValidity() && EmailMessage.checkValidity()){
        Email.send({
            SecureToken : "a0fabb29-f504-4ddf-90fd-eb9f67f48c3e",
            To : '2002.dylanwilson@gmail.com',
            From : "ctec3905devemail@gmail.com",
            Subject : "contact message",
            Body : body
        }).then(
        message => alert("Email Sent")
        );
        FullName.value=null
        UserEmail.value=null
        EmailSubject.value=null
        EmailMessage.value=null   
    }
    else{
        console.log("invalid")
    }
        
})    


for (index = 0; index < collapse.length; index++) {
    collapse[index].addEventListener('click', function() {
    this.classList.toggle('active');
    let Text = this.nextElementSibling;
    if (Text.style.maxHeight){
        Text.style.maxHeight = null;
    } 
      else {
        Text.style.maxHeight = Text.scrollHeight + "px";
    } 
  });
}