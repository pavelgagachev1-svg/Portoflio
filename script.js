var p_form = document.getElementById('pavel_msg_form');

p_form.onsubmit = function(event) {
    event.preventDefault();
    
    var n = document.getElementById('user_name').value;
    var m = document.getElementById('user_email').value;

    if (n.length < 3) {
        alert("Молам внесете цело име.");
    } else if (m.indexOf('@') == -1) {
        alert("Внесете точен е-маил.");
    } else {
        alert("Благодарам " + n + "! Пораката е примена.");
        p_form.reset();
    }
};

document.getElementById('contact_jump').onclick = function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};
