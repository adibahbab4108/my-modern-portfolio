"use client";
import SectionHeader from "@/components/SectionHeader";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { skills } from "@/data";
import { SkillType } from "@/type";
import { useState } from "react";

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


export default function Skill() {
  const [togglePattern, setTogglePattern] = useState(true);
  const patternOne = [6, 5, 4, 3, 4];
  const patternTwo = [4, 4, 4, 4, 4];

  const skillRows = togglePattern
    ? chunkSkills(skills, patternOne)
    : chunkSkills(skills, patternTwo);

  const handleTogglePattern = () => {
    setTogglePattern(prev=>!prev);
  };

  return (
    <div id="skill" className="pb-20 pt-36">
      <SectionHeader
        title="Technologies I have worked with"
        subtitle="From backend logic to frontend finesse—here's what I build with"
        titleClassName="bg-gradient-to-r from-blue-500 via-primary to-zinc-500  bg-clip-text text-transparent"
        subtitleClassName=""
      />

      <div className="relative z-20 bg-white/5 backdrop-blur-md  rounded-3xl p-8 mt-30">
        <div className=" absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={handleTogglePattern}
            className="text-primary bg-white/5 backdrop-blur-md group px-6 py-2 my-6 rounded-t-xl cursor-pointer active:text-lg transition-all duration-100 border-t"
          >
            View
            <span className="absolute bottom-0 left-1/2 w-1 h-[1px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-white/10"></span>
          </button>
        </div>
        {skillRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-between  gap-4 px-4 mb-4 flex-wrap`}
          >
            {row.map((skill, idx) => (
              // without tooltip
              // <SkillSetCard key={idx} {...skill} />

              // with tooltip
              <AnimatedTooltip key={idx} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

