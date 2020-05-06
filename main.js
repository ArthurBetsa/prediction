'use strict';


document.addEventListener("DOMContentLoaded", () => {
    let prediction = {};
    const pop_up = document.getElementById("pop-up");
    const returnID = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const answers = () => Math.ceil(Math.random() * predictionMessage.length - 1);
    let predictionMessage = ["It is certain", "Outlook good",
        "You may rely on it", "Ask again later",
        "Concentrate and ask again", "Reply hazy, try again",
        "My reply is no", "My sources say no"];

    let currentCount = {  //current count of active messages
        value: 0,
        minus: function () {
            this.value--
        },
        plus: function () {
            this.value++
        }
    };


    document.getElementById("prediction").addEventListener("click", createPrediction);

    function createPrediction() {  //create prediction by button
        prediction = new renderPrediction();
        prediction.rendrer();
        if (currentCount.value === 6) {
            pop_up.firstChild.remove();
            currentCount.minus();
        }
    }

    document.addEventListener("click", event => { //close massage by click
        event.target.className == "pop_close"
            ? prediction.delete_message(event.target.offsetParent)
            : false
    });


    class renderPrediction {
        constructor() {
            this.id = returnID();
            this.timer;
        }

        rendrer() { //render new prediction message
            currentCount.plus();
            let pop_up_message = `<div class="message" id="${this.id}">
                <p>${predictionMessage[answers()]}</p>
                <div class="pop_close" ></div>
            </div>`;
            pop_up.innerHTML += pop_up_message;

            setTimeout(() => {
                this.delete_message()
            }, 5000);
            this.toFade();
        }

        toFade() {  //to fade messages color
            let color = 1;
            this.timer = setInterval(() => {
                if (document.getElementById(`${this.id}`)) {
                    document.getElementById(`${this.id}`)
                        .style.backgroundColor = `rgba(131, 255, 64, ${color})`;
                    color -= 0.02;
                }
            }, 100)
        }

        delete_message(parent) { //delete message
            const close = parent || document.getElementById(`${this.id}`);
            if (close) {
                close.remove();
                currentCount.minus();
            }
            clearTimeout(this.timer);
        }
    }

    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");
    predictionMessage.push("sosi bibu");

});







