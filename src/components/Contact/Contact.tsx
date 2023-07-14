import "../../index.css"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const showAlert = (message: string, bgColor: string) => {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.classList.add('fixed',
        'top-0',
        'left-0',
        'right-0',
        'p-4',
        'text-white',
        'text-center',
        'font-bold',
        'uppercase',
        'rounded',
        'shadow-lg', 
        'bg-white',
        'text-gray-800',
        'z-50');
    
        alertDiv.classList.add(bgColor);
    
        document.body.appendChild(alertDiv);
    
        setTimeout(() => {
          alertDiv.remove();
        }, 3000);
      };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o3h5ayg', 'template_1cr7dsb', e.currentTarget, 'dtdovAj68xmtZqIhf')
            .then(() => {
                showAlert("Email sent successfully", 'bg-green-500');
              })
              .catch(() => {
                showAlert('Failed to send email', 'bg-red-500');
              });
        e.currentTarget.reset();    
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
                        <input type="text" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                        minLength={2}
                        maxLength={50}
                        title="Please enter a name between 2 and 50 characters." />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-bold text-black mb-2">Email:</label>
                        <input type="email" name="user_email" className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        required
                        title="Please enter a valid email address." />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-bold text-black mb-2">Message:</label>
                        <textarea name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                        minLength={1}
                        maxLength={500}
                        title="Please enter a message between 1 and 500 characters."></textarea>
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