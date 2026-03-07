const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
                <h2>${name}</h2>
                <p><strong>Comment:</strong> ${address}</p>
                

    guestList.appendChild(guestCard);

    guestForm.reset();
});
