export default function SectionHeader({
  title,
  subtitle,
  titleClassName,
  subtitleClassName
}: {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold mb-2 ${titleClassName}`}>{title}</h2>
      <p className={`text-lg text-gray-400 ${subtitleClassName}`}>{subtitle}</p>
    </div>
  );
}
