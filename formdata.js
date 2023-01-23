const form = document.getElementById('myForm')

form.addEventListener('submit', event => {
    event.preventDefault() // prevent the form from submitting
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData.entries()) {
        data[key] = value
    }
    console.log(data) // log the form data to the console
});