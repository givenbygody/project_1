
function login() {
    let name = prompt("Enter your name");
    
    if (name === null || name.trim() === "") {
        alert("EMPTY NAME");
    } else {
        alert("Name_set!");
    }
}