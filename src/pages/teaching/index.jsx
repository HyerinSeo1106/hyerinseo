import SyllabusPdf from "../../assets/etc/pls202_24spring_syllabus.pdf";
import SurbeyImg1 from "../../assets/images/surbey1.png";
import SurbeyImg2 from "../../assets/images/surbey2.png";
import imgnew1 from "C:/Users/wayhr/OneDrive - Michigan State University/Desktop/PLS202_24SS/q1_plot.png";
import imgnew2 from "C:/Users/wayhr/OneDrive - Michigan State University/Desktop/PLS202_24SS/q2_plot.png";

export default function TeachingPage() {
  return (
    <section className="main-section">
      <div>
        <h2 className="sub-title">TEACHING</h2>
        <ul className="list">
          <li>
            <a className="bold">PLS 202: Introduction to Data Analytics, Instructor (Spring 2024; Summer
            2024; Fall 2024 )</a>
          </li>
              <li>
                <a href={SyllabusPdf} target="__blank">
                Syllabus
                </a>
              </li>
              <h3 className="sub-title">Good Reviews in survey from students</h3>
        <ul className="list">
          <li>
            "Dr. Seo had excellent presentations and did a fantastic job
            explaining all of the code we were using. Additionally, Seo did a
            great job answering questions and was helpful in expanding my
            understanding of the course content outside of the classroom."
          </li>
          <li>
            "The instructor was absolutely fantastic. She was also available to
            awnser questions and explained the concepts in a way that someone
            that has never programmed before could understand. I really
            appreciated the way that she made the class. I had never taken a
            programming class before, and this class was perfect for being
            introduced to it. I appreciated the way that the concepts were
            taught and how I was able to access the instructor on slack for help
            at any time."
          </li>
          <li>
            "I really, really liked the professor. She was always very nice and
            willing to help with any questions I had. I sat up in the front so
            that I could really pay attention and it made a huge difference. I
            would stress how important coming to class is to the future students
            because if I hadn't gone to all the classes it would have been a lot
            harder."
          </li>
          <li>
            "This was one of my favorite courses that I have taken at my time
            with MSU. I really enjoyed the format, the assignments, the content
            itself as well as the teaching."
          </li>
        </ul>
        <h3 className="sub-title">Notable survey answers</h3>
        <ul className="list">
          <li>
            While more than 40% of students answered that they did not have any
            experience in data analysis before the class, almost 90% of them
            became slightly or very confident in data analysis after the class.{" "}
          </li>
        </ul>
        <img src={imgnew1} alt="" style={{ marginTop: "2rem" }} />
        <img src={imgnew2} alt="" />
          <li>
            Research Methods, Teaching Assistant for workshops, lab sessions,
            and introductory methods class in political science (Fall 2023 –
            Spring 2024)
          </li>
          <li>
            PLS 200: Introduction to Political Science by Prof. Erica Frantz,
            Teaching Assistant (Fall 2022; Fall 2021)
          </li>
          <li>
            ISS 318: Pandemics and Social Science by Prof. Erica Frantz,
            Teaching Assistant (Summer 2022)
          </li>
          <li>
            PLS 201: Introduction to Methods of Political Analysis by Prof.
            Andrew Kerner, Teaching Assistant (Spring 2022; Summer 2021)
          </li>
          <li></li>
        </ul>
        <h2 className="sub-title">SKILLS</h2>
        <ul className="list">
          <li>Software: R, Python</li>
          <li>
            Language: Korean (native), English (professional fluency), Japanese
            (intermediate)
          </li>
        </ul>
        <h2 className="sub-title">WORK EXPERIENCE</h2>
        <ul className="list">
          <li>
            Planning assistant, Olympic Broadcasting Services, Pyeongchang,
            Republic of Korea, headquartered in Madrid (September 2017 – March
            2018)
          </li>
          <li>
            Intern, Stockholm International Peace Research Institute, Stockholm,
            Sweden (August 2015 – June 2016)
          </li>
          <li>
            Intern, East Asia Foundation, Seoul, Republic of Korea (January –
            June 2013)
          </li>
        </ul>
      </div>
    </section>
  );
}
