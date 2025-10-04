import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { aboutMeItems } from "@/data";

export default function About() {
  return (
   <section id="about" className="pt-36 pb-20">
      <BentoGrid>
        {aboutMeItems.map((item, idx) => (
          <BentoGridItem
            key={idx}
            id={idx}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.image}
            imgClassName={item.imageClassName}
            titleClassName={item.titleClassName}
            spareImg={item.sparseImage}
          />
        ))}
      </BentoGrid>
    </section>
  );
}