import { useState } from "react";
import { Link } from "@mui/material";

import SyllabusPdf from "../../assets/etc/pls202_24spring_syllabus.pdf";
import imgnew1 from "../../assets/images/q1_plot.png";
import imgnew2 from "../../assets/images/q2_plot.png";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function TeachingPage() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <section className="main-section">
      <div>
        <h2 className="sub-title">TEACHING</h2>
        <Card>
          <CardHeader
            title="PLS 202"
            subheader="Introduction to Data Analytics, Instructor (Spring 2024; Summer 2024; Fall 2024"
          />
          <CardContent>
            <h3 className="sub-title">
              <ReviewsIcon /> Reviews from Students
            </h3>
            <ul className="list">
              <li>
                "Dr. Seo had excellent presentations and did a fantastic job
                explaining all of the code we were using. Additionally, Seo did
                a great job answering questions and was helpful in expanding my
                understanding of the course content outside of the classroom."
              </li>
              <li>
                "The instructor was absolutely fantastic. She was also available
                to awnser questions and explained the concepts in a way that
                someone that has never programmed before could understand. I
                really appreciated the way that she made the class. I had never
                taken a programming class before, and this class was perfect for
                being introduced to it. I appreciated the way that the concepts
                were taught and how I was able to access the instructor on slack
                for help at any time."
              </li>
              <li>
                "I really, really liked the professor. She was always very nice
                and willing to help with any questions I had. I sat up in the
                front so that I could really pay attention and it made a huge
                difference. I would stress how important coming to class is to
                the future students because if I hadn't gone to all the classes
                it would have been a lot harder."
              </li>
              <li>
                "This was one of my favorite courses that I have taken at my
                time with MSU. I really enjoyed the format, the assignments, the
                content itself as well as the teaching."
              </li>
            </ul>
            <h3 className="sub-title">
              <AnalyticsIcon /> Survey Results of Learning Data Analytics
            </h3>
            <ul className="list">
              <li>
                While more than 40% of students answered that they did not have
                any experience in data analysis before the class, almost 90% of
                them became slightly or very confident in data analysis after
                the class.{" "}
              </li>
              <img src={imgnew1} alt="" style={{ marginTop: "2rem" }} />
              <img src={imgnew2} alt="" />
              <li>
                Research Methods, Teaching Assistant for workshops, lab
                sessions, and introductory methods class in political science
                (Fall 2023 – Spring 2024)
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Link
              size="medium"
              variant="contained"
              href={SyllabusPdf}
              target="__blank"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <OpenInNewIcon /> Show Syllabus
            </Link>
          </CardActions>
        </Card>
        <ul className="list" style={{ marginTop: "2rem" }}>
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
