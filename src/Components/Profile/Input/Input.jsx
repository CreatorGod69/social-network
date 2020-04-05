import React from 'react';
import input from './Input.module.css';

const Input = () => {
    return <div className={input.post}>
            <div className={input.input}>
                <form action="">
                    <div>
                        <textarea rows="3" placeholder="Write a message" required></textarea>
                    </div>
                    <button className={input.btn} href="">POST</button>
                </form>
            </div>
        </div>
}

export default Input;