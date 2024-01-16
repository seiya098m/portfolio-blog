const SectionHeading = ({ heading }) => {
  return (
    <>
      <div className="py-6">
        <h1 className="border-b px-4 py-2 text-2xl font-bold shadow-black drop-shadow-lg">
          {heading}
        </h1>
      </div>
    </>
  );
};

export default SectionHeading;
