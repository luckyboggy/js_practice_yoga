function form() {

    let message = {
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        loading: 'Загрузка...',
        failure: 'Что-то нее так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {

        event.preventDefault();                 
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');


        let formData = new FormData(form);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);
        request.send(json);


        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i += 1 ) {
            input[i].value = '';
        }
    });

}

module.exports = form;