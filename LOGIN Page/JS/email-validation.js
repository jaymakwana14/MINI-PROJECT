function validate(form) {
    var usern = form.usr.value;
    var pass = form.pss.value;
    var firch = /^[@0-9][A-Z a-z]+/;

    if (usern.value == 0) {
        alert("You must enter a Username");
        return false;
    }
    if (pass == 0) {
        alert("You must enter a password");
        return false;
    }
    if (pass.length < 8 || pass.length > 12) {
        alert("length of password must be 8 to 12");
        return false;
    }
    if (firch.test(usern)) {
        alert("you must enter valid name");
        return false;
    }
    return true;
}