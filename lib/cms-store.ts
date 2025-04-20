import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define types for our CMS data
export type ServiceItem = {
  name: string;
  href: string;
};

export type Service = {
  _id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
  bgColor: string;
  hoverColor: string;
  activeColor: string;
};

export type Company = {
  name: string;
  logo: string;
};

export type CTALink = {
  text: string;
  href: string;
};

export type CompaniesSection = {
  title: string;
  description: string;
  ctaLinks: CTALink[];
  companies: Company[];
};

export type InnovationSection = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  content: string[];
};

export type ProcessStep = {
  title: string;
  icon: string;
  description: string;
};

export type CTASection = {
  title: string;
  description: string;
  buttonText: string;
  backgroundGradient: {
    from: string;
    to: string;
  };
};

export type FAQ = {
  _id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  rating: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
};

export type HeroSection = {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  image: string;
};

export type CMSStore = {
  // Homepage sections
  heroSection: HeroSection;
  services: Service[];
  companiesSection: CompaniesSection;
  innovationSection: InnovationSection;
  processSteps: ProcessStep[];
  ctaSection: CTASection;
  faqs: FAQ[];
  testimonials: Testimonial[];

  // Methods
  updateHeroSection: (heroSection: Partial<HeroSection>) => void;
  updateServices: (services: Service[]) => void;
  updateCompaniesSection: (companiesSection: Partial<CompaniesSection>) => void;
  updateInnovationSection: (
    innovationSection: Partial<InnovationSection>
  ) => void;
  updateProcessSteps: (processSteps: ProcessStep[]) => void;
  updateCTASection: (ctaSection: Partial<CTASection>) => void;
  updateFAQs: (faqs: FAQ[]) => void;
  updateTestimonials: (testimonials: Testimonial[]) => void;
};

// Default data
const defaultServices: Service[] = [
  {
    _id: "kcjnxkjnxjkcn",
    title: "Design",
    icon: "Pencil",
    items: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Logo Design", href: "/services/logo-design" },
    ],
    bgColor: "bg-blue-50",
    hoverColor: "text-blue-600",
    activeColor: "text-blue-800",
  },
  {
    _id: "kjankna",
    title: "Development",
    icon: "Code",
    items: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-development" },
      { name: "Ecommerce Development", href: "/services/ecommerce" },
      { name: "Wordpress Development", href: "/services/wordpress" },
      { name: "CRM Development", href: "/services/crm" },
    ],
    bgColor: "bg-purple-50",
    hoverColor: "text-purple-600",
    activeColor: "text-purple-800",
  },
  {
    _id: "jkscnsjknsjk",
    title: "Digital Marketing",
    icon: "Briefcase",
    items: [
      { name: "Search Engine Optimization", href: "/services/seo" },
      { name: "Social Media Optimization", href: "/services/smo" },
      { name: "Google Ads and Meta Ads", href: "/services/ads" },
      { name: "WhatsApp Marketing", href: "/services/whatsapp" },
      { name: "Content Marketing", href: "/services/content" },
    ],
    bgColor: "bg-teal-50",
    hoverColor: "text-teal-600",
    activeColor: "text-teal-800",
  },
];

