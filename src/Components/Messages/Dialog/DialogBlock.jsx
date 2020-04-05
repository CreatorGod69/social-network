import React from 'react';
import dialog from './DialogBlock.module.css';
import input from "../../Profile/Input/Input.module.css";

const DialogBlock = () => {
    return <div className={dialog.dialog_block}>
        <div className={dialog.inner}>
            <div className={dialog.content}>
                <div><p className={`${dialog.me} + ${dialog.text}`}>How are you?</p></div>
                <div><p className={`${dialog.other} + ${dialog.text}`}>How are you?</p></div>
                <div><p className={`${dialog.me} + ${dialog.text}`}>Im good</p></div>
            </div>
            <form action="">
                <div>
                    <textarea className={dialog.textarea} rows="3" placeholder="Write a message" required></textarea>
                </div>
                <button className={dialog.btn} href="">POST</button>
            </form>
        </div>
    </div>
}

export default DialogBlock;