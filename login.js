document.addEventListener("DOMContentLoaded", () => {

    const apiBaseURL = "https://microbloglite.onrender.com";
    loginForm.addEventListener("submit",e=>{
    console.log("submit")
    e.preventDefault()   
    localStorage.password = password.value
    submit({
        username:username.value,
        password:password.value,
    }).then(reponse => {
        console.log(response)
    })
    return false
    })

});