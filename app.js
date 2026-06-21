fetch('data.json')

.then(res => res.json())

.then(data => {

document.getElementById('userName').innerText =
data.name;

document.getElementById('userJob').innerText =
data.job;

document.getElementById('avatarImage').src =
data.avatar;

document.getElementById('coverImage').src =
data.cover;

const menu =
document.getElementById('menuContainer');

data.buttons.forEach(btn => {

const a =
document.createElement('a');

a.href = btn.url;

a.innerText = btn.text;

a.target = "_blank";

menu.appendChild(a);

});

});
