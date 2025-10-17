"use client";
import SectionHeader from "@/components/SectionHeader";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { skills } from "@/data";
import { useIsMobile } from "@/hooks/useWindowSize";
import { SkillType } from "@/type";

export default function Skill() {
  const isMobile = useIsMobile();
  const patternMdtoLgDevice = [6, 5, 4, 3, 4, ];
  const patternSmDevice = [4, 4, 4, 4, 4];
  const rowPattern = isMobile ? patternSmDevice : patternMdtoLgDevice;

  console.log(isMobile)
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
      <SectionHeader
        title="Technologies I have worked with"
        subtitle="From backend logic to frontend finesse—here's what I build with"
        titleClassName="bg-gradient-to-r from-blue-500 via-primary to-zinc-500  bg-clip-text text-transparent"
        subtitleClassName=""
      />

      <div className="bg-white/5 backdrop-blur-md  rounded-3xl p-8">
        {skillRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-between  gap-4 px-4 mb-4 flex-wrap `}
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
