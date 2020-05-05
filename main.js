'use strict';


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("prediction").addEventListener("click", createPrediction);

    function createPrediction() {
        const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

        let prediction = new renderPrediction(id);
        prediction.rendrer();
    }

    document.addEventListener("click", toClose);

    function toClose(event) {
        let close = event.target.className;
        let parent = event.target.offsetParent;
        if (close == "pop_close") {
            parent.remove();
            createPrediction.some;
        }
    }


    class renderPrediction {

        constructor(id) {
            this.pop_up = document.getElementById("pop-up");
            this.pop_up_message = "";
            this.id = id;
        }

        returnPrediction() {
            let answers = Math.ceil(Math.random() * 8);
            let message = "";

            if (answers === 1) message = "It is certain";
            if (answers === 2) message = "Outlook good";
            if (answers === 3) message = "You may rely on it";
            if (answers === 4) message = "Ask again later";
            if (answers === 5) message = "Concentrate and ask again";
            if (answers === 6) message = "Reply hazy, try again";
            if (answers === 7) message = "My reply is no";
            if (answers === 8) message = "My sources say no";
            return message;
        }

        rendrer() {
            this.pop_up_message = `<div class="message" id="${this.id}">
                <p>${this.returnPrediction()}</p>
                <div class="pop_close"></div>
            </div>`;
            this.pop_up.innerHTML += this.pop_up_message;
            setTimeout(() => {
                this.delete_message()
            }, 5000);
        }

        delete_message() {
            const close = document.getElementById(`${this.id}`);
            close != undefined?close.remove(): false;
        }


    }


});







