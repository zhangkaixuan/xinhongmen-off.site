const companyProfile = {
  company: "淮安新红门业有限公司",
  companyShort: "淮安新红门业",
  hotline: "131 2200 6501",
  wechat: "请替换为微信号",
  address: "淮安市淮阴区渔沟镇工业集中区399号",
  serviceArea: "淮安市区及周边县区项目",
};

const textBindings = {
  company: companyProfile.company,
  "company-short": companyProfile.companyShort,
  hotline: companyProfile.hotline,
  wechat: companyProfile.wechat,
  address: companyProfile.address,
  "service-area": companyProfile.serviceArea,
  year: new Date().getFullYear(),
};

Object.entries(textBindings).forEach(([field, value]) => {
  document.querySelectorAll(`[data-field="${field}"]`).forEach((node) => {
    node.textContent = value;
    const isPlaceholder =
      typeof value === "string" &&
      (value.includes("请替换") || value.includes("待补充"));
    node.classList.toggle("is-placeholder-text", Boolean(isPlaceholder));
  });
});

const phoneDigits = companyProfile.hotline.replace(/[^\d+]/g, "");
document.querySelectorAll('[data-link="hotline"]').forEach((link) => {
  if (!phoneDigits || phoneDigits === "+") {
    link.setAttribute("href", "#contact");
    return;
  }

  link.setAttribute("href", `tel:${phoneDigits}`);
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#" || href === "#top") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    if (siteNav) {
      siteNav.classList.remove("is-open");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = navLinks
  .map((link) => {
    const href = link.getAttribute("href");
    return href ? document.querySelector(href) : null;
  })
  .filter(Boolean);

if (navLinks.length > 0 && sections.length > 0 && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("is-current", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "-80px 0px -50% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
