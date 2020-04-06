import React from 'react';
import dialog from "./DialogInput.module.css";

const DialogInput = (props) => {
    return <form action="">
        <div>
            <textarea className={dialog.textarea} rows="3" placeholder="Write a message" required></textarea>
        </div>
        <button className={dialog.btn} href="">POST</button>
    </form>
}


export default DialogInput;
