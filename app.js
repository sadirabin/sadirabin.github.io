/* Layout code. Content lives in data.js — you should not need to edit this file. */
(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Escapes text and highlights any [PLACEHOLDER ...] so it is easy to spot.
  function t(s) {
    return esc(s).replace(/\[PLACEHOLDER[^\]]*\]/g, function (m) { return '<mark class="ph">' + m + "</mark>"; });
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function link(l) {
    if (!l.href) return "<span>" + t(l.label) + "</span>";
    var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="link-arrow" href="' + esc(l.href) + '"' + ext + ">" + t(l.label) + " →</a>";
  }

  /* ---------- Theme ---------- */
  function setTheme(theme, save) {
    document.documentElement.dataset.theme = theme;
    var dark = theme === "dark";
    $("themeToggle").setAttribute("aria-pressed", String(dark));
    $("themeLabel").textContent = dark ? "Light mode" : "Dark mode";
    if (save) { try { localStorage.setItem("theme", theme); } catch (e) {} }
  }
  $("themeToggle").addEventListener("click", function () {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
  });
  setTheme(document.documentElement.dataset.theme || "light", false);

  /* ---------- Header + hero ---------- */
  $("brand").textContent = S.meta.name;
  var h = S.hero;
  var portrait = S.meta.headshot
    ? '<img class="portrait" src="' + esc(S.meta.headshot) + '" alt="' + esc(S.meta.headshotAlt) + '" width="240" height="300">'
    : '<div class="portrait-ph"><mark class="ph">[PLACEHOLDER]</mark><span>Headshot. Set <code>meta.headshot</code> in data.js</span></div>';
  $("hero").innerHTML =
    '<div class="hero-main">' +
      '<p class="kicker">' + t(h.eyebrow) + "</p>" +
      '<h1 id="hero-h">' + t(h.headline) + "</h1>" +
      '<p class="intro">' + t(h.intro) + "</p>" +
      '<ul class="roles" aria-label="' + esc(h.rolesLabel) + '"><li class="label" style="border:0;padding-left:0" aria-hidden="true">' + t(h.rolesLabel) + "</li>" +
        h.roles.map(function (r) { return "<li>" + t(r) + "</li>"; }).join("") + "</ul>" +
      '<div class="cta-row">' +
        '<a class="btn" href="mailto:' + esc(S.meta.email) + '">Contact me</a>' +
        '<a class="link-arrow" href="#work">See the work ↓</a>' +
        '<a class="link-arrow" href="' + esc(S.meta.resumePdf) + '" target="_blank" rel="noopener">Resume (PDF) →</a>' +
      "</div>" +
    "</div>" +
    '<aside class="hero-side" aria-label="At a glance">' + portrait +
      '<ul class="proof">' + h.proof.map(function (p) {
        return '<li><span class="num">' + t(p.value) + "</span><span>" + t(p.label) + "</span></li>";
      }).join("") + "</ul>" +
    "</aside>";

  /* ---------- Before / after showcase (used when a project has `before`, `embed`, `changes`) ---------- */
  function showcase(p) {
    var b = p.before, e = p.embed, html = '<div class="case-demo showcase">';
    if (b) {
      html += '<section class="ba" aria-label="Before"><p class="ba-tag label">Before</p>' +
        '<figure><div class="ba-imgs">' + b.images.map(function (im) {
          return '<a href="' + esc(im.src) + '" target="_blank" rel="noopener"><img src="' + esc(im.src) + '" alt="' + esc(im.alt) + '" loading="lazy" width="1430" height="748"></a>';
        }).join("") + '</div><figcaption>' + t(b.caption) + "</figcaption></figure></section>";
    }
    if (e) {
      html += '<section class="ba" aria-label="After"><p class="ba-tag label ba-after">After · live dashboard</p>' +
        // Same as Tableau Public: Tableau picks the desktop or phone layout from the device itself.
        '<div class="embed"><iframe src="' + esc(e.src) + '" title="' + esc(e.title) + '" loading="lazy" allowfullscreen></iframe></div>' +
        '<p class="case-links">' + link(e.link) + "</p></section>";
    }
    if (p.changes || p.recommendation) {
      html += '<div class="ba-notes">' +
        (p.changes ? '<div><h4 class="label">What I changed and why</h4><ul class="changes">' + p.changes.map(function (c) { return "<li>" + t(c) + "</li>"; }).join("") + "</ul></div>" : "") +
        (p.recommendation ? '<div><h4 class="label">Recommendation</h4><p class="reco">' + t(p.recommendation) + "</p></div>" : "") +
        "</div>";
    }
    return html + "</div>";
  }

  /* Keep embedded dashboards at their designed size, scaled to the available width. */
  function fitEmbeds() {
    document.querySelectorAll(".embed").forEach(function (box) {
      box.style.setProperty("--scale", box.clientWidth / 1270);
    });
  }

  /* ---------- Projects ---------- */
  $("projects").innerHTML = S.projects.map(function (p, i) {
    var meta = [p.org && "<strong>" + t(p.org) + "</strong>", p.role && t(p.role), t(p.dates), t(p.place)].filter(Boolean).join("<br>");
    var toolList = '<ul class="tools">' + p.tools.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul>";
    var steps = p.changes ? [["Tools", toolList]] : [["Problem", t(p.problem)], ["What I did", t(p.did)], ["Tools", toolList], ["Result", t(p.result)]];
    return '<article class="case" id="project-' + esc(p.id) + '" aria-labelledby="ph-' + esc(p.id) + '">' +
      '<header class="case-id"><span class="case-no num" aria-hidden="true" data-n="' + pad(i + 1) + '"></span>' +
        '<h3 id="ph-' + esc(p.id) + '">' + t(p.title) + '</h3><p class="case-meta">' + meta + "</p></header>" +
      '<div class="case-body"><p class="case-summary">' + t(p.summary) + "</p>" +
        '<dl class="steps">' + steps.map(function (s) {
          return '<div><dt class="label">' + s[0] + "</dt><dd>" + s[1] + "</dd></div>";
        }).join("") + "</dl>" +
        (p.stats && p.stats.length ? '<ul class="case-stats">' + p.stats.map(function (s) {
          return '<li><span class="num">' + t(s.value) + "</span><span>" + t(s.label) + "</span></li>";
        }).join("") + "</ul>" : "") +
        (p.links && p.links.length ? '<div class="case-links">' + p.links.map(link).join("") + "</div>" : "") +
      "</div>" +
      (p.demo === "inventory" ? '<div class="case-demo"><div class="demo" id="demo"></div></div>' : "") +
      (p.before || p.embed ? showcase(p) : "") +
    "</article>";
  }).join("");

  fitEmbeds();
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(fitEmbeds);
    document.querySelectorAll(".embed").forEach(function (box) { ro.observe(box); });
  } else {
    window.addEventListener("resize", fitEmbeds);
  }

  /* ---------- Skills + education ---------- */
  var e = S.education;
  $("skillsBody").innerHTML = S.skills.map(function (g) {
    return '<div class="skill-col"><h3>' + t(g.group) + "</h3><ul>" + g.items.map(function (it) {
      return "<li><strong>" + t(it.name) + "</strong>" + (it.detail ? "<span>" + t(it.detail) + "</span>" : "") + "</li>";
    }).join("") + "</ul></div>";
  }).join("") +
    '<div class="edu"><p class="label">Education</p><div><h3>' + t(e.school) + "</h3><p>" + t(e.degree) + " · " + t(e.date) +
