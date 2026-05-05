export const agents = [
  { id: "research", name: "Market Research Agent", description: "Researches market size, trends, and demand", icon: "Search", color: "from-violet-500 to-purple-500", status: "active", tasks: 142, accuracy: 94, lastRun: "2 min ago" },
  { id: "competitor", name: "Competitor Agent", description: "Analyzes competitors and finds gaps", icon: "Target", color: "from-fuchsia-500 to-pink-500", status: "active", tasks: 87, accuracy: 91, lastRun: "5 min ago" },
  { id: "strategy", name: "Strategy Agent", description: "Builds business model and go-to-market", icon: "Compass", color: "from-blue-500 to-cyan-500", status: "idle", tasks: 56, accuracy: 96, lastRun: "1 hr ago" },
  { id: "brand", name: "Brand Agent", description: "Creates names, voice, colors, and identity", icon: "Palette", color: "from-pink-500 to-rose-500", status: "active", tasks: 73, accuracy: 92, lastRun: "12 min ago" },
  { id: "product", name: "Product Agent", description: "Designs offerings, packages and pricing", icon: "Package", color: "from-amber-500 to-orange-500", status: "idle", tasks: 41, accuracy: 89, lastRun: "3 hr ago" },
  { id: "website", name: "Website Agent", description: "Generates landing pages and copy", icon: "Layout", color: "from-emerald-500 to-teal-500", status: "active", tasks: 128, accuracy: 95, lastRun: "8 min ago" },
  { id: "marketing", name: "Marketing Agent", description: "Crafts campaigns, ads and content", icon: "Megaphone", color: "from-cyan-500 to-blue-500", status: "active", tasks: 203, accuracy: 90, lastRun: "1 min ago" },
  { id: "funnel", name: "Sales Funnel Agent", description: "Designs funnels and email flows", icon: "Filter", color: "from-indigo-500 to-violet-500", status: "idle", tasks: 38, accuracy: 88, lastRun: "5 hr ago" },
  { id: "analytics", name: "Analytics Agent", description: "Tracks performance and KPIs", icon: "BarChart3", color: "from-teal-500 to-emerald-500", status: "active", tasks: 312, accuracy: 97, lastRun: "Just now" },
  { id: "optimization", name: "Optimization Agent", description: "Improves your business automatically", icon: "Sparkles", color: "from-purple-500 to-fuchsia-500", status: "active", tasks: 94, accuracy: 93, lastRun: "10 min ago" },
];

export const businesses = [
  { id: "fitflow", name: "FitFlow AI", industry: "Health & Fitness SaaS", status: "Live", readiness: 92, created: "May 1, 2026", revenue: "$12K/mo", logo: "🏋️", description: "AI-powered personal fitness coach for busy professionals." },
  { id: "localbite", name: "LocalBite Cloud Kitchen", industry: "Food & Beverage", status: "Launching", readiness: 78, created: "Apr 22, 2026", revenue: "$8K/mo", logo: "🍱", description: "Hyper-local cloud kitchen network with AI menu optimization." },
  { id: "skillmint", name: "SkillMint Academy", industry: "EdTech", status: "Building", readiness: 64, created: "Apr 15, 2026", revenue: "$5K/mo", logo: "🎓", description: "Micro-learning platform for high-income skills." },
  { id: "greencart", name: "GreenCart Store", industry: "E-commerce", status: "Validating", readiness: 41, created: "Apr 30, 2026", revenue: "$2K/mo", logo: "🌿", description: "Sustainable everyday goods marketplace." },
];

export const stats = [
  { label: "Active Businesses", value: "4", change: "+2 this month", trend: "up", icon: "Briefcase" },
  { label: "AI Tasks Completed", value: "1,284", change: "+312 this week", trend: "up", icon: "Zap" },
  { label: "Launch Readiness", value: "78%", change: "+12% avg", trend: "up", icon: "Rocket" },
  { label: "Revenue Potential", value: "$48K", change: "Projected /mo", trend: "neutral", icon: "TrendingUp" },
];

export const activityFeed = [
  { agent: "Marketing Agent", action: "Generated 7-day Instagram campaign for FitFlow AI", time: "2 min ago", type: "success" },
  { agent: "Optimization Agent", action: "Improved hero headline conversion by 23%", time: "12 min ago", type: "success" },
  { agent: "Analytics Agent", action: "Detected drop in CTR on Meta ads", time: "1 hr ago", type: "warning" },
  { agent: "Website Agent", action: "Regenerated pricing section for SkillMint", time: "3 hr ago", type: "info" },
  { agent: "Competitor Agent", action: "Found 3 new competitors in EdTech vertical", time: "5 hr ago", type: "info" },
  { agent: "Brand Agent", action: "Created logo concepts for GreenCart Store", time: "1 day ago", type: "success" },
];

