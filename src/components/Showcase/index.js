const Showcase = () => {
    return (
    <div id="my-showcase" className="showcase">
    <div>
      <h3>My Showcase</h3>
      <p>Check out my most recent projects!</p>
    </div>
    <div className="flex-row">
      <h4 className="titles">Run Buddy</h4>
      <a href="https://github.com/Clayton-Andersen/run-buddy.git">
        <img src="./assets/images/Egg.jpeg" alt="" />
      </a>
      <h4 className="titles">Horiseon</h4>
      <a href="https://github.com/Clayton-Andersen/Challenge-1-Horiseon.git">
        <img src="./assets/images/Cherry.jpeg" alt="" />
      </a>
      <h4 className="titles">Robot Gladiators</h4>
      <a href="https://github.com/Clayton-Andersen/robot-gladaitors.git">
        <img src="./assets/images/Aspen Glow 8X10.jpg" alt="" />
      </a>
    </div>
  </div>
  )
}

export default Showcase