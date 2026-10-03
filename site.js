(() => {
  "use strict";
  const data = window.HOMEPAGE_DATA;
  if (!data) return;
  const profile = data.profile;
  const byId = (id) => document.getElementById(id);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (label, url, className = "") => {
    const node = make("a", className, label);
    node.href = url;
    if (/^https?:\/\//.test(url)) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    return node;
  };
  const iconPaths = {
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-3.4c0-.9-.3-1.5-.7-1.9 2.4-.3 4.9-1.2 4.9-5.4 0-1.2-.4-2.2-1.1-3 .1-.3.5-1.5-.1-3 0 0-.9-.3-3 1.1a10.3 10.3 0 0 0-5.4 0C7.5 5 6.6 5.3 6.6 5.3c-.6 1.5-.2 2.7-.1 3-.7.8-1.1 1.8-1.1 3 0 4.2 2.5 5.1 4.9 5.4-.3.3-.6.7-.7 1.4V22"/>',
    wechat: '<path d="M20 11a7 7 0 0 1-7 7H8l-4 3v-6a7 7 0 1 1 16-4Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>',
    scholar: '<path d="m2 9 10-5 10 5-10 5-10-5Z"/><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v8"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7h.01M11 17v-7M11 13a3 3 0 0 1 6 0v4"/>',
    cv: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>'
  };
  const icon = (name) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    node.setAttribute("viewBox", "0 0 24 24");
    node.setAttribute("class", "icon");
    node.setAttribute("aria-hidden", "true");
    // Only fixed, trusted icon paths are inserted here; profile text uses textContent.
    node.innerHTML = iconPaths[name] || iconPaths.cv;
    return node;
  };
  const profileLink = (label, url, iconName) => {
    const node = link(label, url, "profile-link");
    node.prepend(icon(iconName));
    byId("profile-links").append(node);
  };
  const socialProfileLink = (label, url, iconName) => {
    if (url) {
      profileLink(label, url, iconName);
      return;
    }
    const placeholder = make("span", "profile-link profile-link-placeholder", label);
    placeholder.setAttribute("role", "link");
    placeholder.setAttribute("aria-disabled", "true");
    placeholder.setAttribute("aria-label", `${label} profile link to be added`);
    placeholder.title = `${label} profile link to be added`;
    placeholder.prepend(icon(iconName));
    byId("profile-links").append(placeholder);
  };

  document.title = profile.name;
  document.querySelector('meta[name="description"]').content = `${profile.name}, ${profile.role}, ${profile.institution}, ${profile.parentInstitution}. Research in AI for Science, machine learning interatomic potentials, and high-performance computing.`;
  byId("profile-name").textContent = profile.name;
  byId("profile-role").textContent = profile.role;
  byId("profile-institution").textContent = profile.institution;
  byId("profile-parent").textContent = profile.parentInstitution;
  byId("footer-name").textContent = profile.name;
  for (const paragraph of profile.bio) {
    const node = make("p");
    for (const part of paragraph.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(mailto:[^)]+\))/g)) {
      const emailLink = part.match(/^\[([^\]]+)\]\((mailto:[^)]+)\)$/);
      node.append(emailLink ? link(emailLink[1], emailLink[2])
        : part.startsWith("**") && part.endsWith("**")
          ? make("strong", "", part.slice(2, -2))
          : document.createTextNode(part));
    }
    byId("bio").append(node);
  }

  if (profile.photo) {
    const photo = make("img", "portrait-photo");
    photo.src = profile.photo;
    photo.alt = profile.name;
    photo.width = 190;
    photo.height = 224;
    photo.addEventListener("error", () => photo.replaceWith(make("div", "portrait-placeholder", "Profile photo")), { once: true });
    byId("portrait").replaceWith(photo);
  }
  if (profile.email) profileLink("Email", `mailto:${profile.email}`, "email");
  if (profile.github) profileLink("GitHub", profile.github, "github");
  socialProfileLink("Google Scholar", profile.scholar, "scholar");
  socialProfileLink("LinkedIn", profile.linkedin, "linkedin");
  if (profile.cv) profileLink("CV", profile.cv, "cv");

  const wechatDialog = byId("wechat-dialog");
  const openWeChat = () => wechatDialog.showModal();
  const wechatButton = make("button", "profile-link", "WeChat");
  wechatButton.type = "button";
  wechatButton.setAttribute("aria-haspopup", "dialog");
  wechatButton.prepend(icon("wechat"));
  wechatButton.addEventListener("click", openWeChat);
  byId("profile-links").append(wechatButton);
  byId("close-wechat").addEventListener("click", () => wechatDialog.close());
  wechatDialog.addEventListener("click", (event) => {
    const rect = wechatDialog.getBoundingClientRect();
    if (event.target === wechatDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) wechatDialog.close();
  });
  if (profile.wechatQr) {
    const qr = make("img", "wechat-qr");
    qr.src = profile.wechatQr;
    qr.alt = `${profile.name}'s WeChat QR code`;
    byId("wechat-details").append(qr);
  }
  if (profile.wechatId) byId("wechat-details").append(make("p", "", `WeChat ID: ${profile.wechatId}`));
  if (!profile.wechatQr && !profile.wechatId) {
    byId("wechat-details").append(make("div", "wechat-empty", "WeChat details will be added soon."));
  }

  const newsItems = [];
  for (const [newsIndex, news] of data.news.entries()) {
    const item = make("li");
    const date = make("time", "", news.date);
    if (news.datetime) date.dateTime = news.datetime;
    if (news.url && news.linkLabel) {
      const text = make("span", "", news.text);
      text.append(link(news.linkLabel, news.url), document.createTextNode(news.suffix || ""));
      item.append(date, text);
    } else {
      const text = news.url ? link("", news.url) : make("span");
      for (const part of news.text.split(/((?:NeurIPS|ICLR|IPDPS) \d{4})/g)) {
        text.append(/^(?:NeurIPS|ICLR|IPDPS) \d{4}$/.test(part)
          ? make("strong", "", part) : document.createTextNode(part));
      }
      item.append(date, text);
    }
    item.hidden = newsIndex >= 4;
    newsItems.push(item);
    byId("news-list").append(item);
  }
  if (!data.news.length) byId("news").hidden = true;
  if (newsItems.length > 4) {
    const toggle = make("button", "news-toggle", "Show more");
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "news-list");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") !== "true";
      newsItems.forEach((item, index) => { item.hidden = !expanded && index >= 4; });
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.textContent = expanded ? "Show less" : "Show more";
    });
    byId("news").append(toggle);
  }

  for (const [paperIndex, paper] of data.publications.entries()) {
    const article = make("article", "publication");
    const showFigure = true;
    if (!showFigure) article.classList.add("publication-text-only");
    const figure = make("figure", "publication-media");
    if (showFigure && paper.image) {
      const imageLink = link("", paper.image, "figure-link");
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      imageLink.setAttribute("aria-label", `View full-size figure for ${paper.title}`);
      const image = make("img", "publication-image");
      image.src = paper.image;
      image.alt = paper.imageAlt || `Figure from ${paper.title}`;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        const fallback = make("div", "figure-link figure-fallback", "Publication figure");
        imageLink.replaceWith(fallback);
      }, { once: true });
      imageLink.append(image);
      figure.append(imageLink);
    } else {
      figure.append(make("div", "figure-link figure-fallback", "Publication figure"));
    }
    const content = make("div", "publication-content");
    const venue = make("div", "publication-venue");
    venue.append(make("span", `venue-tag${paper.preprint ? " preprint" : ""}`, `${paper.venue} ${paper.year}`));
    const title = make("h3");
    title.textContent = paper.title;
    const authors = make("p", "authors");
    const fullAuthorList = paper.authors.join(", ");
    authors.title = fullAuthorList;
    authors.setAttribute("aria-label", fullAuthorList);
    const renderAuthors = (visible) => {
      authors.replaceChildren();
      let previous = -1;
      visible.forEach((index) => {
        if (index > previous + 1) authors.append(document.createTextNode(previous < 0 ? "… , " : ", … , "));
        else if (previous >= 0) authors.append(document.createTextNode(", "));
        const author = paper.authors[index];
        const name = author === profile.name ? make("strong", "", author) : document.createTextNode(author);
        if (paper.authorLinks?.[author]) {
          const authorLink = link("", paper.authorLinks[author], "author-link");
          authorLink.append(name);
          authors.append(authorLink);
        } else authors.append(name);
        previous = index;
      });
    };
    const fitAuthors = () => {
      const visible = paper.authors.map((_, index) => index);
      renderAuthors(visible);
      while (authors.scrollWidth > authors.clientWidth && visible.length > 1) {
        let candidate = visible.findLastIndex(index => index !== 0 && index !== paper.authors.length - 1 && paper.authors[index] !== profile.name);
        if (candidate < 0 && paper.authors[0] !== profile.name && visible.includes(0)) candidate = visible.indexOf(0);
        if (candidate < 0) break;
        visible.splice(candidate, 1);
        renderAuthors(visible);
      }
    };
    renderAuthors(paper.authors.map((_, index) => index));
    new ResizeObserver(fitAuthors).observe(authors);
    document.fonts.ready.then(fitAuthors);
    content.append(venue, title, authors);
    const resources = make("div", "paper-links");
    const abstract = make("div", "paper-abstract");
    abstract.id = `paper-abstract-${paperIndex}`;
    abstract.hidden = true;
    abstract.append(make("p", "", paper.abstract || ""));
    if (paper.abstract) {
      const toggle = make("button", "paper-link abstract-toggle", "ABS");
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", abstract.id);
      toggle.setAttribute("aria-label", `Abstract: ${paper.title}`);
      toggle.addEventListener("click", () => {
        abstract.hidden = !abstract.hidden;
        toggle.setAttribute("aria-expanded", String(!abstract.hidden));
      });
      resources.append(toggle);
    }
    if (paper.pdf) resources.append(link("PDF", paper.pdf, "paper-link"));
    if (paper.code) resources.append(link("Code", paper.code, "paper-link code-link"));
    content.append(resources);
    if (showFigure) article.append(figure);
    article.append(content, abstract);
    byId("publication-list").append(article);
  }

  if (data.awards.length) {
    const awardGroups = new Map();
    for (const award of data.awards) {
      const stage = award.stage || "";
      if (!awardGroups.has(stage)) awardGroups.set(stage, []);
      awardGroups.get(stage).push(award);
    }
    for (const [stage, awards] of awardGroups) {
      const group = make("div", "award-group");
      if (stage) group.append(make("h3", "award-stage", stage));
      const list = make("ul", "award-list");
      const sortedAwards = [...awards].sort((a, b) => {
        if (!a.year) return b.year ? 1 : 0;
        if (!b.year) return -1;
        return String(b.year).localeCompare(String(a.year), undefined, { numeric: true });
      });
      for (const award of sortedAwards) {
        const item = make("li", award.year ? "" : "award-undated");
        const details = make("div");
        details.append(award.url ? link(award.title, award.url, "award-title") : make("span", "award-title", award.title));
        const description = [award.organization, award.description].filter(Boolean).join(" · ");
        if (description) details.append(make("p", "award-description", description));
        if (award.year) item.append(make("span", "award-year", award.year));
        item.append(details);
        list.append(item);
      }
      group.append(list);
      byId("award-list").append(group);
    }
  } else byId("award-list").append(make("p", "empty-awards", "Awards and honors will be added here."));

  for (const service of data.services) {
    const item = make("li");
    const details = make("span");
    details.append(make("strong", "", service.venue), document.createTextNode(` · ${service.role}`));
    item.append(make("span", "service-year", service.year), details);
    byId("service-list").append(item);
  }

  if (data.visitorMapUrl) {
    try {
      const widgetUrl = new URL(data.visitorMapUrl.replace(/&amp;/g, "&"));
      if (widgetUrl.origin !== "https://mapmyvisitors.com" || widgetUrl.pathname !== "/map.js" || !widgetUrl.searchParams.get("d")) throw new Error("Invalid visitor widget URL");
      const holder = byId("visitor-map");
      holder.querySelector("svg").remove();
      byId("visitor-status").textContent = "";
      const script = document.createElement("script");
      script.id = "mapmyvisitors";
      script.src = widgetUrl.href;
      script.async = true;
      script.onerror = () => { byId("visitor-status").textContent = "The visitor map is currently unavailable."; };
      holder.prepend(script);
    } catch (_) {
      byId("visitor-status").textContent = "Visitor statistics are not connected yet.";
    }
  }

})();