'</p><p class="course"><span class="label">Coursework</span><br>' + t(e.coursework.join(" · ")) + "</p>" +
    (e.activities && e.activities.length ? '<p class="course"><span class="label">Activities</span><br>' + t(e.activities.join(" · ")) + "</p>" : "") + "</div></div>";

  /* ---------- Experience + leadership ---------- */
  function xp(x) {
    return '<article class="xp"><p class="xp-when">' + t(x.dates) + "<br>" + t(x.place) +
      (x.stat ? '<br><br><span class="lead-stat num">' + t(x.stat.value) + "</span>" + t(x.stat.label) : "") + "</p>" +
      "<div><h3>" + t(x.role) + '</h3><p class="org">' + t(x.org) + "</p><ul>" +
      x.bullets.map(function (b) { return "<li>" + t(b) + "</li>"; }).join("") + "</ul></div></article>";
  }
  $("experienceBody").innerHTML = S.experience.map(xp).join("") +
    '<h3 class="subhead">Leadership &amp; honors</h3>' + S.leadership.map(xp).join("");

  /* ---------- Design notes ---------- */
  var d = S.designNotes;
  $("designBody").innerHTML = '<p class="design-intro">' + t(d.intro) + '</p><ol class="notes">' +
    d.notes.map(function (n) { return "<li><div><h3>" + t(n.title) + "</h3><p>" + t(n.body) + "</p></div></li>"; }).join("") +
    '</ol><p class="stack">' + t(d.stack) + "</p>";

  /* ---------- Contact + footer ---------- */
  $("contactBody").innerHTML = '<h2 id="contact-h">' + t(S.contact.heading) + "</h2><p>" + t(S.contact.body) + "</p>" +
    '<div class="cta-row"><a class="btn" href="mailto:' + esc(S.meta.email) + '">Email ' + esc(S.meta.email) + "</a>" +
    '<a href="' + esc(S.meta.linkedin) + '" target="_blank" rel="noopener">LinkedIn →</a>' +
    '<a href="' + esc(S.meta.resumePdf) + '" download>Download resume (PDF) ↓</a></div>';
  $("footer").innerHTML = "<span>© " + new Date().getFullYear() + " " + esc(S.meta.name) + " · " + esc(S.meta.location) + "</span>" +
    '<span><a href="' + esc(S.meta.resumePdf) + '" target="_blank" rel="noopener">Resume (PDF)</a> · <a href="' + esc(S.meta.linkedin) + '" target="_blank" rel="noopener">' + esc(S.meta.linkedinLabel) + "</a></span>";

  /* ---------- Interactive inventory demo (sample data) ---------- */
  var demo = $("demo");
  if (demo) {
    var inv = S.sampleInventory;
    var state = { view: "raw", lang: "en", house: "all" };

    var houseName = function (id, L) {
      var hs = inv.houses.filter(function (x) { return x.id === id; })[0];
      return (hs.type === "shade" ? L.shade : L.green) + " " + hs.n;
    };
    // Validated rows: duplicates folded into the row they belong to.
    var cleanRows = function () {
      var out = [], map = {};
      inv.rows.forEach(function (r, i) {
        if (r.issue === "duplicate") return;
        map[i] = { house: r.house, plant: r.clean.plant, size: r.clean.size, qty: r.clean.qty, merged: false };
        out.push(map[i]);
      });
      inv.rows.forEach(function (r) {
        if (r.issue === "duplicate" && map[r.mergeInto]) { map[r.mergeInto].qty += r.clean.qty; map[r.mergeInto].merged = true; }
      });
      return out;
    };
    var isCount = function (q) { return /^\d+$/.test(q); };

    function seg(name, opts, current) {
      return '<span class="seg">' + opts.map(function (o) {
        return '<button type="button" data-set="' + name + '" data-val="' + o[0] + '" aria-pressed="' + (o[0] === current) + '">' + esc(o[1]) + "</button>";
      }).join("") + "</span>";
    }

    function render(focusKey) {
      var L = inv.labels[state.lang], raw = state.view === "raw";
      var inHouse = function (r) { return state.house === "all" || r.house === state.house; };
      var rows, units, flags, body;

      if (raw) {
        rows = inv.rows.filter(inHouse);
        units = rows.reduce(function (a, r) { return a + (isCount(r.raw.qty) ? +r.raw.qty : 0); }, 0);
        flags = rows.filter(function (r) { return r.issue; }).length;
        body = rows.map(function (r) {
          var blank = '<span class="blank">' + esc(L.empty) + "</span>";
          return '<tr class="' + (r.issue ? "flagged" : "") + '"><td>' + esc(houseName(r.house, L)) + '</td><td class="p">' + esc(r.raw.plant) +
            '</td><td class="s">' + (r.raw.size ? esc(r.raw.size) : blank) + '</td><td class="q">' + (r.raw.qty ? esc(r.raw.qty) : blank) +
            "</td><td>" + (r.issue ? '<span class="chip bad">' + esc(L[r.issue]) + "</span>" : '<span class="chip ok">' + esc(L.ok) + "</span>") + "</td></tr>";
        }).join("");
      } else {
        rows = cleanRows().filter(inHouse);
        units = rows.reduce(function (a, r) { return a + r.qty; }, 0);
        flags = 0;
        body = rows.map(function (r) {
          return "<tr><td>" + esc(houseName(r.house, L)) + '</td><td class="p">' + esc(r.plant) + '</td><td class="s">' + esc(r.size) +
            '</td><td class="q">' + r.qty + '</td><td><span class="chip ok">' + esc(L.ok) + (r.merged ? " · " + esc(L.merged) : "") + "</span></td></tr>";
        }).join("");
      }

      // Bars always show every house so the filter does not hide context.
      var per = {}, max = 0;
      inv.houses.forEach(function (hs) { per[hs.id] = 0; });
      if (raw) inv.rows.forEach(function (r) { if (isCount(r.raw.qty)) per[r.house] += +r.raw.qty; });
      else cleanRows().forEach(function (r) { per[r.house] += r.qty; });
      cleanRows().forEach(function (r) { max = Math.max(max, r.qty); });
      var houseTotals = {}; cleanRows().forEach(function (r) { houseTotals[r.house] = (houseTotals[r.house] || 0) + r.qty; });
      max = Math.max.apply(null, Object.keys(houseTotals).map(function (k) { return houseTotals[k]; }));

      demo.className = "demo " + (raw ? "is-raw" : "is-clean");
      demo.lang = state.lang;
      demo.innerHTML =
        '<div class="demo-top"><h4>' + esc(L.title) + '</h4><span class="sample-tag">' + esc(L.sample) + "</span></div>" +
        '<div class="demo-controls">' +
          '<fieldset class="ctl"><legend class="label">' + esc(L.view) + "</legend>" + seg("view", [["raw", L.raw], ["clean", L.clean]], state.view) + "</fieldset>" +
          '<fieldset class="ctl"><legend class="label">' + esc(L.lang) + "</legend>" + seg("lang", [["en", "English"], ["es", "Español"]], state.lang) + "</fieldset>" +
          '<div class="ctl"><label class="label" for="houseSel">' + esc(L.filter) + '</label><select id="houseSel">' +
            '<option value="all">' + esc(L.all) + "</option>" + inv.houses.map(function (hs) {
              return '<option value="' + hs.id + '"' + (hs.id === state.house ? " selected" : "") + ">" + esc(houseName(hs.id, L)) + "</option>";
            }).join("") + "</select></div>" +
        "</div>" +
        '<div class="demo-grid"><div class="demo-table-wrap" tabindex="0" role="region" aria-label="' + esc(L.title) + '"><table>' +
          "<thead><tr><th scope=\"col\">" + esc(L.house) + '</th><th scope="col">' + esc(L.plant) + '</th><th scope="col">' + esc(L.size) +
          '</th><th scope="col" class="q">' + esc(L.qty) + '</th><th scope="col">' + esc(L.status) + "</th></tr></thead><tbody>" + body + "</tbody></table></div>" +
        '<div class="demo-side"><div class="tiles" aria-live="polite">' +
          '<div class="tile"><span class="num">' + rows.length + "</span><span>" + esc(L.products) + "</span></div>" +
          '<div class="tile"><span class="num">' + units.toLocaleString() + "</span><span>" + esc(L.units) + (raw ? " (" + esc(L.unverified) + ")" : "") + "</span></div>" +
          '<div class="tile ' + (flags ? "warn" : "good") + '"><span class="num">' + flags + "</span><span>" + esc(L.flags) + "</span></div></div>" +
          '<div><p class="label" style="margin-bottom:.5rem">' + esc(L.byHouse) + '</p><ul class="bars">' + inv.houses.map(function (hs) {
            return "<li><span>" + hs.id + '</span><span class="track"><span class="fill" style="display:block;width:' + Math.round(per[hs.id] / max * 100) + '%"></span></span><span class="v">' + per[hs.id] + "</span></li>";
          }).join("") + "</ul></div>" +
          '<p class="demo-note">' + esc(raw ? L.rawNote : L.cleanNote) + "</p></div></div>";

      // Keep keyboard focus on the control that was just used.
      if (focusKey) {
        var el = focusKey === "house" ? $("houseSel") : demo.querySelector('[data-set="' + focusKey[0] + '"][data-val="' + focusKey[1] + '"]');
        if (el) el.focus();
      }
    }

    demo.addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-set]");
      if (!b) return;
      state[b.dataset.set] = b.dataset.val;
      render([b.dataset.set, b.dataset.val]);
    });
    demo.addEventListener("change", function (ev) {
      if (ev.target.id === "houseSel") { state.house = ev.target.value; render("house"); }
    });
    render();
  }
})();
