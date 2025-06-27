# Garage Door Business - Responsive Scroll-Animated Landing Page

## 🚪 Project Overview

This is a fully responsive, static HTML landing page for a garage door services business based in Arizona. It is built based on finalized Figma designs (desktop and mobile) and uses scroll-triggered animations to enhance user engagement and trust. The page is optimized for smooth interaction, clean layout, and readiness for hosting on platforms like GoDaddy.

---

## 📦 Files & Structure

```
/project-root/
├── public/
│   └── assets/         # Image assets (hero, FAQ, etc.)
├── src/
│   ├── components/
│   │   ├── sections/            # Page sections like Hero, FAQ, Testimonials
│   │   ├── ui/                  # ShadCN UI components (buttons, dialogs, etc.)
│   │   ├── Footer.tsx
│   │   └── SEOHead.tsx
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utilities (e.g., formatting functions)
│   ├── pages/
│   │   ├── Index.tsx            # Main homepage
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles (css files)
├── config files (tailwind, tsconfig, vite, eslint, etc.)
├── README.md
└── package.json
```

---

## ✨ Features

* Fully responsive – Mobile-first design with fluid layout adapting to all screen sizes
* Scroll-based animations – Smooth GSAP animations triggered by scroll (hero, services, testimonials, etc.)
* Non-functional contact form – Placeholder form ready for integration with Jobber, Formspree, or similar services
* Clean, semantic HTML – Structured with accessibility and SEO best practices in mind
* Performance optimized – Lightweight assets and animations that prioritize speed

---

## 🛠 Tech Stack

* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (ES6)
* GSAP (GreenSock Animation Platform) for scroll-triggered animations

---

## ⚙️ How to Use

1. Clone or download this project.
2. Customize content or imagery if needed by editing `index.html` and relevant assets.
3. Deploy by uploading the contents of the project directory to your GoDaddy (or any other) hosting platform via cPanel or FTP.

---

## 📱 Responsive Design Approach

* Mobile-first styling using media queries
* Touch-friendly buttons and form inputs
* Optimized layout spacing consistent with Figma design

---

## 🧠 Animation Strategy

Scroll-triggered animations are implemented with **GSAP + ScrollTrigger**:

* Hero section fades in with parallax motion
* Services and “Why Choose Us” sections animate in on scroll
* Testimonials and FAQs feature staggered fade-up effects
* Smooth ease-in-out transitions for all motion
* All animations are performance-friendly and degrade gracefully on older devices

---

## 📤 Contact Form

The form currently uses static HTML with basic input validation. To activate:

* For **Formspree**: Add the Formspree endpoint in the `<form>` `action` attribute.
* For **Jobber**: Replace the form block with the Jobber form embed code.

---

## ✅ SEO & Accessibility

* Meta tags for description and viewport
* Semantic tags (`<section>`, `<article>`, `<header>`, `<footer>`)
* Alt text on all images
* ARIA attributes where applicable

---

## 📧 Support

For questions or minor updates, please contact the developer or refer to the original Figma file for layout integrity.

---

## 📝 License

This project is for the exclusive use of the garage door business and should not be redistributed or repurposed without permission.

---
