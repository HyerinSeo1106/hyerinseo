import { useState } from "react";
import ProfileImage from "../../assets/images/profile.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MainPage() {
  const [isOpenTooltip1, setIsOpenTooltip1] = useState(false);
  const [isOpenTooltip2, setIsOpenTooltip2] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  return (
    <section className="main-section">
      <div className="thumbnail">
        <img
          src={ProfileImage}
          onLoad={() => {
            setIsLoad(true);
          }}
          alt="profile image"
          style={{ display: isLoad ? "block" : "none" }}
        />
        {!isLoad && <div className="img-loading">Loading..</div>}
        <ul className="my-info card line">
          <li>
            <strong>Hyerin Seo</strong>
            <div>
              <a
                href="https://www.linkedin.com/in/hyerinseo/"
                target="__blank"
                onMouseEnter={() => {
                  setIsOpenTooltip1(true);
                }}
                onMouseLeave={() => {
                  setIsOpenTooltip1(false);
                }}
              >
                <span className={`tooltip ${isOpenTooltip1 ? "show" : "hide"}`}>
                  go LinkedIn
                </span>
                <LinkedInIcon />
              </a>
              &nbsp;&nbsp;
              <a
                href="mailto:seohyeri@msu.edu"
                onMouseEnter={() => {
                  setIsOpenTooltip2(true);
                }}
                onMouseLeave={() => {
                  setIsOpenTooltip2(false);
                }}
              >
                <span className={`tooltip ${isOpenTooltip2 ? "show" : "hide"}`}>
                  send mail
                </span>
                <EmailIcon />
              </a>
            </div>
          </li>
          <li>Ph.D. candidate</li>
          <li>Michigan State University</li>
          <li>Department of Political Science</li>
          <li>230 South Kedzie Hall, East Lansing, MI 48823</li>
        </ul>
      </div>
      <div>
        <p>
          Hello! I am Hyerin Seo, a dedicated Ph.D. candidate in Political
          Science at Michigan State University, poised to enter the job market
          this fall. My academic journey has been driven by a deep curiosity
          about the forces that shape political behavior and the ways in which
          ordinary people engage in the political process.
        </p>

        <p>
          During my Master's studies, I focused on public protests in the Middle
          East, exploring the motivations behind grassroots movements and the
          political actions of everyday citizens. This foundational interest in
          understanding political participation has led me to my current
          research on nationalism, a powerful force shaping public opinion and
          the political landscape across the globe today. My dissertation
          investigates how nationalism is reproduced at the public level, its
          creation and dissemination, and its influence on people's perceptions
          and actions.
        </p>

        <p>
          My current research centers on online discourse about nations in East
          Asia. I analyze how nationalistic sentiments are expressed and
          propagated in digital spaces, utilizing advanced research methods. My
          work includes natural language processing (NLP) of Korean and Japanese
          texts found in online platforms, employing both R and Python to create
          robust academic datasets.
        </p>

        <p>
          In addition to my primary research, I am passionate about embracing
          innovative research methodologies and teaching those methods and
          skills to students. My proficiency in R and Python has enabled me to
          explore new techniques for data analysis, enriching my research and
          contributing to the broader field of Political Science.
        </p>
        <h2 className="sub-title">Education</h2>
        <ul className="list">
          <li>
            Michigan State University (2019 – present)
            <br />- Ph.D. candidate in Political Science
          </li>
          <li>
            Michigan State University (May 2020)
            <br />- M.A. in Political Science
          </li>
          <li>
            Seoul National University, Seoul, Republic of Korea (February 2017)
            <br />- M.A. in Political Science
          </li>
          <li>
            Seoul National University, Seoul, Republic of Korea (February 2014)
            <br />- B.A. in Political Science and International Relations
            <br />- B.A. in Economics (double-major)
          </li>
        </ul>
        <h3 className="sub-title">Extra Education</h3>
        <ul className="list">
          <li>
            Inter-University Consortium for Political and Social Research
            (ICPSR) (Summer 2022)
          </li>
        </ul>
        <h2 className="sub-title">GRANTS & CERTIFICATES</h2>
        <ul className="list">
          <li>William E. Rhode Fellowship (2024)</li>
          <li>Research Grant in Minority Politics (2024)</li>
          <li>
            Certificate in Computational Modeling, College of Engineering,
            Michigan State University (2023)
          </li>
          <li>Fulbright Graduate Study Award (2019 – present)</li>
          <li>
            Lecture & Research Scholarship, Seoul National University (Fall
            2016)
          </li>
          <li>National Research Fellowship for Humanities (Spring 2015)</li>
          <li>
            Infrastructure Establishment Program for Basic Research (Spring 2014
            – Spring 2015)
          </li>
        </ul>
      </div>
    </section>
  );
}
