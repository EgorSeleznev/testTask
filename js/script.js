function sendFormData() {
    const form = document.getElementById('form');

    form.onsubmit = function () {
        alert('Форма отправлена!');
        form.onreset();
    }
}

sendFormData();