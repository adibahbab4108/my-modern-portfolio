import Image from "next/image";

export default function SkillSetCard(
  skill: {
    id: number;
    name: string;
    image: string;
    imageClass?: string;
  },
  togglePattern: boolean
) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-4 border items-center border-zinc-700 rounded-full ">
        <Image
          src={skill.image}
          alt={skill.name}
          width={60}
          height={60}
          className={`${skill.imageClass}`}
        />
      </div>
      {togglePattern && <p className="text-primary">{skill.name}</p>}
    </div>
  );
}
