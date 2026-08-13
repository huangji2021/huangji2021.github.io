(function () {
  "use strict";

  var body = document.body;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pathParts = window.location.pathname.split("/").filter(Boolean);
  var locale = pathParts[0] === "zh" || pathParts[0] === "ja" ? pathParts.shift() : "en";
  var route = "/" + pathParts.join("/") + (pathParts.length ? "/" : "");

  function localeUrl(code) {
    if (code === "en") return route;
    return "/" + code + (route === "/" ? "/" : route);
  }

  var labels = {
    en: { updated: "Last updated: Aug. 13, 2026", aria: "Choose language" },
    zh: { updated: "主页更新：2026年8月13日", aria: "选择语言" },
    ja: { updated: "最終更新：2026年8月13日", aria: "言語を選択" }
  };

  var languagePanel = document.createElement("aside");
  languagePanel.className = "language-panel";
  languagePanel.setAttribute("aria-label", labels[locale].aria);
  var languageLinksHtml =
      '<a lang="zh-CN" href="' + localeUrl("zh") + '"' + (locale === "zh" ? ' aria-current="page"' : "") + '>中文</a>' +
      '<a lang="en" href="' + localeUrl("en") + '"' + (locale === "en" ? ' aria-current="page"' : "") + '>English</a>' +
      '<a lang="ja" href="' + localeUrl("ja") + '"' + (locale === "ja" ? ' aria-current="page"' : "") + '>日本語</a>';
  var hero = document.querySelector(".hero");
  var detailPage = document.querySelector(".simple-page");
  var navbar = document.querySelector(".navbar");
  var languageSwitcher = null;

  if (hero && navbar) {
    languagePanel.classList.add("update-panel");
    languagePanel.innerHTML = '<p class="updated-date">' + labels[locale].updated + "</p>";
    hero.insertBefore(languagePanel, hero.firstElementChild);

    var sectionNavLinks = document.createElement("div");
    sectionNavLinks.className = "section-nav-links";
    var sectionLinkElements = Array.prototype.slice.call(navbar.children).filter(function (child) {
      return child.matches("a[href^='#']");
    });
    navbar.insertBefore(sectionNavLinks, sectionLinkElements[0]);
    sectionLinkElements.forEach(function (link) { sectionNavLinks.appendChild(link); });

    languageSwitcher = document.createElement("nav");
    languageSwitcher.className = "language-links language-switcher";
    languageSwitcher.setAttribute("aria-label", labels[locale].aria);
    languageSwitcher.innerHTML = languageLinksHtml;
    navbar.appendChild(languageSwitcher);
  } else if (detailPage) {
    languagePanel.innerHTML = '<nav class="language-links">' + languageLinksHtml +
      '</nav><p class="updated-date">' + labels[locale].updated + "</p>";
    detailPage.insertBefore(languagePanel, detailPage.firstElementChild);
  } else {
    languagePanel.innerHTML = '<nav class="language-links">' + languageLinksHtml +
      '</nav><p class="updated-date">' + labels[locale].updated + "</p>";
    body.insertBefore(languagePanel, body.firstChild);
  }

  body.classList.add("motion-ready");

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      body.classList.add("page-ready");
    });
  });

  window.addEventListener("pageshow", function () {
    body.classList.remove("page-leaving");
    body.classList.add("page-ready");
  });

  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  body.appendChild(progress);

  function updateProgress() {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = "scaleX(" + Math.min(1, Math.max(0, ratio)) + ")";
    if (languageSwitcher) {
      languageSwitcher.classList.toggle("is-hidden", window.scrollY > 80);
    }
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  var selectors = [
    ".hero > .language-panel",
    ".hero-inner > *",
    ".section > h2",
    ".section > .lead",
    ".research-card",
    ".publication-list > *",
    ".timeline-item",
    ".simple-page > *"
  ];
  var items = Array.prototype.slice.call(document.querySelectorAll(selectors.join(",")));

  items.forEach(function (item, index) {
    item.classList.add("reveal-item");

    if (item.classList.contains("timeline-item")) {
      var timelineItems = Array.prototype.slice.call(item.parentElement.children);
      var timelineIndex = timelineItems.indexOf(item);
      item.classList.add(timelineIndex % 2 === 0 ? "reveal-from-left" : "reveal-from-right");
    }

    var siblings = item.parentElement ? Array.prototype.slice.call(item.parentElement.children) : [];
    var siblingIndex = Math.max(0, siblings.indexOf(item));
    item.style.setProperty("--reveal-delay", Math.min(siblingIndex, 5) * 85 + "ms");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    items.forEach(function (item) { revealObserver.observe(item); });
  }

  var timeline = document.querySelector(".timeline");
  if (timeline) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      timeline.classList.add("is-visible");
    } else {
      var timelineObserver = new IntersectionObserver(function (entries, observer) {
        if (entries[0].isIntersecting) {
          timeline.classList.add("is-visible");
          observer.disconnect();
        }
      }, { threshold: 0.08 });
      timelineObserver.observe(timeline);
    }
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".navbar a[href^='#']"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link || reduceMotion || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        link.target === "_blank" || link.hasAttribute("download")) return;

    var url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (url.origin !== window.location.origin || url.protocol === "mailto:" ||
        (url.pathname === window.location.pathname && url.hash)) return;

    event.preventDefault();
    body.classList.remove("page-ready");
    body.classList.add("page-leaving");
    window.setTimeout(function () { window.location.href = url.href; }, 480);
  });
}());
