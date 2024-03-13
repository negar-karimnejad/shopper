function SectionHeader({ title }) {
  return (
    <div className="mb-10 mt-20 flex w-full flex-col items-center justify-center gap-3">
      <h2 className="text-3xl font-bold uppercase text-slate-800 dark:text-slate-200">
        {title}
      </h2>
      <span className="h-1 w-40 rounded-full bg-slate-800 dark:bg-slate-200"></span>
    </div>
  );
}

export default SectionHeader;
