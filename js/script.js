

const docs = document.querySelector('#docs');
const formFiles = document.querySelector('.form__files');



function sendFormData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = document.querySelector('.form__body')
        const message = {
            loading: 'Загрузка',
            succes: 'Спасибо! Документы отправлены',
            failure: 'Что-то пошло не так...'
        };

        const statusMessage = document.createElement('div');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const formData = new FormData(form);

        fetch('server.php', {
            method: "POST",
            // headers: {
            //     'Content-type': 'applycation/json'
            // },
            body: formData
        }).then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.succes;
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            }).catch(() => {
                statusMessage.textContent = message.failure;
            }).finally(() => {
                form.reset();
            })

    });
}



function showAddFilesBlock() {

    formFiles.addEventListener('click', function () {
        docs.classList.toggle('hide');
    })
}


showAddFilesBlock();
sendFormData(form);

// });

