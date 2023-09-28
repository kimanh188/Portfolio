import "../about.style.css";

import { HeaderButtonGroup } from "./../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { BtnLinkOut } from "../../../components/Buttons/btnLinkOut/btnLinkOut.component";
import { SkillsSlider } from "./../../../components/SkillsSlider/skillsSlider.component";

export function AboutView() {
  return (
    <>
      <HeaderButtonGroup />
      <section className="about">
        <h1 className="about-title">About me</h1>
        <p className="about-text">
          Hi, I am a web developer based in Munich, and I recently completed the
          DCI Web Development Coding Course. Throughout the course, I&apos;ve
          honed my skills in crafting elegant websites and web applications.{" "}
          <br />
          <br />
          Passionate about writing clean, high-quality code, my focus is on
          building solutions that are not only functional but also scalable and
          easily maintainable.
          <br />
          <br />
          I&apos;m comfortable working on my own, but collaborating with a team
          also gives me great enjoyment. I&apos;m excited to connect with
          companies and colleagues that inspire me!
        </p>
        <BtnLinkOut
          link={"/"}
          text={"View my resume "}
          icon={<i className="btn-icon fa-solid fa-download"></i>}
        />
        <SkillsSlider />
      </section>
    </>
  );
}
