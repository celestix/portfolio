export default function Home() {
  return (
    <div class="flex justify-center items-center py-48">
      <div class="xl:left-content">
        <div class="min-[1640px]:text-9xl min-[1400px]:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold">
          <p class="pt-8 lg:pb-8 md:pb-6 pb-2">Hello,</p>
          <p class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">I am <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Celestix</span></p>
        </div>
      </div>
      <div class="xl:right-content mx-36 rounded-lg overflow-hidden xl:block" hidden>
        <img src="https://avatars.githubusercontent.com/u/73958752" class="pointer-events-none" alt="github profile logo"/>
      </div>
    </div>
  )
}