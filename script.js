const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('site').value;
    const mobile = document.getElementById('rating').value;
    const roomno = document.getElementById('comment').value;

    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
                <h2>I, ${name} , went to Hell and all I got was this card.</h2>
                <p><strong>Where I found Hell:</strong> ${site} </p>
                <p><strong>Opinion of Hell:</strong> ${rating} </p>
                <p><strong>Additional Comments:</strong> ${comment} </p>
                <p><strong>We hope to see you again sometime!</strong></p>`;

    guestList.appendChild(guestCard);

    guestForm.reset();
});
