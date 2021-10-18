import GraphQLIcon from "@/icons/graphql.svg";
import JavascriptIcon from "@/icons/javascript.svg";
import LaravelIcon from "@/icons/laravel.svg";
import NextJsIcon from "@/icons/nextjs.svg";
import nginxIcon from "@/icons/nginx.svg";
import NodeJsIcon from "@/icons/nodejs.svg";
import PhpIcon from "@/icons/php.svg";
import ReactIcon from "@/icons/react.svg";
import TypescriptIcon from "@/icons/typescript.svg";
import { useTranslation } from "react-i18next";
import { Section } from "../Section";
import styles from "./Technologies.module.scss";

export interface Skill {
  name: string;
  icon: any;
}

const skills: Skill[] = [
  { name: "React", icon: ReactIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "NGINX", icon: nginxIcon },
];

export const Technologies = () => {
  const { t } = useTranslation("technologies");

  return (
    <Section id="technologies">
      <h1>{t("sections:technologies")}</h1>
      <p className={styles.skillsDescription}>
        {t("technologies:description")}
      </p>
      <div className={styles.skillsContainer}>
        {skills.map((s) => (
          <div key={s.name} className={styles.skillCard}>
            <s.icon />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
