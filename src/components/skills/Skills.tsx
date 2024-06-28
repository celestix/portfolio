import SkillBar from "@/components/bar/SkillBar";

export default function Skills() {
    return (
        <div className="md:px-20 px-5 pb-10">
            <h1 className="text-6xl font-extrabold text-center pb-5">Skills</h1>
            <br />
            <div className="text-gray-400">
            <p className="mb-3 text-lg md:text-xl text-gray-400 text-center pb-14 px-2">
                As a dedicated backend developer, I possess a diverse set of technical skills that enable me to build robust and scalable solutions. My expertise includes:
            </p>
            <div className="flex lg:flex-row flex-col text-white px-2">
                <div className="py-3 px-10 basis-1/3">
                    <h4 className="text-4xl font-bold py-3">Languages</h4>
                    <ul className="font-bold text-2xl px-2 py-3">
                        <li className="py-2">
                        <SkillBar name="Python" progress="80%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Go" progress="90%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Rust" progress="60%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="C/C++" progress="70%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Dart" progress="75%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Javascript" progress="55%" />
                        </li>
                    </ul>
                </div>
                <div className="py-3 px-10 basis-1/3">
                    <h4 className="text-4xl font-bold py-3">Databases</h4>
                    <ul className="font-bold text-2xl px-2 py-3">
                        <li className="py-2">
                        <SkillBar name="PostgreSQL" progress="85%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="MySQL" progress="70%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="MongoDB" progress="74%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="SQLite" progress="90%" />
                        </li>
                    </ul>
                </div>
                <div className="py-3 px-10 basis-1/3">
                    <h4 className="text-4xl font-bold py-3">Other Technologies</h4>
                    <ul className="font-bold text-2xl px-2 py-3">
                        <li className="py-2">
                        <SkillBar name="Git" progress="80%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Azure" progress="90%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="AWS" progress="60%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Linux" progress="70%" />
                        </li>
                        <li className="py-2">
                        <SkillBar name="Flutter" progress="70%" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
}