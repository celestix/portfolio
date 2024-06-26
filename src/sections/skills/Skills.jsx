import SkillBar from "../../components/bar/SkillBar";

export default function Skills() {
    return (
        <div class="px-20 pb-10">
            <h1 class="text-6xl font-extrabold text-center pb-5">Skills</h1>
            <br />
            <div class="text-gray-400">
            <p class="mb-3 text-lg md:text-xl text-gray-400 text-center pb-14 px-2">
                As a dedicated backend developer, I possess a diverse set of technical skills that enable me to build robust and scalable solutions. My expertise includes:
            </p>
            <div class="flex xl:flex-row flex-col text-white px-2">
                <div class="py-3 px-10 basis-1/3">
                    <h4 class="text-4xl font-bold py-3">Languages</h4>
                    <ul class="font-bold text-2xl px-2 py-3">
                        <li class="py-2">
                        <SkillBar name="Python" progress="80%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Go" progress="90%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Rust" progress="60%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="C/C++" progress="70%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Dart" progress="75%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Javascript" progress="55%" />
                        </li>
                    </ul>
                </div>
                <div class="py-3 px-10 basis-1/3">
                    <h4 class="text-4xl font-bold py-3">Databases</h4>
                    <ul class="font-bold text-2xl px-2 py-3">
                        <li class="py-2">
                        <SkillBar name="PostgreSQL" progress="85%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="MySQL" progress="70%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="MongoDB" progress="74%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="SQLite" progress="90%" />
                        </li>
                    </ul>
                </div>
                <div class="py-3 px-10 basis-1/3">
                    <h4 class="text-4xl font-bold py-3">Other Technologies</h4>
                    <ul class="font-bold text-2xl px-2 py-3">
                        <li class="py-2">
                        <SkillBar name="Git" progress="80%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Azure" progress="90%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="AWS" progress="60%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Linux" progress="70%" />
                        </li>
                        <li class="py-2">
                        <SkillBar name="Flutter" progress="70%" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
}