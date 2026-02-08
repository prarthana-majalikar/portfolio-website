export const personalInfo = {
  name: 'Prarthana Majalikar',
  title: 'Software Engineer Specializing in AI Applications',
  subtitle: 'MCS @ UC Irvine | Cloud Solutions & AI/ML Applications',
  email: '[email protected]',
  linkedin: 'https://www.linkedin.com/in/prarthanamajalikar',
  github: 'https://github.com/prarthana-majalikar',
}

export const about = {
  intro: "Software engineer transitioning into AI engineering. More than 3 years of backend development combined with Applied AI skills. Recently graduated with an MCS from UC Irvine.",
  experience: "Built high-performance microservices at Infosys handling 10M+ daily transactions on GCP. Strong foundation for deploying production AI systems.",
  current: "Recently built RAG pipelines, optimized LLM workflows, and implemented vector search solutions bridging research models and real-world applications.",
  specializations: [
    "AI application development (RAG, semantic search, LLM workflows)",
    "Backend engineering (scalable APIs, microservices)",
    "Cloud deployment (GCP, Docker)"
  ],
  exploring: "Multi-agent systems, production LLMOps, cost-optimized AI architectures"
}

export const education = [
  {
    institution: "UC Irvine",
    degree: "Master of Computer Science",
    period: "September 2024 - December 2025",
    details: "Specialization in AI and Machine Learning"
  },
  {
    institution: "University of Mumbai",
    degree: "Bachelor of Engineering, Computer Engineering",
    period: "July 2016 - October 2020",
    details: ""
  }
]

export const projects = [
  {
    title: "Local-RAG Agent",
    subtitle: "RAG System • Vector Search",
    description: "Production-grade Retrieval-Augmented Generation system performing semantic search over 15K+ restaurant reviews.",
    metrics: [
      { label: "Retrieval Latency", value: "110ms", subtext: "87% faster than initial" },
      { label: "Query Response", value: "3.1s", subtext: "Optimized from 5.2s" },
      { label: "Cosine Similarity", value: "0.85+", subtext: "Semantic search precision" }
    ],
    techStack: ["Python", "LangChain", "Chroma", "Ollama (Llama 3.2)", "Vector Embeddings"],
    github: "https://github.com/prarthana-majalikar/local-rag-agent/",
    featured: true
  },
  {
    title: "Fake News Classifier",
    subtitle: "NLP • Text Classification",
    description: "ML-powered misinformation detection system processing 40K+ news articles. Full-stack ML from training to production deployment.",
    highlights: [
      "87% accuracy, 0.84 F1-score",
      "F1 improved 12 points over baseline",
      "<200ms inference latency",
      "99.5% uptime on Render"
    ],
    techStack: ["Python", "scikit-learn", "Flask", "NLTK", "TF-IDF", "Render"],
    github: "https://github.com/prarthana-majalikar/fake-news-classifier",
    featured: true
  }
]

export const experience = [
  {
    title: "Software Engineer II",
    company: "Infosys",
    location: "Mumbai",
    period: "Oct 2023 - Jul 2024",
    description: "Built cloud-native microservices for a leading travel technology platform. High-availability systems handling millions of daily transactions.",
    achievements: [
      {
        metric: "10M+ Daily Requests",
        description: "Architected 3 Java microservices on GCP with 99.9% uptime"
      },
      {
        metric: "65% Failure Reduction",
        description: "Implemented Resilience4j circuit breakers and retry policies"
      },
      {
        metric: "18% Latency Reduction",
        description: "Migrated services to gRPC protocol"
      }
    ],
    techStack: ["Java", "Spring Boot", "GCP", "Jenkins CI/CD", "Microservices"]
  },
  {
    title: "Software Engineer",
    company: "Infosys",
    location: "Mumbai",
    period: "Nov 2020 - Sep 2023",
    description: "Specialized in performance testing, API optimization, and observability infrastructure.",
    achievements: [
      {
        metric: "Load Testing",
        description: "9 campaigns simulating 50K+ concurrent users. Identified 3 critical bottlenecks pre-production."
      },
      {
        metric: "Observability",
        description: "Real-time Grafana/Prometheus dashboards tracking 15+ service KPIs."
      },
      {
        metric: "Team Leadership",
        description: "Led 3-person team with 95%+ code coverage on Spring Framework integration."
      }
    ],
    techStack: ["Java", "Spring Framework", "JMeter", "Grafana", "Prometheus", "gRPC"]
  }
]

export const skillsData = {
  "AI & Machine Learning": [
    { name: "Python", logo: "/skills-logos/python.svg", category: "language" },
    { name: "LangChain", logo: "/skills-logos/langchain.svg", category: "framework" },
    { name: "TensorFlow", logo: "/skills-logos/tensorflow.svg", category: "framework" },
    { name: "scikit-learn", logo: "/skills-logos/sklearn.svg", category: "framework" },
    { name: "PyTorch", logo: "/skills-logos/pytorch.svg", category: "framework" },
  ],
  "Cloud & Infrastructure": [
    { name: "Google Cloud", logo: "/skills-logos/gcp.svg", category: "cloud" },
    { name: "AWS", logo: "/skills-logos/aws.svg", category: "cloud" },
    { name: "Docker", logo: "/skills-logos/docker.svg", category: "tool" },
    { name: "Kubernetes", logo: "/skills-logos/kubernetes.svg", category: "tool" },
  ],
  "Backend Engineering": [
    { name: "Java", logo: "/skills-logos/java.svg", category: "language" },
    { name: "Spring Boot", logo: "/skills-logos/spring.svg", category: "framework" },
    { name: "FastAPI", logo: "/skills-logos/fastapi.svg", category: "framework" },
    { name: "Flask", logo: "/skills-logos/flask.svg", category: "framework" },
    { name: "PostgreSQL", logo: "/skills-logos/postgresql.svg", category: "database" },
    { name: "MongoDB", logo: "/skills-logos/mongodb.svg", category: "database" },
  ],
  "DevOps & Tools": [
    { name: "Git", logo: "/skills-logos/git.svg", category: "tool" },
    { name: "Jenkins", logo: "/skills-logos/jenkins.svg", category: "tool" },
    { name: "Grafana", logo: "/skills-logos/grafana.svg", category: "tool" },
    { name: "Prometheus", logo: "/skills-logos/prometheus.svg", category: "tool" },
  ]
}

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    description: "LLM deployment, RAG architectures, OCI AI services",
    issuer: "Oracle"
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    description: "Similarity search and embedding-based retrieval",
    issuer: "Oracle"
  },
  {
    title: "Docker Foundations Professional",
    description: "Containerization for reproducible ML environments",
    issuer: "Docker"
  },
  {
    title: "Model Context Protocol (MCP): Agentic AI",
    description: "Multi-agent systems and tool-calling LLM applications",
    issuer: "MCP"
  }
]
