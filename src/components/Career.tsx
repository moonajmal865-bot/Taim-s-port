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
                <h4>Sr. Brand Executive</h4>
                <h5>GULBERG ISLAMABAD (IBECHS)</h5>
              </div>
              <h3>JUN 2025 — CURRENT</h3>
            </div>
            <p>
              Led and managed cross-functional teams in content, design, and social media to build brand presence, increasing followers by 10K+ across Instagram, Facebook, and LinkedIn. Planned and coordinated 5+ events and influencer campaigns reaching 50K+ audience, and generated 200+ qualified leads.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>IGATE REALTY (REMOTE)</h5>
              </div>
              <h3>JUN 2024 — MAY 2025</h3>
            </div>
            <p>
              Managed social media across Instagram, TikTok, Facebook, and LinkedIn, executing content strategies to increase engagement and brand visibility. Developed lead generation campaigns and directed creative assets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Executive</h4>
                <h5>IGATE TECHNOLOGIES</h5>
              </div>
              <h3>AUG 2023 — MAY 2024</h3>
            </div>
            <p>
              Managed social media content, increasing follower base by 35% and engagement rate by 50%. Coordinated visual/written assets, managed influencer collaborations, and executed a viral content strategy that generated 1M+ reach and drove 30% rise in website traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
