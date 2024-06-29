export default async function Hero() {
  return (
    <div className="flex justify-center items-center py-48">
      <div className="xl:left-content">
        <div className="min-[1640px]:text-9xl min-[1400px]:text-8xl md:text-7xl text-7xl font-extrabold">
          <p className="pt-8 lg:pb-8 md:pb-6 pb-2">Hello,</p>
          <p id="typed-intro" className="md:animate-typing overflow-hidden whitespace-nowrap md:border-r-4 md:border-r-white">I am <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Celestix</span></p>
        </div>
      </div>
      <div className="xl:right-content mx-36 rounded-lg overflow-hidden xl:block" hidden>
        <img src="https://avatars.githubusercontent.com/u/73958752" className="pointer-events-none" alt="github profile logo"/>
      </div>
    </div>
  )
}