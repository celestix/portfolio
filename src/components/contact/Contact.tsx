import DiscordButton from "@/components/buttons/discord";
import GithubButton from "@/components/buttons/github";
import TelegramButton from "@/components/buttons/telegram";
import TwitterButton from "@/components/buttons/twitter";

export default function Contact() {
    return (
        <div className="px-20 pb-10">
          <h1 className="text-6xl font-extrabold text-center pb-5">Contact</h1>
          <br />
          <p className="mb-3 text-lg md:text-xl text-gray-400 text-center pb-14 px-2">
            You can directly contact me through the following form or the social links given in the footer.
          </p>
          <form className="mx-auto max-w-lg">
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
              <input type="text" id="name" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Joe Biden" required />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@email.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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