import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReacttable,
  SiRedux,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiGnome,
  SiAskubuntu,
  SiUbuntu,
  SiArchlinux,
} from "react-icons/si";

const skillsData = [
  {
    id: 1,
    skill: "FRONT-END",
    skills: new Map([
      ["HTML5", SiHtml5],
      ["CSS3", SiCss3],
      ["Tailwind CSS", SiTailwindcss],
      ["JavaScript", SiJavascript],
      ["ReactJS", SiReacttable],
    ]),
  },
  {
    id: 2,
    skill: "BACK-END",
    skills: new Map([
      ["NodeJS", SiNodedotjs],
      ["ExpressJS", SiExpress],
    ]),
  },
  {
    id: 3,
    skill: "APPLICATIONS STATE MANAGMENT",
    skills: new Map([["ContextAPI", SiRedux]]),
  },
  {
    id: 4,
    skill: "DATABASE",
    skills: new Map([["PostgreSQL", SiPostgresql]]),
  },
  {
    id: 5,
    skill: "OTHER",
    skills: new Map([
      ["Gnome", SiGnome],
      ["Ubuntu", SiUbuntu],
      ["Ask Ubuntu", SiAskubuntu],
      ["Arch Linux", SiArchlinux],
    ]),
  },
];

export default skillsData;
