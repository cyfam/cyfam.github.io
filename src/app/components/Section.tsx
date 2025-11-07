export default function Section({title, children}:{title: string; children:React.ReactNode}) {
  // Completed component - use as is
  return (
    <section>
      <h2 className="p-2.5 pt-10 text-2xl font-bold flex justify-center">{title}</h2>  
      {children}
    </section>

  );
}
