import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { aboutMeItems } from "@/data";

export default function About() {
  return (
   <section id="about">
      <BentoGrid>
        {aboutMeItems.map((item, idx) => (
          <BentoGridItem
            key={idx}
            id={idx}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}