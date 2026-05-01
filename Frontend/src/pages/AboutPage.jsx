import { awards } from "../data/siteContent";

function AboutPage() {
  return (
    <>
      <section className="section">
        <h2>About Me</h2>
        <p className="muted">
          Jan Ivan Montenegro. Aspiring Full Stack Developer.
        </p>
        <h3>Passion for Tech</h3>
        <p>
          I am Jan Ivan, a passionate full-stack developer with a deep love for
          technology and problem-solving. Specialized in building robust,
          scalable applications that solve real-world problems.
        </p>
        <p>
          <a href="mailto:janivantot@gmail.com">Email Me</a>
        </p>
        <h3>Personal Info</h3>
        <ul>
          <li>Pronouns: He/Him</li>
          <li>Location: Meycauayan, Bulacan / Caloocan City</li>
          <li>Affiliation: University of Caloocan City</li>
        </ul>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <article className="card">
          <p className="muted">Sep 2025 - Present</p>
          <h3>Back End and DevOps Developer</h3>
          <p>
            <strong>Ely and Yolly Jewelry (Freelance)</strong>
          </p>
          <p>
            Maintaining server-side systems, APIs, and databases while managing
            deployment pipelines and system reliability. Ensuring applications
            run efficiently, scale properly, and are continuously delivered
            through automated CI/CD processes.
          </p>
          <p>Skills: NestJS, React.js</p>
        </article>
      </section>

      <section className="section">
        <h2>Education and Accomplishments</h2>
        <p className="muted">
          Academic background, competitive achievements, certifications, and
          languages.
        </p>
        <div className="grid grid-2">
          <article className="card">
            <h3>Education</h3>
            <p>Bachelor of Science in Information Technology</p>
            <p>University of Caloocan City (2023 - 2027)</p>
          </article>
          <article className="card">
            <h3>Honors and Awards</h3>
            <ul>
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Licenses and Certifications</h3>
            <p>Operating Systems Basics - Cisco (Issued Dec 2025)</p>
            <a
              href="https://www.credly.com/badges/927dfee6-c4bd-4f1a-9ce1-7ac34c1270de/linked_in_profile"
              target="_blank"
              rel="noreferrer"
            >
              Show credential
            </a>
          </article>
          <article className="card">
            <h3>Languages</h3>
            <p>English - Full professional proficiency</p>
            <p>Tagalog - Full professional proficiency</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
