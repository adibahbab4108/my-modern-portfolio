import { cn } from "@/utils/cn";
import Image from "next/image";
import { WavyBackground } from "./WavyBackground";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  icon,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between  space-y-4 rounded-3xl border-8 border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden ",
        className
      )}
    >
      {/* Image div */}
      <div id="image" className="">
        {img && (
          <Image
            src={img}
            alt={typeof title === "string" ? title : ""}
            fill
            // width={200}
            // height={200}
            className={cn(
              "group-hover/bento:scale-105 transition duration-500 object-cover ",
              imgClassName
            )}
          />
        )}
      </div>

      {/* Text div */}
     {id!=5 && <div
        className={cn(
          "flex flex-col h-full w-full text-neutral-60 relative group-hover/bento:translate-x-2 transition duration-500 mt-2 mb-2 font-sans font-bold  text-xl dark:text-neutral-200",
          titleClassName
        )}
      >
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>}

      {id === 5 && (
        <WavyBackground>
          <div
            className={cn(
              " flex flex-col h-full w-full text-neutral-60 relative group-hover/bento:translate-x-2 transition duration-500 mt-2 mb-2 font-sans font-bold  text-xl dark:text-neutral-200",
              titleClassName
            )}
          >
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>
        </WavyBackground>
      )}
    </div>
  );
};
