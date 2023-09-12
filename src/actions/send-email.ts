'use server';

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const isString = (value: unknown) => {
    if(!value || typeof value !== "string"){
        return false;
    }

    return true;
}


export const sendEmail = async (formData : FormData) => {
    console.log("this running on server")
    const message = formData.get('message')
    const senderEmail = formData.get('senerEmail')

    if(!isString(senderEmail)){
        return {
            error: "Invalid sender email"
        }
    }

    if(!isString(message)){
        return {
            error: "Invalid message"
        }
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'pawelduplagait@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail,
        text: `From: ${senderEmail}\n\n${message}`
    })
}