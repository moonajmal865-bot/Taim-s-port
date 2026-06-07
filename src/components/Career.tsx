import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Brand Manager</h4>
                <h5>GULBERG ISLAMABAD</h5>
              </div>
              <h3>CURRENTLY WORKING</h3>
            </div>
            <p>
              Currently managing brand operations, marketing campaigns,
              influencer coordination, and on-ground executions for Gulberg
              Islamabad and Green World Towers. Responsible for brand
              strategy, campaign planning, and execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Brand Executive</h4>
                <h5>IGATE REALTY</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked as Senior Brand Executive handling brand communication,
              marketing campaigns, and digital presence for real estate
              projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Executive</h4>
                <h5>IGATE TECHNOLOGIES</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Managed social media marketing and brand promotions for RDX Sports,
              focusing on combat sports audience engagement and digital campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
