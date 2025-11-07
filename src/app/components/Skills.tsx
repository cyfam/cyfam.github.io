type Skills = {
  skills: string[];
}

export default function Skills({skills}: Skills) {
  const skillList = skills.map((string, i) => {
    return <li className="" key={i}>{string}</li>
  });

  return (
    <div>
      <ul className="flex flex-col p-5 items-center">
        {skillList}
      </ul>
    </div>
  );
}
