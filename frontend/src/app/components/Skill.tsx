import { skills } from "@/data";
import { SkillType } from "@/type";
import Image from "next/image";

export default function Skill() {
  const rowPattern = [6, 5, 4, 3]; // You can extend or loop this pattern if needed

  const chunkSkills = (skills: SkillType[], pattern: number[]) => {
    const rows = [];
    let i = 0;
    let patternIdx = 0;

    while (i < skills.length) {
      const count = pattern[patternIdx % pattern.length];
      rows.push(skills.slice(i, i + count));
      i += count;
      patternIdx++;
    }
    return rows;
  };

  const skillRows = chunkSkills(skills, rowPattern);

  return (
    <div id="skill" className="pb-20 pt-36">
      {skillRows.map((row, rowIdx) => (
        <div key={rowIdx} className={`flex justify-between  gap-4 px-4 mb-4 flex-wrap `}>
          {row.map((skill, idx) => (
            <div key={idx} className="flex p-4 border border-zinc-700 rounded-full ">
              <Image src={skill.img} alt={skill.name} width={60} height={60} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
