const companyProfile = {
  company: "淮安新红门业有限公司",
  companyShort: "淮安新红门业",
  hotline: "请替换为联系电话",
  wechat: "请替换为微信号",
  address: "请替换为淮安市详细联系地址",
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
    link.setAttribute("href", "./contact.html");
    return;
  }

  link.setAttribute("href", `tel:${phoneDigits}`);
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".faq-item").forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");
  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

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
