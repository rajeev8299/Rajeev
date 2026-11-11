export default function Projects() {
  const projects = [
    {
      num: "01",
      lang: "TypeScript · Next.js",
      title: "Taza Sabji Bazzar",
      desc: "An online storefront for fresh vegetables & grocery items. Features a clean product catalog, item quantity selectors, and quick basket updates.",
      why: "Built to make daily grocery ordering straightforward on mobile screens with rapid load times.",
      tags: ["Next.js", "TypeScript", "Tailwind / CSS", "State Handling"],
      link: "https://rajeev8299.github.io/tazasabjibazzar",
    },
    {
      num: "02",
      lang: "Vanilla JS · Frontend",
      title: "Travel Buddy",
      desc: "A destination guide and trip planning portal with custom destination filters, itinerary previews, and responsive cards.",
      why: "Created to practice clean DOM manipulation and modular JS without heavy dependencies.",
      tags: ["JavaScript", "CSS Grid", "Responsive Design"],
      link: "https://rajeev8299.github.io/travel-buddy",
    },
    {
      num: "03",
      lang: "React · Web App",
      title: "Dental Clinic Portal",
      desc: "A patient-first healthcare service website featuring doctors' schedules, treatments list, and appointment booking inquiries.",
      why: "Focusing on trust, accessibility, clean typography and patient-friendly booking actions.",
      tags: ["React", "CSS Modules", "Accessible UI"],
      link: "https://rajeev8299.github.io/dental-clinic-site",
    },
    {
      num: "04",
      lang: "HTML & Modern CSS",
      title: "Rajeev Fitness (Gym)",
      desc: "Comprehensive fitness studio website complete with batch schedules, membership pricing tiers, trainers, and diet charts.",
      why: "Explored dark aesthetic styling, high-contrast typography, and smooth CSS transitions.",
      tags: ["HTML5", "Modern CSS", "Dark Mode"],
      link: "https://rajeev8299.github.io/gym",
    },
    {
      num: "05",
      lang: "JavaScript",
      title: "E-Commerce Storefront",
      desc: "Digital store concept with product grid, client-side category filters, active shopping cart drawer, and order total calculations.",
      why: "Deep-dived into frontend cart state management and localStorage persistence.",
      tags: ["JavaScript", "Cart Logic", "E-Commerce"],
      link: "https://rajeev8299.github.io/E-Commerce-",
    },
    {
      num: "06",
      lang: "Next.js · React",
      title: "Personal Developer Space",
      desc: "My personal developer portfolio showcasing genuine projects, career roots, and interactive UI experiments.",
      why: "Iterated continuously to balance delightful micro-interactions with real human readability.",
      tags: ["Next.js", "React", "TypeScript", "Vercel"],
      link: "https://rajeev8299.github.io/portfolio/",
    },
  ];

  return (
    <section id="projects" className="stage">
      <div className="wrap">
        <div className="proj-head reveal in">
          <div>
            <span className="eyebrow">Featured Work</span>
            <h2 className="section-title">
              Projects I&apos;ve <span className="thin">designed &amp; coded</span>
            </h2>
            <p className="section-sub">
              Real projects with live demos and source code. Built to solve real problems and sharpen my frontend skills.
            </p>
          </div>
          <a
            className="btn btn-glass btn-sm"
            href="https://github.com/rajeev8299?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All GitHub Repositories
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <article key={p.num} className="gcard proj reveal in" data-tilt data-tilt-max="5">
              <span className="proj-no">{p.num}</span>
              <div className="proj-top">
                <span className="lang">
                  <i /> {p.lang}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              
              {p.why && (
                <p className="proj-why">
                  <b>Why I built it:</b> {p.why}
                </p>
              )}

              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                className="proj-link"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live website
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
