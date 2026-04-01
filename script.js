var pavel_form_handler = document.getElementById('pavel-form-logic');

function check_inputs(name, mail, msg) {
    if (name.length < 3) {
        alert("Молам внесете го вашето име.");
        return false;
    }
    if (mail.indexOf('@') == -1) {
        alert("Внесете важечка е-маил адреса.");
        return false;
    }
    if (msg.length < 5) {
        alert("Вашата порака е премногу кратка.");
        return false;
    }
    return true;
}

pavel_form_handler.onsubmit = function(event) {
    event.preventDefault();
    
    var sender_name = document.getElementById('v-name').value;
    var sender_mail = document.getElementById('v-email').value;
    var sender_msg = document.getElementById('v-msg').value;

    var valid = check_inputs(sender_name, sender_mail, sender_msg);

    if (valid == true) {
        alert("Ви благодариме " + sender_name + "! Вашата порака е испратена.");
        pavel_form_handler.reset();
    }
};

document.querySelector('.header-contact-btn').onclick = function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};
