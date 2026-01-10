import ContactIcon from "@/shared/components/images/contact-icon";
import EducationIcon from "@/shared/components/images/education-icon";
import ExperienceIcon from "@/shared/components/images/experience-icon";
import ProjectsIcon from "@/shared/components/images/projects-icon";
import SkillsIcon from "@/shared/components/images/skills-icon";
import { useRouter } from "next/navigation";

export default function HeroButton({
  text,
  color,
  icon,
}: {
  text: string;
  color: string;
  icon: string;
}) {
  const router = useRouter();

  return (
    <button
      style={{ backgroundColor: color }}
      className="relative m-[6] flex flex-1 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl transition hover:scale-105 hover:brightness-115 focus:scale-105"
      onClick={() => router.push(`/${icon}`)}
    >
      {icon == "projects" ? (
        <ProjectsIcon className="size-25 fill-white" />
      ) : null}
      {icon == "experience" ? (
        <ExperienceIcon className="size-25 fill-white" />
      ) : null}
      {icon == "skills" ? <SkillsIcon className="size-23 fill-white" /> : null}
      {icon == "education" ? (
        <EducationIcon className="size-25 fill-white" />
      ) : null}
      {icon == "contact" ? (
        <ContactIcon className="size-23 fill-white" />
      ) : null}
      <p className="mt-2 text-4xl font-bold">{text}</p>
    </button>
  );
}
