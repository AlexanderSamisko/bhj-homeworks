const openChatBtn = document.querySelector(`.chat-widget__side`);

let openChat = function() {
    document.querySelector(`.chat-widget`).classList.add('chat-widget_active');
}

openChatBtn.addEventListener('click', openChat);

function getMessageTime() {
        let messageDate = new Date(); 
        let Hours = messageDate.getHours() < 10 ?  `0${messageDate.getHours()}` : `${messageDate.getHours()}`;
        let Minutes = messageDate.getMinutes() < 10 ? `0${messageDate.getMinutes()}` : `${messageDate.getMinutes()}`;
        return`${Hours} : ${Minutes}`
}
let postMessage = function(evt) {
    if (evt.key == 'Enter' && chatInput.value) {
        messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${getMessageTime()}</div>
            <div class="message__text">
                ${chatInput.value}
             </div>
            </div>
`;
        chatInput.value = '';
        setTimeout(() => {
            let messageChoice = Math.floor(Math.random() * responses.length);
            messages.innerHTML += `
                    <div class="message">
                    <div class="message__time">${getMessageTime()}</div>
                    <div class="message__text">
                        ${responses[messageChoice]}
                     </div>
                    </div>
        `;
    //    let view = document.querySelector(`chat-widget__messages-container`);
    //     view.scrollTo(0, messages.scrollHeight); 
        }, 2000);


    }
}

let delayedAction = function() {
    let timeOut = setTimeout(
        () => {
            if (chatInput.value) {
                clearTimeout(timeOut);
            } else {
                let messageChoice = Math.floor(Math.random() * responses.length);
                messages.innerHTML += `
                    <div class="message">
                    <div class="message__time">${getMessageTime()}</div>
                    <div class="message__text">
                        ${responses[messageChoice]}
                     </div>
                    </div>
        `;
            }
        }, 30000);
}


const messages = document.querySelector( '.chat-widget__messages' );

const chatInput = document.querySelector(`.chat-widget__input`);
chatInput.addEventListener('keyup', postMessage);
chatInput.addEventListener('focus', delayedAction);

let responses = [
    `Добрый день, чем я могу помочь?`,
    `А Вы, топор не пробовали? Говорят помогает!`,
    `Люк, я твой отец... металлопрокатный завод`,
    `Да! Я существую! Я не смотрел "Текст", оттенки серого и прочие предвыборные программы фракций кандидатов в Государственную Думу`,
    `Аннушка уже разлила масло, тащите Берлиоза`,
    `Андрей Балконский лежал под звездным небо Аустерлица, и думал о том, что лучше бы он поехал в Лас-Вегас... ну или в Воркуту`,
    `Приходите завтра!`
]

