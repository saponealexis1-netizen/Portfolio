const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "hero.eyebrow": "PORTFOLIO",
    "hero.title": "Développeur web passionné, prêt à construire avec toi.",
    "hero.subtitle":
      "Je crée des interfaces propres, rapides et centrées sur l’expérience utilisateur, avec un code simple à faire évoluer.",
    "hero.ctaPrimary": "Voir mes projets",
    "hero.ctaSecondary": "Me contacter",
    "hero.role": "Développeur front-end",
    "about.title": "À propos de moi",
    "about.description":
      "Je suis un développeur web basé en France, concentré sur le front-end moderne. J’aime transformer des maquettes en interfaces claires et performantes, avec une attention particulière aux détails et à l’accessibilité.",
    "projects.title": "Projets sélectionnés",
    "projects.intro":
      "Voici quelques exemples de projets qui reflètent ma façon de travailler. Au fur et à mesure, nous pourrons remplacer ces exemples par tes vrais projets.",
    "projects.items.0.title": "Landing page moderne",
    "projects.items.0.description":
      "Page d’accueil responsive avec typographie soignée, sections claires et CTA mis en avant.",
    "projects.items.0.tag": "HTML / CSS",
    "projects.items.1.title": "Mini application web",
    "projects.items.1.description":
      "Petite application côté front pour manipuler le DOM et gérer des interactions utilisateur.",
    "projects.items.1.tag": "JavaScript",
    "projects.items.2.title": "Portfolio personnel",
    "projects.items.2.description":
      "Ce site lui-même : structure simple, thème sombre élégant et contenu en deux langues.",
    "projects.items.2.tag": "Projet en cours",
    "skills.title": "Compétences",
    "skills.intro":
      "Je travaille principalement avec des technologies front-end modernes, en gardant un code clair et maintenable.",
    "contact.title": "Contact",
    "contact.description":
      "Un projet en tête ou envie d’échanger ? Tu peux m’écrire directement par e‑mail.",
    "contact.emailLabel": "Email",
    "contact.note":
      "Clique sur l’adresse pour ouvrir ton client mail. Nous pourrons ensuite discuter de ton projet plus en détail.",
    "footer.madeWith": "Construit avec HTML, CSS et un peu de JavaScript."
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "PORTFOLIO",
    "hero.title": "Passionate web developer, ready to build with you.",
    "hero.subtitle":
      "I craft clean, fast and user‑focused interfaces, with code that is easy to maintain and evolve.",
    "hero.ctaPrimary": "View my projects",
    "hero.ctaSecondary": "Get in touch",
    "hero.role": "Front-end developer",
    "about.title": "About me",
    "about.description":
      "I am a web developer based in France, focused on modern front-end. I enjoy turning designs into clear, performant interfaces with attention to detail and accessibility.",
    "projects.title": "Selected projects",
    "projects.intro":
      "Here are a few example projects that show how I like to work. Over time we can replace them with your real projects.",
    "projects.items.0.title": "Modern landing page",
    "projects.items.0.description":
      "Responsive landing page with clean typography, clear sections and highlighted CTAs.",
    "projects.items.0.tag": "HTML / CSS",
    "projects.items.1.title": "Mini web app",
    "projects.items.1.description":
      "Small front-end app to manipulate the DOM and handle user interactions.",
    "projects.items.1.tag": "JavaScript",
    "projects.items.2.title": "Personal portfolio",
    "projects.items.2.description":
      "This website itself: simple structure, elegant dark theme and bilingual content.",
    "projects.items.2.tag": "Work in progress",
    "skills.title": "Skills",
    "skills.intro":
      "I mainly work with modern front-end technologies, keeping the codebase clear and maintainable.",
    "contact.title": "Contact",
    "contact.description":
      "Have a project in mind or just want to talk? Feel free to email me directly.",
    "contact.emailLabel": "Email",
    "contact.note":
      "Click on the address to open your mail client. We can then discuss your project in more detail.",
    "footer.madeWith": "Built with HTML, CSS and a bit of JavaScript."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document
    .querySelectorAll(".lang-toggle")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));

  localStorage.setItem("portfolio-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("portfolio-lang");
  const initialLang = stored === "en" ? "en" : "fr";
  applyLanguage(initialLang);

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

