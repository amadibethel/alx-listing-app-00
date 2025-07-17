const Pill = ({ label }: { label: string }) => {
  return (
    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
      {label}
    </span>
  );
};

export default Pill;
