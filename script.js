const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

function checkPswd() {
        var confirmPassword = "yotsuba nakano";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="hidden.html";
        }
        else{
            alert("Password is Incorrect");
        }
}
function HomePage() {
 window.location="index.html";
}
function GotoForms() {
 window.location="Evan_forums.html";
}