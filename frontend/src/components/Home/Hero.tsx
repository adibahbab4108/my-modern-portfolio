import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundRippleEffect } from "../ui/BackgroundRippleEffect";
import { AuroraBackground } from "../ui/AururaBackground";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <AuroraBackground>
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
              Dynamic Web Magic with Next.js
            </h2>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
