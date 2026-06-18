export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="sec-head reveal">
      <span className="sec-eyebrow">{eyebrow}</span>
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}