// Create the store
export const useCMSStore = create<CMSStore>()(
  persist(
    (set) => ({
      // Default values
      heroSection: {
        title: "Grow Your Business with Digital Marketing",
        subtitle: "Digital Marketing Agency in Coimbatore",
        description:
          "We help businesses grow through effective digital marketing strategies. Our team of experts will help you reach your target audience and achieve your business goals.",
        primaryButtonText: "Get Started",
        secondaryButtonText: "Learn More",
        image: "/placeholder.svg?height=600&width=800",
      },
      services: defaultServices,
      companiesSection: {
        title:
          "How Do Big Names Stay on Top? They Speak Their Truth to the World.",
        description:
          "Big brands stay on top by being honest and connecting with their audience through smart marketing.",
        ctaLinks: [
          { text: "Boost Your Brand", href: "#" },
          { text: "Start a Project", href: "#" },
        ],
        companies: [
          {
            name: "Airbnb",
            logo: "https://cdn.brandfetch.io/idkuvXnjOH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Google",
            logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Microsoft",
            logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Spotify",
            logo: "https://cdn.brandfetch.io/id20mQyGeY/w/2048/h/561/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Amazon",
            logo: "https://cdn.brandfetch.io/idawOgYOsG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Apple",
            logo: "https://cdn.brandfetch.io/idnrCPuv87/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Slack",
            logo: "https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
          {
            name: "Salesforce",
            logo: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
          },
        ],
      },
      innovationSection: {
        title:
          "Why We are the Best Digital Marketing Company in Coimbatore to take care of your business?",
        description:
          "NixenSoft is a digital marketing Agency in Coimbatore we focuses on getting results for your business.",
        ctaText: "Grow Your Business With Us",
        ctaLink: "#",
        content: [
          "At NixenSoft, we are known as the top digital marketing company in Coimbatore because we provide solutions that work for your business. Our team uses the latest methods in SEO, content marketing, social media, and paid ads to drive more traffic to your website, boost your brand visibility, and engage more people online.",
          "We make marketing simple so you can focus on growing your business. With our clear and real-time tracking, we make sure every campaign is successful. Whether you want more visitors to your website or higher sales, Nixensoft is here to help your business grow online.",
        ],
      },
      processSteps: [
        {
          title: "Understanding Client Needs",
          icon: "Users",
          description:
            "The first step is to clearly understand what the client wants to achieve and who their customers are.",
        },
        {
          title: "Market Research and Competitor Analysis",
          icon: "Search",
          description:
            "We conduct thorough market research and competitor analysis to find opportunities.",
        },
        {
          title: "Strategy Development",
          icon: "LineChart",
          description:
            "Using the insights gathered, we create a digital marketing strategy covering SEO, social media, content marketing, and more.",
        },
        {
          title: "Implementation",
          icon: "PlayCircle",
          description:
            "We are an expert team that precisely executes the strategy, handling everything from content creation to social media.",
        },
        {
          title: "Monitoring and Optimization",
          icon: "BarChart2",
          description:
            "We continuously monitor campaigns with advanced analytics, adjusting strategies in real-time.",
        },
        {
          title: "Reporting and Feedback",
          icon: "FileText",
          description:
            "We provide detailed reports that highlight successes and areas for improvement.",
        },
      ],
      ctaSection: {
        title: "Lets Talk About Your Business",
        description:
          "Let's create a winning strategy for your brand with Nixensoft. We specialize in driving results through expert digital marketing solutions in Coimbatore to your goals.",
        buttonText: "Explore Now",
        backgroundGradient: {
          from: "blue-600",
          to: "blue-700",
        },
      },
      faqs: [
        {
          _id: "sdjhgduyg",
          question: "How will digital marketing improve my business?",
          answer:
            "Digital marketing boosts your business by increasing online visibility, attracting customers, and driving sales. It helps you reach your target audience and measure your results.",
        },
        {
          _id: "hsjhschc",
          question: "How do you determine the best strategy for my business?",
          answer:
            "We analyze your goals, audience, and market trends to create a tailored strategy that aligns with your objectives and achieves the best results.",
        },
        {
          _id: "sdjkhgyidg",
          question: "How do you track the performance of my campaigns?",
          answer:
            "We use tools and analytics to track key metrics like website traffic and conversion rates, providing regular reports on your campaign performance.",
        },
        {
          _id: "djkhgugs",
          question:
            "How involved do I need to be in the digital marketing process?",
          answer:
            "While we handle most of the work, your feedback and approval on key aspects are crucial to ensure the strategy aligns with your vision and goals.",
        },
        {
          _id: "sdjhsdyi",
          question:
            "What should I expect in terms of communication and reporting?",
          answer:
            "We provide regular updates and detailed reports, ensuring transparent communication and timely insights into your campaign's progress.",
        },
      ],
      testimonials: [
        {
          id: "1",
          rating: 4.5,
          content:
            "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google, driving more traffic and increasing our leads.",
          author: "Arunkumar",
          role: "CEO",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9tI9dJLB3cigw20KzwBnsFKnQe48OG6ofw&s",
        },
        {
          id: "2",
          rating: 4.8,
          content:
            "From start to finish, Nixensoft provided an outstanding web development service. They built a stunning and user-friendly website for our boutique.",
          author: "Priya Ramesh",
          role: "Founder",
          avatar:
            "https://media.istockphoto.com/id/1124239071/photo/happy-businesswoman-stock-image.jpg?s=612x612&w=0&k=20&c=TVIsFxFyKbQlsyLMeBTt7G3ctQJvNzn9L0Ev3ReauNg=",
        },
        {
          id: "3",
          rating: 4.7,
          content:
            "WhatsApp marketing was a game-changer for our business, thanks to Nixensoft. They helped us reach thousands of customers instantly.",
          author: "Karthik Rajan",
          role: "Marketing Manager",
          avatar: "https://pagedone.io/asset/uploads/1696230027.png",
        },
      ],

      // Update methods
      updateHeroSection: (heroSection) =>
        set((state) => ({
          heroSection: { ...state.heroSection, ...heroSection },
        })),
      updateServices: (services) => set({ services }),
      updateCompaniesSection: (companiesSection) =>
        set((state) => ({
          companiesSection: { ...state.companiesSection, ...companiesSection },
        })),
      updateInnovationSection: (innovationSection) =>
        set((state) => ({
          innovationSection: {
            ...state.innovationSection,
            ...innovationSection,
          },
        })),
      updateProcessSteps: (processSteps) => set({ processSteps }),
      updateCTASection: (ctaSection) =>
        set((state) => ({
          ctaSection: { ...state.ctaSection, ...ctaSection },
        })),
      updateFAQs: (faqs) => set({ faqs }),
      updateTestimonials: (testimonials) => set({ testimonials }),
    }),
    {
      name: "cms-storage",
    }
  )
);
