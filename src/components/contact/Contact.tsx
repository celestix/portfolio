'use client';
import DiscordButton from "@/components/buttons/discord";
import GithubButton from "@/components/buttons/github";
import TelegramButton from "@/components/buttons/telegram";
import TwitterButton from "@/components/buttons/twitter";
import sendMessage from "@/utils/sendMessage";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await sendMessage(name, email, text);
      const btnElem = document.getElementById('contact-button');
      btnElem?.classList.replace('bg-blue-600', 'bg-green-500');
      btnElem?.classList.replace('hover:bg-blue-700', 'hover:bg-green-600');
      btnElem?.classList.replace('focus:ring-blue-800', 'focus:ring-green-700');
      btnElem?.classList.add('pointer-events-none');
      btnElem?.replaceChildren('Your message has been sent!');
    }
    return (
        <div className="px-20 pb-10">
          <h1 className="text-6xl font-extrabold text-center pb-5">Contact</h1>
          <br />
          <p className="mb-3 text-lg md:text-xl text-gray-400 text-center pb-14 px-2">
            You can directly contact me through the following form or the social links given in the footer.
          </p>
          <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Joe Biden" required />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@email.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea value={text} onChange={(e)=>{setText(e.target.value)}} rows={4} className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" id="contact-button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Send Message</button>
          </form>
          <div className="flex flex-row justify-center md:my-10 mt-10">
            <a href="https://github.com/celestix">
              <GithubButton />
            </a>
            <a href="https://twitter.com/TheVeerRana">
              <TwitterButton />
            </a>
            <a href="https://t.me/coswand" className="md:block" hidden>
              <TelegramButton />
            </a>
            <a href="https://discordapp.com/users/1030177080324935720" className="md:block" hidden>
              <DiscordButton />
            </a>
          </div>
          <div className="flex flex-row justify-center">
            <a href="https://t.me/coswand" className="md:hidden">
              <TelegramButton />
            </a>
            <a href="https://discordapp.com/users/1030177080324935720" className="md:hidden">
              <DiscordButton />
            </a>
          </div>
        </div> 
    )
}