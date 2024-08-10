import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="./olga.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt="Olga" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Olga Skrypets</h1>
      <p>
        Should contain one Skill component for each web dev skill that you have,
        customized with propsdkjfvjledfvnlerckwhefufcihwekc wkchkewchkwenc
        bwdchjkwecn
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" color="blue" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="Web Design" color="pink" />
      <Skill skill="Git GitHub" color="red" />
      <Skill skill="React" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span
        style={{ backgroundColor: props.color, borderRadius: 10, padding: 5 }}
      >
        {props.skill}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
