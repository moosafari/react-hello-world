export default function ProfilePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <h1 style={{ color: "#0073b1" }}>John Doe</h1>
        <p>Software Engineer | Open to Opportunities</p>
      </header>

      <section style={{ marginTop: "20px" }}>
        <h2>About</h2>
        <p>
          Experienced software engineer with expertise in web development,
          cloud computing, and distributed systems. Passionate about creating
          scalable and efficient applications.
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Senior Developer</strong> at TechCorp (2020 - Present)
          </li>
          <li>
            <strong>Frontend Engineer</strong> at Webify (2018 - 2020)
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Education</h2>
        <p>B.S. in Computer Science, University of Technology</p>
      </section>

      <footer style={{ marginTop: "20px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
        <p>Contact: john.doe@example.com</p>
      </footer>
    </div>
  );
}
