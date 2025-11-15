export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Resume Writing",
    description:
      "Craft a results-driven resume that opens doors—whether you're starting fresh, pivoting careers, or aiming higher. We help you present your value clearly, confidently, and competitively.",
    price: "40.00",
    items: [
      "Comprehensive resume writing, whether creating from scratch or rewriting an existing document",
      "Tailoring content to align with your career goals, industry standards, and specific job targets",
      "Optimization for Applicant Tracking Systems (ATS) using strategic keyword integration Clear, compelling phrasing that highlights achievements, skills, and career progression Professional formatting that ensures a clean, modern, and recruiter-friendly presentation",
    ],
  },
  {
    id: 2,
    title: "Cover Letter Writing",
    description:
      "Make a strong first impression with a tailored cover letter that connects your experience to the role, showcases your personality, and motivates hiring managers to read your resume.",
    price: "25.00",
    items: [
      "Tailored narrative to express interest, alignment with job, and personality",
      "Integration of resume highlights without redundancy",
    ],
  },
  {
    id: 3,
    title: "LinkedIn Profile Optimization",
    description:
      "Turn your LinkedIn profile into a powerful professional branding tool that attracts recruiters, builds credibility, and supports your resume with a consistent, searchable online presence.",
    price: "35.00",
    items: [
        "Optimizing your headline, summary (About), work experience, and skills sections",
        "Strategic keyword and SEO integration to improve visibility in recruiter searches",
        "Ensuring consistent tone, messaging, and achievements between resume and profile",
        "Formatting and content suggestions to improve clarity, credibility, and engagement"
    ]
  },
];
