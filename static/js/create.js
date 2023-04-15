// Process account creation queries
const accountCreateForm = document.getElementById("create")
accountCreateForm.addEventListener("submit", (event) => {

    event.preventDefault()

    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const password_verify = document.querySelector("#password_verify").value

    console.log(username)
    console.log(email)
    console.log(password)
    console.log(password_verify)

    axios.post("/api/artists/create/", 
    {username, email, password, password_verify})
    .then(response =>{
        window
        .location = "/artists/settings"
    })
    .catch(error => {
        document
        .getElementById("errors")
        .innerHTML = error.response.data.error
        console.log(error.response.data.error)
    })
})