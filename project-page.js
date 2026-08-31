import {projects} from "./projects.js";

const id=new URLSearchParams(location.search).get("id");
const project=projects.find(p=>p.slug===id);
if(!project){location.replace("index.html#work");}
else{
  document.title=`${project.title} | Zandile Dladla`;
  document.querySelector('meta[name="description"]').setAttribute("content",project.summary);
  const next=projects[(projects.indexOf(project)+1)%projects.length];
  const arrow='<span aria-hidden="true">↗</span>';
  document.querySelector("#case-page").innerHTML=`
    <a class="skip-link" href="#case-study">Skip to case study</a>
    <nav class="site-nav case-nav" aria-label="Project navigation"><a class="wordmark" href="index.html">ZD<span>.</span></a><a class="back-link" href="index.html#work">← All projects</a><a class="nav-cta" href="Zandile-Dladla-CV.pdf" download="Zandile-Dladla-Public-CV.pdf">Download CV ${arrow}</a></nav>
    <header class="case-hero" id="case-study"><div class="case-label">${project.number} / ${project.category}</div><h1>${project.title}</h1><p>${project.summary}</p><div class="case-actions">${project.live?`<a class="button button-primary" href="${project.live}" target="_blank" rel="noreferrer">View live project ${arrow}</a>`:""}${project.github?`<a class="button button-outline" href="${project.github}" target="_blank" rel="noreferrer">View source code ${arrow}</a>`:""}</div></header>
    <div class="case-cover case-cover-contained"><img src="${project.image}" alt="${project.imageAlt}"></div>
    <section class="case-facts"><div><span>Status</span><strong>${project.status}</strong></div><div><span>Project type</span><strong>${project.type}</strong></div><div><span>Role</span><strong>${project.type.includes("team")?"Contributor":"Designer & developer"}</strong></div></section>
    <section class="case-section two-column"><div class="case-section-title">01 / Overview</div><div class="case-content"><div><h2>The challenge</h2><p>${project.problem}</p></div><div><h2>The solution</h2><p>${project.solution}</p></div></div></section>
    <section class="case-section two-column"><div class="case-section-title">02 / Key features</div><div class="feature-list">${project.features.map((f,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><p>${f}</p></div>`).join("")}</div></section>
    <section class="case-section two-column contribution"><div class="case-section-title">03 / My contribution</div><div><h2>What I worked on</h2><p>${project.contribution}</p></div></section>
    <section class="case-section two-column"><div class="case-section-title">04 / Outcome</div><div><h2>Result and reflection</h2><p>${project.outcome}</p><div class="case-tags">${project.tags.map(t=>`<span>${t}</span>`).join("")}</div></div></section>
    ${project.gallery?`<section class="case-gallery" aria-label="Project gallery">${project.gallery.map(i=>`<img src="${i.src}" alt="${i.alt}">`).join("")}</section>`:""}
    <section class="next-project"><span>Next project</span><a href="project.html?id=${next.slug}">${next.title} ${arrow}</a></section>
    <footer><span>© 2026 Zandile Dladla</span><a href="index.html#work">All projects ↑</a></footer>`;
}
