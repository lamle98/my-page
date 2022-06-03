import "./about.css";
import AboutImg from "../../img/about.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a Back-end Developer for over 3 years of
          experience as software developer with
          professional IT skills including application
          development and implementation, as well as
          important soft skills, such as communication,
        teamwork, creativity and determination.
        </p>
        <p className="a-desc">
          Also I always try to improve myself by learning
          from everyone and every other sourcessuch as
          books, internet. I can teamwork with everyone in
          the team very well and I usuallydiscuss and work
          with other co-workers. With all those experiences
          workingindependently, I am sure I am tough
          enough to handle challenging problems.
        </p>
      </div>
    </div>
  );
};

export default About;
