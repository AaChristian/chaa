import styles from "../styles/Skills.module.scss";
import ReactIcon from "../public/images/react.svg";
import JavascriptIcon from "../public/images/javascript.svg";
import NodeJsIcon from "../public/images/nodejs.svg";
import TypescriptIcon from "../public/images/typescript.svg";
import ExpressIcon from "../public/images/express.svg";
import GraphQLIcon from "../public/images/graphql.svg";
import NextJsIcon from "../public/images/nextjs.svg";
import PhpIcon from "../public/images/php.svg";
import LaravelIcon from "../public/images/laravel.svg";
import nginxIcon from "../public/images/nginx.svg";

export interface Skill {
  name: string;
  icon: any;
}

const skills: Skill[] = [
  { name: "React", icon: ReactIcon },
  { name: "Javascript", icon: JavascriptIcon },
  { name: "Typescript", icon: TypescriptIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "NGINX", icon: nginxIcon },
];

export const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((s) => (
        <div key={s.name} className={styles.skillCard}>
          <s.icon />
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  );
};
