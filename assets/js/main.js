/* ============================================================
   Suyash Kelkar — Portfolio · rendering + interactions
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---------- YouTube helpers ---------- */
  function ytThumb(id, quality) {
    return `https://i.ytimg.com/vi/${id}/${quality}.jpg`;
  }
  function ytWatch(id) {
    return `https://www.youtube.com/watch?v=${id}`;
  }
  // Resilient thumbnail: maxres -> hq -> styled placeholder
  function attachThumb(img, id, placeholderText) {
    let stage = 0;
    img.src = ytThumb(id, "maxresdefault");
    img.addEventListener("error", function onErr() {
      stage += 1;
      if (stage === 1) {
        img.src = ytThumb(id, "hqdefault");
      } else {
        img.removeEventListener("error", onErr);
        const ph = el("div", "video-thumb__ph", escapeHTML(placeholderText || ""));
        img.replaceWith(ph);
      }
    });
    // hqdefault sometimes returns a 120x90 grey "unavailable" image; treat tiny as failure
    img.addEventListener("load", function onLoad() {
      if (img.naturalWidth <= 121 && stage === 0) {
        img.src = ytThumb(id, "hqdefault");
      }
    });
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  const PLAY_SVG =
    '<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>';

  /* ---------- Hero ---------- */
  function renderHero() {
    $("#heroLede").textContent = PROFILE.tagline;
    const stats = $("#heroStats");
    PROFILE.stats.forEach((s) => {
      const li = el("li");
      li.appendChild(el("div", "num", escapeHTML(s.value)));
      li.appendChild(el("div", "lbl", escapeHTML(s.label)));
      stats.appendChild(li);
    });
  }

  /* ---------- About ---------- */
  function renderAbout() {
    const bio = $("#aboutBio");
    PROFILE.bioParas.forEach((p, i) => {
      const para = el("p", "reveal", p);
      para.style.setProperty("--d", i * 0.06 + "s");
      bio.appendChild(para);
    });
    PROFILE.skills.forEach((s) => $("#skillChips").appendChild(el("li", null, escapeHTML(s))));
    PROFILE.daws.forEach((d) => $("#dawChips").appendChild(el("li", null, escapeHTML(d))));
  }

  /* ---------- Film / OTT cards ---------- */
  function filmCard(item) {
    const card = el("article", "film-card reveal");

    const top = el("div", "film-card__top");
    top.appendChild(el("span", "badge badge--platform", escapeHTML(item.platform)));
    if (item.year) top.appendChild(el("span", "film-card__year", escapeHTML(item.year)));
    card.appendChild(top);

    card.appendChild(el("h3", "film-card__title", escapeHTML(item.title)));
    if (item.type) card.appendChild(el("p", "film-card__type", escapeHTML(item.type)));
    if (item.role)
      card.appendChild(el("p", "film-card__role", "<strong>" + escapeHTML(item.role) + "</strong>"));
    if (item.producer)
      card.appendChild(el("p", "film-card__producer", escapeHTML(item.producer)));

    const links = el("div", "film-card__links");
    (item.links || []).forEach((l) => {
      if (l.url) {
        const a = el("a", "link-row");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.innerHTML = escapeHTML(l.label) + ' <span class="arrow">→</span>';
        links.appendChild(a);
      } else {
        links.appendChild(
          el("span", "link-row link-row--muted", escapeHTML(l.label) + ' <span class="arrow">•</span>')
        );
      }
    });
    card.appendChild(links);
    return card;
  }

  function renderFilms() {
    const grid = $("#filmGrid");
    FILMS.forEach((f) => grid.appendChild(filmCard(f)));
    const tv = $("#tvGrid");
    TV.forEach((t) => tv.appendChild(filmCard(t)));
  }

  /* ---------- Video / thumbnail cards ---------- */
  // Renders a card that is a real outbound link to the actual video.
  function videoCard(opts) {
    // opts: { title, note, yt?, url?, platform? }
    const isYT = !!opts.yt;
    const href = isYT ? ytWatch(opts.yt) : opts.url;

    const a = el("a", "video-card reveal");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", (opts.title || "") + " — watch");

    const thumb = el("div", "video-thumb");
    if (isYT) {
      const img = el("img");
      img.alt = opts.title || "";
      img.loading = "lazy";
      thumb.appendChild(img);
      attachThumb(img, opts.yt, opts.title);
    } else {
      thumb.appendChild(el("div", "video-thumb__ph", escapeHTML(opts.title || "")));
    }

    // platform tag
    const tagLabel = isYT ? "YouTube" : opts.platform || "Watch";
    thumb.appendChild(el("span", "video-tag", escapeHTML(tagLabel)));
    thumb.insertAdjacentHTML("beforeend", PLAY_SVG);

    const meta = el("div", "video-meta");
    meta.appendChild(el("p", "video-brand", escapeHTML(opts.title || "")));
    if (opts.note) meta.appendChild(el("p", "video-note", escapeHTML(opts.note)));
    thumb.appendChild(meta);

    a.appendChild(thumb);

    const watchLabel = isYT ? "Watch on YouTube" : "Open on " + (opts.platform || "site");
    const foot = el("div", "video-card__watch");
    foot.innerHTML = "<span>" + escapeHTML(watchLabel) + '</span><span class="arrow">↗</span>';
    a.appendChild(foot);

    return a;
  }

  function renderBrands() {
    const grid = $("#brandGrid");
    BRANDS.forEach((b) =>
      grid.appendChild(
        videoCard({ title: b.brand, note: b.note, yt: b.yt, url: b.url, platform: b.platform })
      )
    );
  }

  function renderSession() {
    const grid = $("#sessionGrid");
    SESSION.forEach((s) => grid.appendChild(videoCard(s)));
  }

  function renderIndie() {
    const grid = $("#indieGrid");
    INDIE.forEach((i) => grid.appendChild(videoCard(i)));
  }

  /* ---------- Contact ---------- */
  const ICONS = {
    instagram:
      '<svg class="social__ic" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.87s0 3.6-.07 4.87c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.87.07s-3.6 0-4.87-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.87c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2m0 1.98c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.72a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.24-.06-1.61-.07-4.76-.07m0 3.37a4.45 4.45 0 1 0 0 8.9 4.45 4.45 0 0 0 0-8.9m0 7.34a2.89 2.89 0 1 1 0-5.78 2.89 2.89 0 0 1 0 5.78m5.66-7.56a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0"/></svg>',
    spotify:
      '<svg class="social__ic" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.59 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.81-.87 7.08-.5 9.72 1.11.29.18.38.57.21.86m1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.56 11.24 1.33.37.22.48.7.25 1.07m.1-2.83C14.8 8.2 9.3 8 6.17 8.95a.93.93 0 1 1-.54-1.78C9.22 6.08 15.29 6.31 18.86 8.43a.93.93 0 1 1-.95 1.6"/></svg>',
    apple:
      '<svg class="social__ic" viewBox="0 0 24 24"><path d="M16.36 12.9c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.29 1.15-.05 1.58-.74 2.97-.74 1.39 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.78-2.23.87-1.28 1.23-2.51 1.25-2.58-.03-.01-2.4-.92-2.43-3.65M14.2 6.3c.64-.77 1.07-1.85.95-2.92-.92.04-2.03.61-2.69 1.38-.59.68-1.11 1.77-.97 2.81 1.03.08 2.08-.52 2.71-1.27"/></svg>',
    imdb:
      '<svg class="social__ic" viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2.6 3.1H4.2v7.8h1.4zm5.8 0H9.6l-.5 3.6-.5-3.6H6.8v7.8h1.3v-5.1l.7 5.1h.9l.7-5.2v5.2h1.3zm2.5 0h-1.3v7.8h1.3c1.7 0 2.7-.3 2.7-2.6v-2.6c0-2.3-1-2.6-2.7-2.6m.9 5.7c0 .5-.1.7-.5.7v-5c.4 0 .5.2.5.7zm5-5.7c-.6 0-1 .2-1.3.6V8.1h-1.3v7.8h1.2l.1-.5c.3.4.7.6 1.3.6.9 0 1.2-.6 1.2-1.6v-3.4c0-1-.3-1.6-1.2-1.6m-.1 5c0 .3 0 .6-.4.6-.3 0-.4-.3-.4-.6v-3c0-.3.1-.5.4-.5.4 0 .4.2.4.5z"/></svg>',
    facebook:
      '<svg class="social__ic" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/></svg>',
  };

  function renderContact() {
    const em = $("#contactEmail");
    em.textContent = CONTACT.email;
    em.href = "mailto:" + CONTACT.email;

    const ph = $("#contactPhone");
    ph.textContent = CONTACT.phone;
    ph.href = "tel:" + CONTACT.phoneHref;

    const list = $("#contactSocials");
    CONTACT.socials.forEach((s) => {
      const a = el("a", "social");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML =
        (ICONS[s.icon] || "") +
        '<span><span class="s-label">' +
        escapeHTML(s.label) +
        '</span> <span class="s-handle">' +
        escapeHTML(s.handle) +
        "</span></span>";
      list.appendChild(a);
    });

    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const nav = $("#nav");
    const toggle = $("#navToggle");
    const links = $(".nav__links");
    const backdrop = $("#navBackdrop");

    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setMenu = (open) => {
      links.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      if (backdrop) backdrop.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
    if (backdrop) backdrop.addEventListener("click", () => setMenu(false));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("is-open")) setMenu(false);
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderFilms();
    renderBrands();
    renderSession();
    renderIndie();
    renderContact();
    initNav();
    // reveal after render so newly-added nodes are observed
    requestAnimationFrame(initReveal);
  });
})();
