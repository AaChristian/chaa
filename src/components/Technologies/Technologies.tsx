import styles from "./Technologies.module.scss";
import ReactIcon from "@/images/react.svg";
import JavascriptIcon from "@/images/javascript.svg";
import NodeJsIcon from "@/images/nodejs.svg";
import TypescriptIcon from "@/images/typescript.svg";
import ExpressIcon from "@/images/express.svg";
import GraphQLIcon from "@/images/graphql.svg";
import NextJsIcon from "@/images/nextjs.svg";
import PhpIcon from "@/images/php.svg";
import LaravelIcon from "@/images/laravel.svg";
import nginxIcon from "@/images/nginx.svg";

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

export const Technologies = () => {
  return (
    <div className="section" id="technologies">
      <h1>Technologies I know</h1>
      <div className={styles.skillsContainer}>
        {skills.map((s) => (
          <div key={s.name} className={styles.skillCard}>
            <s.icon />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
