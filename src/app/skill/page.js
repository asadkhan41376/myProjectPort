import React from "react";
import "@/app/skill/skill.scss";

import SkillCard from "@/components/SkillCard";

function page() {
  return (
    <>
      <section className="skill">
        <SkillCard SkillName="Html"/>
        <SkillCard SkillName="Css"/>
        <SkillCard SkillName="Js" />
      </section>
    </>
  );
}

export default page;
