"use server";

import { Resend } from "resend";
import {getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const emailNotification = async (message : string) => {
  
  let data;
  try {
    data = await resend.emails.send({
      from: "✋ Personal website | Contact Form <onboarding@resend.dev>",
      to: "pawelduplagait@gmail.com",
      subject: "Ur CV has been downloaded",
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: "",
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};