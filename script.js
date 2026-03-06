const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const guestCard = document.createElement('li');
    guestCard.innerHTML =
                <p><strong>${name}:<strong>${comment}</p>;
                
    .guestList.append(guestCard);

    guestForm.reset();
});
