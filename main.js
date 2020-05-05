'use strict';


document.addEventListener("DOMContentLoaded", () => {
    const pop_up = document.getElementById("pop-up");

    document.getElementById("prediction").addEventListener("click", event => {
        // let answers = Math.ceil(Math.random() * 8);
        //         // let message = "";
        //         //
        //         // if (answers === 1) message = "It is certain";
        //         // if (answers === 2) message = "Outlook good";
        //         // if (answers === 3) message = "You may rely on it";
        //         // if (answers === 4) message = "Ask again later";
        //         // if (answers === 5) message = "Concentrate and ask again";
        //         // if (answers === 6) message = "Reply hazy, try again";
        //         // if (answers === 7) message = "My reply is no";
        //         // if (answers === 8) message = "My sources say no";
        //         //
        //         // let pop_up_message =
        //         //     `<div class="message">
        //         //     <p>${message}</p>
        //         //     <div class="pop_close"></div>
        //         // </div>`;
        //         //
        //         // pop_up.innerHTML += pop_up_message;


    });

    document.addEventListener("click", toClose);
    
    function toClose(event) {
        let close = event.target.className;
        let parent = event.target.offsetParent;
        if(close == "pop_close"){
            // parent.style = "display: none";
            parent.remove();
        }
    }








    class renderPrediction {

        constructor(id) {
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

        let pop_up_message =
            `<div class="message">
            <p>${returnPrediction()}</p>
            <div class="pop_close"></div>
        </div>`;

        pop_up.innerHTML += pop_up_message;



    }






});



class renderPrediction {

    constructor(id) {
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

    let pop_up_message =
        `<div class="message">
            <p>${returnPrediction()}</p>
            <div class="pop_close"></div>
        </div>`;

    pop_up.innerHTML += pop_up_message;



}



function returnPrediction() {
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

