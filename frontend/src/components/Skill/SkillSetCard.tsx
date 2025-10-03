import Image from "next/image";

export default function SkillSetCard(skill: {
  id: number;
  name: string;
  image: string;
  imageClass?: string;
}) {
  return (
    <div>
      <div className="flex p-4 border items-center border-zinc-700 rounded-full ">
        <Image
          src={skill.image}
          alt={skill.name}
          width={60}
          height={60}
          className={`${skill.imageClass}`}
        />
      </div>
    </div>
  );
}
