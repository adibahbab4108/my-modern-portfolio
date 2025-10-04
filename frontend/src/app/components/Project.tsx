import SectionHeader from "@/components/SectionHeader";

export default function Project() {
  return (
    <div id="project" className="pb-20 pt-36">
      <SectionHeader
        title="My Projects"
        titleClassName="bg-gradient-to-r from-primary via-blue-400 to-zinc-500 w-fit mx-auto bg-clip-text text-transparent"
      />
      <div className="text-center py-10">
        <p className="text-gray-500">Projects will be added soon...</p>
      </div>
    </div>
  );
}
