import ContactIcon from "@/shared/components/images/contact-icon";
import EducationIcon from "@/shared/components/images/education-icon";
import ExperienceIcon from "@/shared/components/images/experience-icon";
import ProjectsIcon from "@/shared/components/images/projects-icon";
import SkillsIcon from "@/shared/components/images/skills-icon";

export default function HeroButton({
  text,
  color,
  icon,
}: {
  text: string;
  color: string;
  icon: string;
}) {
  return (
    <button className="group relative m-[6] flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 transition group-hover:brightness-75"
        style={{ backgroundColor: color }}
      />

      <div className="z-10 flex flex-col items-center justify-center">
        {icon == "projects" ? <ProjectsIcon className="size-25" /> : null}
        {icon == "experience" ? <ExperienceIcon className="size-25" /> : null}
        {icon == "skills" ? <SkillsIcon className="size-23" /> : null}
        {icon == "education" ? <EducationIcon className="size-25" /> : null}
        {icon == "contact" ? <ContactIcon className="size-23" /> : null}
        <p className="mt-2 text-4xl font-bold">{text}</p>
      </div>
    </button>
  );
}
