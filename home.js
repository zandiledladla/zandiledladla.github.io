import {projects,coverCode} from "./projects.js";

const arrow='<span aria-hidden="true">↗</span>';
document.querySelector("#portfolio-grid").innerHTML=projects.map((p)=>`
  <article class="portfolio-card">
    <a class="card-cover cover-${p.number}" href="project.html?id=${p.slug}" aria-label="View ${p.title} case study">
      <div class="cover-top"><span class="cover-category">${p.category}</span><span class="cover-index">/${p.number}</span></div>
      <div class="cover-terminal" aria-hidden="true"><div class="terminal-bar"><i></i><i></i><i></i><span>${coverCode[p.number].label}</span></div><code><b>&gt;</b> ${coverCode[p.number].code}</code><small>${coverCode[p.number].signal}</small></div>
      <span class="cover-title">${p.title}</span>
    </a>
    <div class="card-body"><div class="card-meta"><span>${p.number}</span><span>${p.category}</span><span>${p.status}</span></div><h3><a href="project.html?id=${p.slug}">${p.title}</a></h3><p>${p.summary}</p><div class="card-footer"><div class="tag-list">${p.tags.slice(0,4).map(t=>`<span>${t}</span>`).join("")}</div><a class="case-link" href="project.html?id=${p.slug}">View case study ${arrow}</a></div></div>
  </article>`).join("");

const skills=["Python","JavaScript","Java","SQL","HTML & CSS","Firebase","AWS","REST APIs","Git","Machine Learning","NLP","TanStack Query"];
document.querySelector("#skills-list").innerHTML=skills.map((s,i)=>`<span><small>${String(i+1).padStart(2,"0")}</small>${s}</span>`).join("");
const modules=["Advanced Software Engineering","Computer Science Project Analysis","Computer Science Project Implementation","Internet of Things","Big Data Engineering","Cybersecurity","Artificial Intelligence","Reinforcement Learning"];
document.querySelector("#module-list").innerHTML=modules.map((m,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><p>${m}</p></div>`).join("");
