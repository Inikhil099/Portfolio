function SectionBlock({ title, children }) {
  return (
    <div className="rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <hr className="my-3 border-slate-200" />
      <div className="prose prose-slate max-w-none text-sm">{children}</div>
    </div>
  );
}

export default SectionBlock;