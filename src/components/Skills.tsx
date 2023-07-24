import "../styling/skills.css";

function Skills() {
  return (
    <>
      <h2 id="Stitle">Technical Skills</h2>
      <div id="skillcontainer">
        <p>HTML</p>
        <div className="barcontainer">
          <div className="skills html">80%</div>
        </div>

        <p>CSS</p>
        <div className="barcontainer">
          <div className="skills css">80%</div>
        </div>

        <p>JavaScript</p>
        <div className="barcontainer">
          <div className="skills js">100%</div>
        </div>

        <p>TypeScript</p>
        <div className="barcontainer">
          <div className="skills typescript">70%</div>
        </div>
        <p>SQL</p>
        <div className="barcontainer">
          <div className="skills sql">50%</div>
        </div>
        <p>FireBase</p>
        <div className="barcontainer">
          <div className="skills firebase">40%</div>
        </div>
        <p>React</p>
        <div className="barcontainer">
          <div className="skills react">90%</div>
        </div>
      </div>
      <h2 id="Stitle">Soft Skills</h2>
      <div id="skillcontainer">
        <p>Leadership</p>
        <div className="barcontainer">
          <div className="skills leadership">80%</div>
        </div>

        <p>Time Management</p>
        <div className="barcontainer">
          <div className="skills timeManagment">80%</div>
        </div>

        <p>Creativity</p>
        <div className="barcontainer">
          <div className="skills creativity">90%</div>
        </div>

        <p>Teamwork</p>
        <div className="barcontainer">
          <div className="skills teamwork">70%</div>
        </div>
        <p>Problem Solving</p>
        <div className="barcontainer">
          <div className="skills problemSolving">70%</div>
        </div>
        <p>Communication</p>
        <div className="barcontainer">
          <div className="skills communication">80%</div>
        </div>
        <p>Emotional Intelligence</p>
        <div className="barcontainer">
          <div className="skills emotionalIntelligence">90%</div>
        </div>
      </div>
    </>
  );
}

export default Skills;
