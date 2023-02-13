import React from "react";
import Header from "../Header/Header";
import "./About.Module.css";
import profile from "../../assets/profile.png";
import trakya from "../../assets/trakya.png";
import kirac from "../../assets/kirac.png";
import optiim from "../../assets/optiim.png";
import sertifika from "../../assets/sertifika.PNG";
import sertifika2 from "../../assets/sertifika2.PNG";
import sertifika3 from "../../assets/sertifika3.png";
import sertifika4 from "../../assets/sertifika4.png";
import sertifika5 from "../../assets/sertifika5.png";
import sertifika6 from "../../assets/sertifika6.PNG";
import { motion } from "framer-motion";
import {
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import {
  DiBootstrap,
  DiCss3,
  DiDjango,
  DiJavascript1,
  DiMongodb,
  DiMsqlServer,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiFlask, SiMaterialui, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Header />
      <div id="about-section" className="container">
        <div className="about">
          <div className="about-profile row">
            <img src={profile} alt="" className="col-md-3" />
            <div className="col-md-9">
              <p>Recep Terzi</p>
              <p>Frontend Developer</p>
              <p>
                I am a programmer who is developing himself day by day in the
                field of Front- End Developer. I entered the software in high
                school by choosing the Department of Database Programming. I
                haven't done much work on the field I'm currently in, but I have
                knowledge of SQL database. We were doing desktop application
                development with C# form application in high school. I am
                currently studying Computer Technologies and Information Systems
                at Trakya University. Actually, I started to develop myself and
                decide on my field after I went to university. Currently, I am
                actively developing myself in the field of Front-End developer.
                I am excited to take care of using active technologies and
                develop projects related to these technologies.
              </p>
              <div className="social">
                <ul>
                  <li>
                    <AiFillInstagram /> :{" "}
                    <Link to="https://www.instagram.com/recepterziiii/">
                      @recepterziiii
                    </Link>
                  </li>
                  <li>
                    <AiFillLinkedin /> :{" "}
                    <Link to="https://www.linkedin.com/in/recepterzi/">
                      recepterzi
                    </Link>
                  </li>
                  <li>
                    <AiOutlineMail /> :{" "}
                    <Link to="mailto:recepterzi-67@hotmail.com">
                      recepterzi-67@hotmail.com
                    </Link>
                  </li>
                  <li>
                    <AiOutlineGithub /> :{" "}
                    <Link to="https://github.com/Recep-terzi">Recep-terzi</Link>
                  </li>
                  <li>
                    <AiFillPhone /> : +90 530 099 67 39
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-description ">
            <div className="educational">
              <div className="title">EDUCATIONAL BACKGROUND</div>

              <div className="university row">
                <div className="university-logo col-md-3">
                  <img src={trakya} alt="" />
                </div>
                <div className="university-description col-md-9">
                  <p>Trakya University</p>
                  <p>Computer Technologies And Information Systems - 3.51</p>
                </div>
              </div>
              <div className="highschool row">
                <div className="highschool-description col-md-9">
                  <p>
                    Kıraç IMKB Vocational And Technical Anatolian High School
                  </p>
                  <p>Chapter Two, Database Programming</p>
                </div>
                <div className="highschool-logo col-md-3">
                  <img src={kirac} alt="" />
                </div>
              </div>
            </div>
            <div className="working">
              <div className="title">WORKING EXPERIENCE</div>
              <div className="workings row">
                <div className="working-logo col-md-3">
                  <img src={optiim} alt="" />
                </div>
                <div className="working-description col-md-9">
                  <p>OPTIIM</p>
                  <p>Database Intern</p>
                  <p>
                    A 40-day summer internship I did related to the department I
                    studied at High school.
                  </p>
                  <p>
                    have been working on the database at the junior level in
                    this department.
                  </p>
                </div>
              </div>
            </div>
            <div className="achievements">
              <div className="title">achievements</div>
              <ul>
                <li>
                  <AiFillHtml5 />
                </li>
                <li>
                  <DiCss3 />
                </li>
                <li>
                  <SiTailwindcss />
                </li>
                <li>
                  <DiBootstrap />
                </li>
                <li>
                  <SiMaterialui />
                </li>
                <li>
                  <DiJavascript1 />
                </li>
                <li>
                  <DiReact />
                </li>
                <li>
                  <SiRedux />
                </li>
                <li>
                  <TbBrandNextjs />
                </li>
                <li>
                  <DiMsqlServer />
                </li>
                <li>
                  <DiPostgresql />
                </li>
                <li>
                  <DiMongodb />
                </li>
                <li>
                  <DiPython />
                </li>
                <li>
                  <DiDjango />
                </li>
                <li>
                  <SiFlask />
                </li>
              </ul>
            </div>
            <div className="certificates">
              <div className="title">certificates</div>

              <div className="certificates-image">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika2} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika3} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika4} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika5} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sertifika6} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
