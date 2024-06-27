import DiscordButton from "../../components/buttons/discord";
import GithubButton from "../../components/buttons/github";
import TelegramButton from "../../components/buttons/telegram";
import TwitterButton from "../../components/buttons/twitter";

export default function Contact() {
    return (
        <div class="px-20 pb-10">
          <h1 class="text-6xl font-extrabold text-center pb-5">Contact</h1>
          <br />
          <p class="mb-3 text-lg md:text-xl text-gray-400 text-center pb-14 px-2">
            You can directly contact me through the following form or the social links given in the footer.
          </p>
          <form class="mx-auto max-w-lg">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-white">Your name</label>
              <input type="text" id="name" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Joe Biden" required />
            </div>
            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@email.com" required />
            </div>
            <div class="mb-5">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
          <div class="flex flex-row justify-center md:my-10 mt-10">
            <a href="https://github.com/celestix">
              <GithubButton />
            </a>
            <a href="https://twitter.com/TheVeerRana">
              <TwitterButton />
            </a>
            <a href="https://t.me/coswand" class="md:block" hidden>
              <TelegramButton />
            </a>
            <a href="https://discordapp.com/users/1030177080324935720" class="md:block" hidden>
              <DiscordButton />
            </a>
          </div>
          <div class="flex flex-row justify-center">
            <a href="https://t.me/coswand" class="md:hidden">
              <TelegramButton />
            </a>
            <a href="https://discordapp.com/users/1030177080324935720" class="md:hidden">
              <DiscordButton />
            </a>
          </div>
        </div> 
    )
}