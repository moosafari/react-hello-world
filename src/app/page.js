import Link from "next/link";

export default function ProfilePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <Link href="/birth">
          <h1 style={{ color: "#0073b1", cursor: "pointer" }}>John Doe</h1>
        </Link>
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

      <footer style={{ marginTop: "20px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
        <p>Contact: john.doe@example.com</p>
      </footer>
    </div>
  );
}
