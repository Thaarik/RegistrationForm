// JavaScript Validation


function validate() {

    //declaration and initialization
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var gendermale = document.getElementById("male");
    var genderfemale = document.getElementById("female");
    var qualification = document.getElementById("qualification");
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var interestsports = document.getElementById("sports");
    var interestpolitics = document.getElementById("politics");
    var interestcinema = document.getElementById("cinema");
    var nointerest = document.getElementById("nointerest");
    var accept = document.getElementById("accept");
    var reject = document.getElementById("reject");
    var usernamelabel = document.getElementById("usernamelabel");
    var passwordlabel = document.getElementById("passwordlabel");
    var cpasswordlabel = document.getElementById("cpasswordlabel");
    var qualificationlabel = document.getElementById("qualificationlabel");
    var genderlabel = document.getElementById("genderlabel");
    var addresslabel = document.getElementById("addresslabel");
    var interestlabel = document.getElementById("interestlabel");
    var countrylabel = document.getElementById("countrylabel");



    //Validation code
    if (name.length <= 5 || (!name.match(/[A-Za-z]+$/)) || name == "") {
        usernamelabel.style.color = "red";
        alert("Please enter valid username(minimum 6 characters and no special character)");
        return false;
    } else if (password == "") {
        passwordlabel.style.color = "red";
        document.getElementById("password").focus();
        alert("Please enter your  password");
        return false;
    } else if (!((password.match(/[a-zA-Z0-9]/g) && password.match(/[^a-zA-Z0-9\d]+/g)))) {
        passwordlabel.style.color = "red";
        alert("Password must contain atleast one special character");
        return false;
    } else if (cpassword == "") {
        cpasswordlabel.style.color = "red";
        alert("Please enter confirm password");
        return false;
    } else if (!(password == cpassword)) {
        cpasswordlabel.style.color = "red";
        passwordlabel.style.color = "red";
        alert("Password specified must be identical.");
        return false;
    } else if (!gendermale.checked && !genderfemale.checked) {
        genderlabel.style.color = "red";
        alert("Choose gender");
        return false;
    } else if (qualification.value == "") {
        qualificationlabel.style.color = "red";
        alert("Please enter your qualification");
        return false;
    } else if (address.length < 10) {
        addresslabel.style.color = "red";
        alert("Please enter your full address");
        return false;
    } else if (country == "") {
        countrylabel.style.color = "red";
        alert("Please enter your country");
        return false;
    } else if (!interestsports.checked && !interestpolitics.checked && !interestcinema.checked && !nointerest.checked) {
        interestlabel.style.color = "red";
        alert("Please enter your area of interest");
        return false;
    } else if (!accept.checked && !reject.checked) {
        alert("Please click accept!");
        return false;
    } else {
        alert("Registration form submitted successfully!")
    }
}

// To enable register button
function enableRegister() {
    document.getElementById("register").disabled = false;
}
//to disable register button
function disableRegister() {
    document.getElementById("register").disabled = true;

}
//to uncheck other checkboc when no interest checkbox is on
function uncheck() {
    document.getElementById("sports").checked = false;
    document.getElementById("politics").checked = false;
    document.getElementById("cinema").checked = false;
}

// to uncheck no interest checkbox when other checkboxes are on
function check() {
    document.getElementById("nointerest").checked = false;
}

// to focus and unfocus the correction part
function unread() {
    var usernamelabel = document.getElementById("usernamelabel");
    var passwordlabel = document.getElementById("passwordlabel");
    var cpasswordlabel = document.getElementById("cpasswordlabel");
    var qualificationlabel = document.getElementById("qualificationlabel");
    var genderlabel = document.getElementById("genderlabel");
    var addresslabel = document.getElementById("addresslabel");
    var interestlabel = document.getElementById("interestlabel");
    var countrylabel = document.getElementById("countrylabel");
    //to revert back the text color
    if ((usernamelabel.style.color == "red") || (passwordlabel.style.color == "red") ||
        (cpasswordlabel.style.color == "red") || (qualificationlabel.style.color == "red") ||
        (genderlabel.style.color == "red") || (countrylabel.style.color == "red") ||
        (addresslabel.style.color == "red") || (interestlabel.style.color == "red")) {
        usernamelabel.removeAttribute("style");
        passwordlabel.removeAttribute("style");
        cpasswordlabel.removeAttribute("style");
        qualificationlabel.removeAttribute("style");
        addresslabel.removeAttribute("style");
        countrylabel.removeAttribute("style");
        genderlabel.removeAttribute("style");
        interestlabel.removeAttribute("style");
    }
}