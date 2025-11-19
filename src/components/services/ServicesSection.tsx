
const services = [
  {
    title: "AI/ML Integration",
    icon: "🤖",
    description:
      "Engineers specializing in LLM integration, prompt engineering, RAG pipelines, AI automation, and MLOps. We build AI agents, embed generative AI into workflows, and architect scalable machine learning systems.",
    aiCapabilities:
      "LLM-powered data enrichment • Agentic task automation • Vector search/RAG • Model fine-tuning • AI observability • MLOps pipelines",
  },
  {
    title: "Full-Stack Development",
    icon: "🧩",
    description:
      "React, Next.js, Node.js, Python, and TypeScript engineers delivering high-performance web applications. Augmented with AI-assisted coding, test generation, and architecture recommendations.",
    aiCapabilities:
      "AI pair-programming • Automated unit test generation • Code quality insights • API contract extraction • UX flow optimization via AI",
  },
  {
    title: "Cloud & DevOps Engineering",
    icon: "☁️",
    description:
      "AWS, Azure, and GCP engineers specializing in IaC, Kubernetes, observability, and cloud automation. AI accelerates infrastructure optimization and predictive scaling.",
    aiCapabilities:
      "AI-driven infra cost optimization • Predictive autoscaling • Intelligent CI/CD pipelines • AI-based alert triage • Cloud performance insights",
  },
  {
    title: "Data Engineering",
    icon: "📊",
    description:
      "Advanced data platform engineers skilled in ETL pipelines, data warehousing, Kafka, Redshift, Snowflake, BigQuery, and real-time ingestion at scale.",
    aiCapabilities:
      "AI-generated SQL queries • Automated data quality checks • ML-powered anomaly detection • AI-driven pipeline monitoring • Smart lineage mapping",
  },
  {
    title: "Mobile Development",
    icon: "📱",
    description:
      "Native iOS/Android & React Native engineers building enterprise-grade healthcare & fintech mobile apps with intelligent user experiences.",
    aiCapabilities:
      "AI-powered UI recommendations • Automated crash analysis • Intelligent A/B testing insights • Voice/AI chat integrations • Predictive UX patterns",
  },
  {
    title: "Automation Engineering",
    icon: "⚡",
    description:
      "SDETs specializing in Cypress, Playwright, Appium, Karate, API automation, and mobile test frameworks. AI accelerates test creation and root-cause analysis.",
    aiCapabilities:
      "AI-generated test scripts • Autonomously maintained test cases • Smart flake detection • Root-cause analytics • Intelligent regression selection",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#0e141f] to-[#152236] text-white"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Accelerated Engineering Talent
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Our capabilities combine elite engineers with the power of AI — boosting productivity,
          accelerating delivery, and reducing technical overhead across your product teams.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              p-8 rounded-2xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-lg shadow-black/20 
              hover:shadow-xl hover:shadow-blue-500/20 
              hover:bg-white/10
              transition-all duration-300 cursor-pointer
              transform hover:-translate-y-2
              animate-fade-in-up
            "
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "both",
            }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

            <p className="text-white/80 leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="text-sm text-blue-300">
              <span className="font-semibold">AI-enabled capabilities:</span>
              <br />
              {service.aiCapabilities}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
