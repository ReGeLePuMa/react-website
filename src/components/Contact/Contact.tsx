import "../../index.css"
import { useRef } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function Contact() {

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
            .then(
                (result: EmailJSResponseStatus) => {
                    console.log(result.text);
                },
                (error: EmailJSResponseStatus) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div id="contact-section" className="w-screen flex flex-col  bg-white">
            <div className="w-screen flex flex-col items-center justify-center text-center my-8">
                <h1 className="text-6xl  font-bold text-black ">Contact me</h1>
            </div>
            <div className="w-screen flex justify-center items-center my-8">
                <form ref={form} onSubmit={sendEmail} className="w-1/2">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-bold text-black mb-2">Name:</label>
                        <input type="text" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-bold text-black mb-2">Email:</label>
                        <input type="email" name="user_email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-bold text-black mb-2">Message:</label>
                        <textarea name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" value="Send" className="bg-black text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-300">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact