import "../about.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component.jsx";
import { BtnLinkOut } from "../../../components/Buttons/btnLinkOut/btnLinkOut.component.jsx";
import { SkillsSet } from "../../../components/SkillsSet/skillsSet.component.jsx";

export function AboutView({ isDarkMode }) {
  return (
    <>
      <section className={`about-section ${isDarkMode ? "dark" : ""}`}>
        <HeaderButtonGroup />
        <div className="about-section-content">
          <h1 className="about-section-title">About me</h1>
          <p className="about-section-text">
            Hi, I&apos;m Kim, a web developer based in Munich. Currently,
            I&apos;m in the midst of the DCI Web Development Course, set to wrap
            up in February 2024.
            <br />
            <br />
            Coming from a different academic background in economics and audit
            and starting this journey a bit later in life, I am truly happy with
            the decision to dive into the world of web development. My prior
            experience has equipped me with valuable skills such as precision,
            agility, and a strong customer-oriented mindset, which I am eager to
            apply in this field. Learning web development has allowed me to
            align my passion with my profession, and I can&apos;t wait to keep
            expanding my horizons and acquiring new skills.
            <br />
            <br />
            My goal is to always prioritize attention to detail and strive for
            code that&apos;s clear, easy to read and easy to work with. I also
            believe that, besides technical expertise, being a team player and
            supporting each other are equally vital aspects of a successful
            career in web development. That&apos;s why I not only enjoy working
            on my own but also love collaborating together. I can&apos;t wait to
            connect with amazing companies and colleagues on this exciting path.
          </p>
          <div className="about-section-btn-container">
            <BtnLinkOut
              link={
                "https://drive.google.com/file/d/10inMM1RXW4HN64rd22wloKaLonK87h03/view?usp=sharing"
              }
              text={"View my resume "}
              icon={<i className="btn-icon fa-solid fa-download"></i>}
              title={"Click to open my resume as a PDF."}
            />
          </div>

          <div className="skillsSet-container">
            <p className={`skillsSet-text ${isDarkMode ? "dark" : ""}`}>
              These are, but not limited to, the skills and tools I use to bring
              ideas to life in the browser:
            </p>
            <SkillsSet />
          </div>
        </div>
      </section>
    </>
  );
}
