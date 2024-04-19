interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h1>{title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-center text-[#CBD5E1]"
      />
    </div>
  );
};

export default SectionTitle;
