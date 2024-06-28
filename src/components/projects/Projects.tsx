import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
    return (
        <div className="md:px-20 px-10 pb-10">
          <h1 className="text-6xl font-extrabold text-center pb-14">Projects</h1>
          <br />
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center justify-center">
            <ProjectCard 
                name="Galactron" 
                description="A powerful Telegram bot to help people with channel management, written in Go." 
                link="https://t.me/GalactronBot"
            />
            <ProjectCard 
                name="GoTGProto" 
                description="A package that aims to make td's raw functions easy-to-use with the help of features like using session strings, custom helper functions, storing peers and extracting chat or user ids through it etc. It is written in Go." 
                link="https://github.com/celestix/gotgproto"
            />
            <ProjectCard 
                name="WarpDL" 
                description="WarpDL is a powerful and versatile cross-platform download manager. With its advanced technology, It has the ability to accelerate your download speeds by up to 10 times, revolutionizing the way you obtain files on any operating system." 
                link="https://github.com/warpdl/warpdl"
            />
            <ProjectCard 
                name="AgroConnect" 
                description="AgroConnect is a one-place app that provides direct-to-consumer services such as buying and selling crops, cutting out the middleman, and more." 
                link="https://github.com/celestix/agroconnect"
            />
            <ProjectCard 
                name="Ferrisgram" 
                description="FerrisGram is an asynchronous autogenerated wrapper for the Telegram Bot API written in Rust. This library provides all the methods and types that are available on the official Telegram Bot API." 
                link="https://github.com/ferrisgram/ferrisgram"
            />
            <ProjectCard 
                name="Srink" 
                description="It is a robust URL shortener service developed in Go and backed by PostgreSQL. Designed for efficiency and scalability, Srink enables users to shorten long URLs into manageable links while maintaining reliable performance and data integrity." 
                link="https://github.com/srinkco/srink"
            />
            <ProjectCard 
                name="SkyBox" 
                description="It is a high-performance file server written in Rust, ensuring secure and efficient file storage and retrieval. It leverages Rust's memory safety and concurrency features for reliable and fast operations." 
                link="https://github.com/celestix/skybox"
            />
          </div>
        </div>
    )
}