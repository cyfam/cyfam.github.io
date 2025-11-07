import { Education } from "@/types/resume";


export default function EducationList({school, gpa, degree, graduation_date}: Education) {
  return (
    <div>
        <dl className="p-5 flex flex-col items-center">
            <dt>{school}</dt>
            <dd>{gpa}</dd>
            <dt>{degree}</dt>
            <dd>{graduation_date}</dd>
        </dl>
    </div>
  );
}


