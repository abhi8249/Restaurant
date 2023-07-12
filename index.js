function done(){
    alert("done");
}

function sendmail(){
    alert("done");
    var name=document.querySelector('#name');
Email.send({
Host : "smtp.elasticemail.com",
Username : "dashabinash700@gmail.com",
Password : "97D48052E468AEEC1EBA33AACDAC1A8FADFF",
To : 'hiiabhi700@gmail.com',
From : "dashabinash700@gmail.com",
Subject : "ji",
Body : "name:"
}).then(
message => alert(message)
);
}