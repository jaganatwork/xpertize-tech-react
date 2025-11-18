import React from "react";

const services = [
  {
    title: "Automation Engineering",
    description:
      "Highly vetted SDETs specializing in Cypress, Playwright, Appium, WebdriverIO, API automation, CI/CD, and healthcare/fintech domain expertise.",
    icon: "⚡",
  },
  {
    title: "Full-Stack Development",
    description:
      "React, Next.js, Node.js, TypeScript, Python, and cloud-native engineers ready to deliver scalable product features.",
    icon: "🧩",
  },
  {
    title: "Cloud & DevOps Engineering",
    description:
      "AWS, Azure, and GCP engineers for microservices, IaC, CI/CD, observability, Kubernetes, and cloud automation.",
    icon: "☁️",
  },
  {
    title: "AI/ML Integration",
    description:
      "Engineers skilled in LLM integrations, prompt engineering, RAG, automation AI agents, analytics, and MLOps.",
    icon: "🤖",
  },
  {
    title: "Data Engineering",
    description:
      "ETL pipelines, SQL/NoSQL, Redshift, BigQuery, Snowflake, Kafka, data warehousing, and real-time ingestion.",
    icon: "📊",
  },
  {
    title: "Mobile Development",
    description:
      "Native iOS/Android and React Native engineers for healthcare & enterprise mobile experiences.",
    icon: "📱",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#0e141f] to-[#152236] text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Staffing Solutions Powered by AI Precision
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Explore our specialized engineering capabilities designed to accelerate
          your delivery, innovation, and time-to-value.
        </p>
      </div>

      {/* CARD GRID */}
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

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            <p className="text-white/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