export const suggestedActions = [
  { title: "Improve landing page headline", description: "AI suggests a clearer value prop for FitFlow AI", icon: "Wand2", priority: "high" },
  { title: "Generate Instagram campaign", description: "30 days of content for LocalBite ready to ship", icon: "Instagram", priority: "medium" },
  { title: "Re-check competitor pricing", description: "3 competitors changed pricing in EdTech", icon: "Target", priority: "medium" },
  { title: "Create email funnel", description: "5-email welcome sequence for SkillMint", icon: "Mail", priority: "low" },
];

export const performanceData = [
  { month: "Jan", revenue: 1200, leads: 240 },
  { month: "Feb", revenue: 2100, leads: 380 },
  { month: "Mar", revenue: 3400, leads: 520 },
  { month: "Apr", revenue: 5200, leads: 780 },
  { month: "May", revenue: 7800, leads: 1120 },
  { month: "Jun", revenue: 12400, leads: 1640 },
];

export const competitors = [
  { name: "FitNow Pro", strength: "Strong brand presence", weakness: "Outdated UX", pricing: "$29/mo", gap: "No AI personalization" },
  { name: "GymGenie", strength: "Great mobile app", weakness: "Limited content library", pricing: "$19/mo", gap: "Missing community features" },
  { name: "TrainAI", strength: "AI-driven plans", weakness: "Expensive tier", pricing: "$49/mo", gap: "Pricing accessibility" },
  { name: "FlexFit", strength: "Free tier", weakness: "No premium features", pricing: "Free", gap: "Monetization clarity" },
];

export const automationRules = [
  { id: 1, name: "Low CTR ad rescue", description: "If CTR is below 1%, regenerate ad copy automatically", enabled: true, runs: 14 },
  { id: 2, name: "Conversion optimizer", description: "If conversion is below 2%, improve landing page hero", enabled: true, runs: 8 },
  { id: 3, name: "Bounce rate fix", description: "If bounce rate is above 70%, simplify hero section", enabled: false, runs: 3 },
  { id: 4, name: "Scale winning campaigns", description: "If leads increase by 20%, suggest budget increase", enabled: true, runs: 6 },
  { id: 5, name: "Profit guardian", description: "If profit is negative, reduce ad spend automatically", enabled: true, runs: 2 },
];

export const faqs = [
  { q: "What is FounderOS?", a: "FounderOS is an autonomous AI platform that turns ideas into fully running businesses. Our AI agents handle research, strategy, branding, website, marketing, and continuous optimization." },
  { q: "Do I need any technical skills?", a: "Zero. Just describe your business goal and our agents take care of the rest — from market research to live landing page." },
  { q: "How long does it take to launch?", a: "Most businesses go from idea to launch-ready in under 24 hours. Optimization runs continuously in the background." },
  { q: "Can I edit what the AI generates?", a: "Absolutely. Every artifact — copy, designs, campaigns — is fully editable. The AI is your co-founder, not your replacement." },
  { q: "Is there a free plan?", a: "Yes. The Free plan includes 1 business and limited AI generations. You can upgrade anytime." },
  { q: "Can I export my website?", a: "Pro and Agency plans let you export clean, production-ready React code or publish on a custom domain." },
];

export const testimonials = [
  { name: "Aarav Mehta", role: "Founder, FitFlow AI", quote: "I went from idea to first $10K MRR in 6 weeks. FounderOS is unfair leverage.", avatar: "AM" },
  { name: "Priya Sharma", role: "Solo Founder", quote: "It's like having a 10-person startup team that never sleeps. The optimization agent alone is worth 10x the price.", avatar: "PS" },
  { name: "Daniel Cole", role: "Indie Hacker", quote: "Three businesses launched, two profitable. I literally just describe what I want and it ships.", avatar: "DC" },
  { name: "Maya Roberts", role: "Agency Owner", quote: "We use FounderOS to launch client brands in days, not months. Margins through the roof.", avatar: "MR" },
];

export const adminUsers = [
  { id: 1, name: "Aarav Mehta", email: "aarav@fitflow.ai", plan: "Pro", businesses: 3, joined: "Apr 2, 2026", status: "Active" },
  { id: 2, name: "Priya Sharma", email: "priya@solofound.com", plan: "Agency", businesses: 12, joined: "Mar 18, 2026", status: "Active" },
  { id: 3, name: "Daniel Cole", email: "dan@indiehack.io", plan: "Pro", businesses: 5, joined: "Feb 11, 2026", status: "Active" },
  { id: 4, name: "Maya Roberts", email: "maya@brandlab.co", plan: "Agency", businesses: 24, joined: "Jan 3, 2026", status: "Active" },
  { id: 5, name: "Liam Park", email: "liam@startup.com", plan: "Free", businesses: 1, joined: "May 1, 2026", status: "Trial" },
];
