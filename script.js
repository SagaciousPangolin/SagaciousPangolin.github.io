// Jaymes Morris
// https://github.com/SagaciousPangolin/
// https://sagaciouspangolin.github.io/
const customers = [];

document.getElementById("submitBtn").addEventListener("click", function() {
    const customer = {
        id: customers.length + 1,
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        favoritePizza: document.getElementById("favorite").value
    };

    customers.push(customer);
    console.clear();
    console.log(customers);

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("favorite").value = "";
});