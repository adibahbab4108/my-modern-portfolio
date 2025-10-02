import { AuroraBackground } from "@/components/ui/AururaBackground";
import { BackgroundRippleEffect } from "@/components/ui/BackgroundRippleEffect";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="pb-20 pt-36">
      <AuroraBackground >
        <BackgroundRippleEffect />
        <div className="flex justify-center relative my-20 z-10">
          <div className="flex flex-col text-center justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] ">
            <p className="uppercase text-center dark:text-blue-100 md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Adib
            </p>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming concepts into seamless digital experiences with clean code and creative design"
            />
            <h2 className="uppercase text-xs text-center text-blue-100 max-w-80 tracking-widest">
              DYNAMIC | DEDICATED 
            </h2>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}