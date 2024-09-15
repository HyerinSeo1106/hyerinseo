import FightImg from "../../assets/images/fight_kor_jap_re_kor.png";
import FigImg1 from "../../assets/images/fig4_tiff.png";
import FigImg2 from "../../assets/images/fig7_tiff.png";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
            “Sustainable Energy Transition: Beyond Material Analysis” with
            Annick Anctil and Christian Houle (under review)
          </li>
          <li>
            <i className="bold">“Everyday Nationalism Unleashed Online: Textual Evidence from South
            Korea During the 2022 World Cup Games” (under revision) </i>
          </li>
        </ul>

        <Accordion className="mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Paper Details
          </AccordionSummary>
          <AccordionDetails>
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
              <li>
                <img src={FightImg1} alt="" style={{ marginTop: "2rem " }} />
                A word cloud highlighting three national categories: Korea, Japan, and Others. Words associated with Korea 
                show expressions of emotion, like love, praise, and crying, while posts about Japan often feature celebrations 
                of their defeat, sometimes using negative emojis. Interestingly, Koreans often mention "Korea" when discussing Japan, 
                reflecting a tendency to compare their own country with Japan. In contrast, words in the "Others" category, like Messi, 
                Neymar, Brazil, and Argentina, are more neutral, focusing on players and countries rather than emotional reactions.
              </li>
              <li>
                <img src={FigImg} alt="" />
                A term category association plot, or "Fightin' Words" plot, which highlights the most distinctive words used in 
                comments related to Korea and Japan. The plot shows how certain terms are exclusive to each category, with dots 
                representing the most defining words. For posts about Korea, terms like "cute," "crying (ㅠㅠ)," and references 
                to the Korean coach Bento and team captain Son Heung-min dominate. In contrast, comments about Japan feature 
                laughter symbols, direct mentions of Japan, and derogatory depictions using monkey emojis. Notably, the term 
                “war criminal” frequently appears when Koreans discuss Japan, reflecting deep-seated historical tensions between the two nations.
              </li>
              <li>
                <img src={FigImg2} alt="" />
                Topic differences of Korea and Japan from a structural topic model. The contrast of topics prevalent for each country 
                proves how the tones and terms used for each country are different with statistical significance.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
          <li>
          <a href="https://preprints.apsanet.org/engage/apsa/article-details/66d53b4220ac769e5f922a89" target="__blank">
            "Pride and Politics: The Varied Influence of National Pride on Political Behavior in South Korea, Japan, and China" (2024 APSA Presentation) </a>
          </li>

        <h2 className="sub-title">PUBLICATIONS</h2>
        <ul className="list">
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
              Theory.” <i className="italic">The Journal of the Institute of the Middle East Studies</i>,
              2015, 34.1: 23-53
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
