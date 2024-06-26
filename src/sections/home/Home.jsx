export default function Home() {
  return (
    <div class="flex justify-center items-center pt-20 pb-44">
      <div class="left-content">
        <div class="text-9xl font-extrabold">
          <p class="py-8">Hello,</p>
          <p class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">I am <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Celestix</span></p>
        </div>
      </div>
      <div class="right-content mx-36 rounded-lg opacity-90 hover:opacity-100 overflow-hidden animate-pulse">
        <img src="https://avatars.githubusercontent.com/u/73958752" class="pointer-events-none" alt="github profile logo"/>
      </div>
    </div>
  )
}