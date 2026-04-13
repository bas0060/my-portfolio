export const profileData = {
  name: "Abdulbasit Makinde",
  title: "Frontend Developer",
  bio: "Passionate about building accessible, performant web experiences with modern React and TypeScript.",
  email: "adelekemakinde64@gmail.com",
  location: "Lagos, Nigeria",
  social: {
    github: "github.com/bas0060",
    twitter: "https://x.com/adeleke0060?s=21",
    linkedin: "https://www.linkedin.com/in/makinde-abdulbasit-79b580311/",
  },
};

export const skills = [
  {
    category: "Languages & Frameworks",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", " JavaScript (ES6+)"],
  },
  {
    category: "State & Data",
    skills: ["Redux Toolkit", "React Query", "RESTful APIs / Axios", "Context API"],
  },
  {
    category: "Performance & Tooling",
    skills: ["Figma", "Lazy Loading & Code Splitting", "Lighthouse Audits", "Webpack / Vite", "Browser DevTools", "Git & GitHub", "UI/UX Principles", "Responsive Design"],
  },
  {
    category: "Auth & Payments",
    skills: ["OAuth 2.0 / JWT", "Paystack Integration", "Role-Based Access Control", "Protected Routes"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Design System",
    description: "A comprehensive component library built with React, TypeScript, and Storybook. Includes 50+ components with full accessibility support and extensive documentation.",
    image: "/placeholder-1.jpg",
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    link: "https://example.com/design-system",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with real-time inventory, user authentication, and payment processing. Built with Next.js, GraphQL, and PostgreSQL.",
    image: "/placeholder-2.jpg",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    link: "https://example.com/ecommerce",
    featured: true,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Interactive analytics dashboard displaying real-time metrics and trends. Features custom data visualizations, filtering, and export capabilities.",
    image: "/placeholder-3.jpg",
    tags: ["React", "D3.js", "PostgreSQL", "WebSockets"],
    link: "https://example.com/analytics",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile App",
    description: "Native mobile application for iOS and Android with offline support. Developed with React Native and Firebase for real-time synchronization.",
    image: "/placeholder-4.jpg",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "https://example.com/mobile",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Headless CMS-powered blogging platform with Markdown support, syntax highlighting, and dynamic routing. Optimized for performance and SEO.",
    image: "/placeholder-5.jpg",
    tags: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
    link: "https://example.com/blog",
    featured: false,
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop boards, and team collaboration features.",
    image: "/placeholder-6.jpg",
    tags: ["React", "WebSockets", "MongoDB", "Redux"],
    link: "https://example.com/tasks",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Components",
    excerpt:
      "Learn the fundamentals of web accessibility and how to build React components that work for everyone.",
    content: `Web accessibility (a11y) is not just a nice-to-have — it is a fundamental part of building great software. An inaccessible web application excludes millions of users who rely on assistive technologies like screen readers, keyboard navigation, or high-contrast displays. In this article, we explore how to make your React components truly inclusive.

Understanding WCAG 2.1
The Web Content Accessibility Guidelines (WCAG) 2.1 defines four core principles known as POUR — Perceivable, Operable, Understandable, and Robust. Every accessible component you build should satisfy these four principles. For example, a button must be perceivable (visible or announced by a screen reader), operable (clickable via keyboard), understandable (has a clear label), and robust (works across browsers and assistive technologies).

Semantic HTML Comes First
Before reaching for ARIA attributes, always ask yourself if there is a native HTML element that already communicates the role and behavior you need. A <button> element is inherently focusable, activatable via keyboard, and announced correctly by screen readers. A <div onClick={...}> is none of those things by default. Using semantic elements like <nav>, <main>, <header>, <article>, and <button> gives you a strong accessibility foundation for free.

Testing Accessibility
Use tools like eslint-plugin-jsx-a11y during development to catch issues early, axe DevTools in the browser for automated audits, and always do manual keyboard testing. The most valuable test, however, is using a real screen reader — VoiceOver on macOS or NVDA on Windows — to experience your UI the way users with visual impairments do.

Accessibility is a skill that compounds over time. The more you practice building with it in mind from the start, the more natural it becomes — and the better your applications will be for everyone.`,
    date: "2024-03-15",
    readTime: 4,
    tags: ["React", "Accessibility", "Best Practices"],
  },
  {
    id: 2,
    title: "Performance Optimization with Next.js 14",
    excerpt:
      "Master the latest performance features and optimization techniques in Next.js 14.",
    content: `Performance is not an afterthought — it directly impacts user retention, SEO rankings, and business conversions. Next.js 14 provides a powerful set of tools that, when used correctly, can make your web application feel instantaneous. Here is a deep dive into the most impactful optimization techniques.

The App Router and React Server Components
Next.js 14 is built around the App Router and React Server Components (RSC). Server Components render on the server and send only HTML to the client — zero JavaScript is shipped to the browser for these components. This means your data-fetching logic, heavy computations, and database calls stay on the server, dramatically reducing the client-side JavaScript bundle. The rule of thumb is: use Server Components by default, and only opt into Client Components with the "use client" directive when you need interactivity, browser APIs, or React hooks.

Streaming and Suspense
Next.js 14 supports streaming with React Suspense, which allows your page to send HTML to the browser in chunks as data becomes available, rather than waiting for all data to load before showing anything. Wrap slow data-fetching components in <Suspense fallback={<Skeleton />}> and the rest of the page renders immediately while the slow parts stream in. This dramatically improves your Time to First Byte (TTFB) and perceived load time.

Bundle Analysis and Code Splitting
Use @next/bundle-analyzer to visualize what is in your JavaScript bundle. Identify large dependencies and consider replacing them with lighter alternatives. Next.js automatically code-splits by route, so each page only loads the JavaScript it needs — but dynamic imports with next/dynamic let you go further by lazily loading heavy components only when they are needed.

With these techniques combined, achieving a perfect or near-perfect Lighthouse score is very much within reach for most Next.js applications.`,
    date: "2024-03-08",
    readTime: 5,
    tags: ["Next.js", "Performance", "Web Optimization"],
  },
  {
    id: 3,
    title: "State Management in Modern React",
    excerpt:
      "Compare different state management approaches and find the best solution for your application.",
    content: `One of the most common questions React developers face is: "Which state management library should I use?" The honest answer is that there is no single right answer — the best choice depends on your application's scale, team size, and the nature of your state. Let's break down the major options clearly.

Start with useState and useReducer
Before reaching for any external library, exhaust the built-in React hooks. useState is perfect for simple, isolated component state — form inputs, toggle switches, loading indicators. useReducer is better when your state has multiple sub-values or when the next state depends on complex logic. Many applications, including moderately complex ones, can be built entirely with these two hooks.

Context API — Great for the Right Use Case
The Context API is built into React and excellent for passing data that many components need without prop drilling — things like the current user, theme, or language preference. However, it is important to understand its limitation: every component that consumes a context re-renders whenever that context value changes. This makes it a poor fit for frequently updating state like a shopping cart that changes on every keystroke.

Redux Toolkit — The Scalable Enterprise Choice
Redux gets a bad reputation for boilerplate, but Redux Toolkit (RTK) has modernized it significantly. RTK includes createSlice for concise reducer logic, RTK Query for powerful server state management with caching and invalidation built in, and excellent DevTools for time-travel debugging. Redux shines in large applications with complex state interactions, multiple developers, and a need for strict predictability and debuggability. If your team is already familiar with it, RTK is a very solid choice.

Server State is Different — Use React Query or SWR
A crucial insight many developers miss is that server state (data fetched from an API) is fundamentally different from client state (UI state). Libraries like TanStack Query (React Query) and SWR are purpose-built for server state. They handle caching, background refetching, loading and error states, pagination, and optimistic updates out of the box.

The best architecture for most modern React apps is: useState/useReducer for local state, Zustand or Context for global client state, and React Query for server state.`,
    date: "2024-02-28",
    readTime: 5,
    tags: ["React", "State Management", "Architecture"],
  },
  {
    id: 4,
    title: "CSS-in-JS vs Tailwind CSS",
    excerpt:
      "An in-depth comparison of two popular styling approaches in modern web development.",
    content: `Two approaches dominate the conversation — CSS-in-JS libraries like Styled Components and Emotion, and utility-first frameworks like Tailwind CSS. Both are production-proven, but they represent fundamentally different philosophies. Here is an honest, detailed comparison.

What is CSS-in-JS?
CSS-in-JS libraries allow you to write your styles directly in your JavaScript or TypeScript files, co-located with your components. Styled Components and Emotion are the most popular. They support dynamic styles driven by props, automatic critical CSS extraction, scoped styles with no class name collisions, and theming via context.

The trade-off is runtime cost. Most CSS-in-JS libraries generate and inject styles at runtime in the browser, which adds overhead — both in terms of JavaScript bundle size and execution time. This is why some teams have moved away from traditional CSS-in-JS in performance-critical applications. Newer solutions like vanilla-extract and Linaria solve this by generating static CSS at build time, giving you the DX of CSS-in-JS without the runtime cost.

What is Tailwind CSS?
Tailwind CSS is a utility-first framework that provides low-level utility classes — things like flex, pt-4, text-center, and bg-blue-500 — that you compose directly in your HTML or JSX. There is no separate CSS file to maintain, no class name conflicts, and the final CSS bundle contains only the classes you actually use thanks to its purging mechanism. This results in extremely small production CSS files.

Developer Experience
This is subjective and depends on the developer. Tailwind is extremely fast once mastered — changes are made in one place, in one file, with immediate visual feedback. CSS-in-JS feels more natural for developers who think in component APIs and want styles to feel like code. Both have excellent IDE support with extensions for autocomplete and linting.

Which Should You Choose?
For most new projects, especially those built with Next.js where performance matters, Tailwind CSS is the pragmatic choice — it is faster to ship, easier to maintain at scale, and has zero runtime cost. CSS-in-JS is still an excellent choice for design systems or component libraries where the dynamic theming capabilities and encapsulation are genuinely valuable. The key is understanding what each approach optimizes for and matching that to your project's needs.`,
    date: "2024-02-15",
    readTime: 6,
    tags: ["CSS", "Styling", "Performance"],
  },
  {
    id: 5,
    title: "TypeScript Tips for React Developers",
    excerpt:
      "Advanced TypeScript patterns and techniques specifically for React development.",
    content: `TypeScript has become the standard for professional React development — and for good reason. It catches bugs at compile time, improves IDE support dramatically, and makes refactoring large codebases far safer. But many developers only scratch the surface of what TypeScript can do for their React projects. Here are the patterns and techniques that will genuinely level up your code.

Typing Component Props Correctly
Always prefer interface over type for component props — interfaces are more extendable and produce cleaner error messages. Use React.FC sparingly; instead, type your props directly on the function parameter and type the return as React.ReactElement or JSX.Element when needed. For components that accept children, use React.PropsWithChildren<YourProps> or explicitly type children as React.ReactNode.

Generics for Reusable Components
Generics are one of the most powerful TypeScript features for React. Imagine a reusable List component that works with any data type while remaining fully type-safe. You can write function List<T>({ items, renderItem }: { items: T[], renderItem: (item: T) => React.ReactNode }) and TypeScript will infer the type of each item automatically from whatever array you pass in. This pattern is used extensively in UI component libraries.

Typing useRef and useReducer
useRef requires explicit typing — use useRef<HTMLInputElement>(null) for DOM refs and useRef<MyType>(initialValue) for mutable value refs. For useReducer, define your state type and a discriminated union for your action types. This makes your reducer completely type-safe — TypeScript will tell you if you forget to handle an action or access a property that doesn't exist on a particular action type.

Typing Custom Hooks
Always define explicit return types for custom hooks. If your hook returns an object, define an interface for it. If it returns a tuple (like useState does), use a const assertion on the return value — return [state, setState] as const — so TypeScript infers a tuple type instead of a generic array type. This makes destructuring the hook's return value in components much more accurate.

TypeScript's learning curve is worth the investment. The time you save debugging runtime type errors far outweighs the time spent adding type annotations — especially as your codebase grows.`,
    date: "2024-02-01",
    readTime: 11,
    tags: ["TypeScript", "React", "Tips & Tricks"],
  },
  {
    id: 6,
    title: "How I Grew Into a Next.js Intermediate Developer",
    excerpt:
      "An honest account of the habits, resources, and mindset shifts that took my React and Next.js skills to the next level.",
    content: `There is a well-known gap in frontend development that nobody talks about enough, the space between knowing React basics and confidently building real, production-grade Next.js applications. I spent a significant amount of time stuck in that gap. This is an honest account of how I got through it.

The Beginner Trap
When you first learn React, tutorials feel great. You build todo apps, weather apps, and simple dashboards. You understand components, props, and useState. But when you look at a real codebase  with folder structures, custom hooks, API routes, authentication, and performance considerations,it feels like a completely different language. This is the beginner trap: tutorial knowledge does not automatically translate to production knowledge.

The Shift That Changed Everything — Build Real Things
The single most impactful thing I did was commit to building projects that solved real problems, not just tutorial clones. I built an e-commerce platform that consumed real REST APIs, a two-sided service booking platform, and integrated real payment gateways. These projects forced me to confront problems that tutorials never cover, handling API errors gracefully, managing loading states across deeply nested components.

Going Deep on JavaScript Before Going Wide
One of my best investments was going back to JavaScript fundamentals which are closures, the event loop, promises, async/await, prototypal inheritance and how the module system works. Many React and Next.js behaviors that seem magical become obvious once you understand JavaScript deeply. Closures explain why stale state bugs happen in hooks.
Reading Other People's Code
I started spending deliberate time reading open-source Next.js projects on GitHub — real applications, not toy examples. I would pick a feature I did not understand, find a well-maintained repo that implemented it, and read through the code trying to understand each decision.

The Mindset Shift
The biggest difference between a beginner and an intermediate developer is not the number of APIs they know, it is how they think about problems. Intermediates ask "what is the right tool for this problem?" instead of "how do I make this tool do what I want?" They read error messages carefully instead of immediately Googling them.

The path from beginner to intermediate is not linear and it is not fast, but it is absolutely achievable. Build things that scare you a little, read widely, go deep on fundamentals, and never stop being curious about why things work the way they do.`,
    date: "2024-04-10",
    readTime: 6,
    tags: ["Next.js", "JavaScript", "React", "Career Growth"],
  },
];


export const testimonials = [
  {
    id: 1,
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Abdulbasit is an exceptional developer who consistently delivers high-quality, accessible components. Their attention to detail and commitment to best practices is unmatched.",
    image: "/placeholder-avatar-1.jpg",
  },
  {
    id: 2,
    author: "Marcus Williams",
    role: "CTO at StartupXYZ",
    content: "Working with Abdulbasit on our e-commerce platform was transformative. They brought fresh ideas, solved complex problems, and mentored our junior developers.",
    image: "/placeholder-avatar-2.jpg",
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    role: "Design Director at CreativeStudio",
    content: "Abdulbasit perfectly bridges the gap between design and development. Their implementation of our design system was pixel-perfect and fully accessible.",
    image: "/placeholder-avatar-3.jpg",
  },
];

export const experience = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2023 - Present",
    description: "Leading frontend architecture and mentoring a team of developers. Implemented design system serving 50+ products.",
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    description: "Built full-stack features from design to deployment. Optimized performance resulting in 40% faster load times.",
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2021",
    description: "Developed responsive websites for diverse clients. Learned best practices in accessibility and performance.",
  },
];
