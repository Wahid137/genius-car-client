import React from 'react';

const Contact = () => {
    return (
        <div class="card w-96  bg-black text-white rounded-lg">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Accept</button>
                    <button class="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;