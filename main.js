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
        prediction.toFade();
        if (currentCount.value === 6) {
            pop_up.firstChild.remove();
            currentCount.minus();
        }
    }

    document.addEventListener("click", event => { //close message by click
        if (event.target.className === "pop_close") {
                event.target.offsetParent.remove();
                currentCount.minus();
        }
    });


    class renderPrediction {
        constructor() {
            this.id = returnID();
            this.timer = "";
            this.currentElementId;
            this.opacity = 1;
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
        }

        toFade() {  //to fade messages color
            this.timer = setInterval(() => {
                this.currentElementId = document.getElementById(`${this.id}`);
                if (this.currentElementId) {
                    this.currentElementId.style.backgroundColor = `rgba(131, 255, 64, ${this.opacity})`;
                    this.opacity -= 0.016;
                }
            }, 100)
        }

        delete_message() { //delete message
            const close = this.currentElementId;
            if (close) {
                close.remove();
                currentCount.minus();
                clearTimeout(this.timer);

            }
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







