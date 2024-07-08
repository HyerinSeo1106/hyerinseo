import FightImg from "../../assets/images/fight_kor_jap_re_kor.png";
import FigImg1 from "../../assets/images/fig4_tiff.png";
import FigImg2 from "../../assets/images/fig7_tiff.png";

export default function ResearchPage() {
  return (
    <section className="main-section">
      <div>
        <h2 className="sub-title">RESEARCH AREA</h2>
        <ul className="list">
          <li>
            Comparative Politics, Political Behavior, Political Communication,
            Nationalism, Everyday Nationalism, Public Opinion, Research Methods
          </li>
          <li>Major: Comparative Politics</li>
          <li>Minor: Research Methods</li>
        </ul>
        <h2 className="sub-title">WORK IN PROGRESS</h2>
        <ul className="list">
          <li>
            “Everyday Nationalism in East Asia – Based on Their Out-group
            Hostility to Neighboring Countries” (dissertation project) •
          </li>
          <li>
            “Everyday Nationalism Unleashed Online: Textual Evidence from South
            Korea During the 2022 World Cup Games” (under revision)
          </li>
          <li>
            “Sustainable Energy Transition: Beyond Material Analysis” with
            Annick Anctil and Christian Houle (under review)
          </li>
          <li>
            “Everyday Nationalism Unleashed Online: Textual Evidence from South
            Korea During the 2022 World Cup Games” (under revision)
          </li>
        </ul>
        <h3 className="sub-title">Abstract</h3>
        <ul className="list">
          <li>
            This study explores everyday nationalism in the context of the 2022
            World Cup within Korean online communities, exploring how ordinary
            individuals voluntarily produce and consume nationalism in their
            daily lives. Utilizing structural text analysis on posts and
            comments, it reveals that international sports events intensify
            nationalism by accentuating distinctions between “my” and “other”
            nations. Rather than creating new divides, these events reinforce
            existing national rivalries. Nationalism based on ingroup success
            fosters belonging and empathy, while that rooted in outgroup
            performance displays significant hostility, especially towards
            Japan. Remarkably, this animosity persists despite no direct match
            between Korea and Japan during the World Cup, emphasizing the
            importance of underlying public perceptions of ingroup and outgroup
            in the observed expression of everyday nationalism. The findings
            contribute nuanced insights to the study of nationalism in the
            digital age, elucidating how online interactions shape and influence
            national identity.
          </li>
          <li>
            Keywords: everyday nationalism, online nationalism, East Asia, South
            Korea, text analysis
          </li>
        </ul>
        <img src={FightImg} alt="" style={{ marginTop: "2rem " }} />
        <img src={FigImg1} alt="" />
        <img src={FigImg2} alt="" />
        <h2 className="sub-title">PUBLICATIONS</h2>
        <ul className="list">
          <li>
            “Failure of the Muslim Brotherhood after 2011 Revolution in Egypt –
            Concerning the Ideational Factors of the Brotherhood Leading to Its
            Political Isolation.” 2017, M.A. Thesis.
          </li>
          <li>
            “An Analysis on the Authority of the GCC Based on the Network
            Theory.” The Journal of the Institute of the Middle East Studies,
            2015, 34.1: 23-53
          </li>
          <li>
            <a href="https://hdl.handle.net/10371/134137" target="__blank">
              “Failure of the Muslim Brotherhood after 2011 Revolution in Egypt
              – Concerning the Ideational Factors of the Brotherhood Leading to
              Its Political Isolation.” 2017, M.A. Thesis.
            </a>
          </li>
          <li>
            <a
              href="https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE08841870"
              target="__blank"
            >
              “An Analysis on the Authority of the GCC Based on the Network
              Theory.” The Journal of the Institute of the Middle East Studies,
              2015, 34.1: 23-53
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
