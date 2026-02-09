// Typing effect
function typeText(elementId, text, speed = 90) {
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML = text.slice(0, i + 1) + "<span class='typing'></span>";
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Start typing animation
typeText("typingName", "HITESH GEHLOT");
setTimeout(() => typeText("typingSub", "Web Developer & Cloud Enthusiast"), 1200);

// Dynamic project cards
const projects = [
  { title: "WeatherApp", tech: "HTML, JS", link: "#" },
  { title: "Notes Lite", tech: "Tailwind, JS", link: "#" },
  { title: "QR Maker", tech: "API, JS", link: "#" }
];

const certs = [
  { title: "Oracle Cloud Foundation", org: "Oracle", img: "./assets/Hitesh1.PNG" },
  { title: "Introduction to Cloud", org: "IBM"},
  { title: "Foundation of Cloud IoT & Edge ML", org: "NPTEL"},
  { title: "Developing Soft Skills", org: "NPTEL", }
];

const skill = [
  { Name: "Javascript"},
  { Name: "HTML"},
  { Name: "CSS"},
  { Name: "Tailwind CSS"},
  { Name: "C++"},
  { Name: "Introduction to Cloud"},
];

// Render Projects
projects.forEach(p => {
  document.getElementById("projectsGrid").innerHTML += `
    <div class="p-4 bg-gray-900 rounded-xl fade-in hover:-translate-y-1 transition box-shadow-medium">
      <h3 class="font-semibold text-lg">${p.title}</h3>
      <p class="text-gray-400 text-sm">${p.tech}</p>
      <a href="${p.link}" target="_blank" class="text-yellow-900  text-sm mt-2 inline-block">Open →</a>
    </div>
  `;
});

// Render Certifications
// Render Certifications
const certsGrid = document.getElementById("certsGrid");

certs.forEach(c => {
  certsGrid.innerHTML += `
    <div class="
      p-4
      bg-gray-900
      rounded-xl
      fade-in
      box-shadow-medium
      hover:-translate-y-1
      transition
      text-center
      w-full
      max-w-sm
      mx-auto
    ">
      <img src="${c.img}"
        class="w-full h-20 sm:h-24 object-contain mb-3"/>

      <h3 class="font-semibold text-base sm:text-lg">
        ${c.title}
      </h3>

      <p class="text-gray-400 text-sm">
        ${c.org}
      </p>
    </div>
  `;
});

// <span class="text-xs text-teal-400">${c.year}</span>


skill.forEach(c => {
  document.getElementById("skillGrid").innerHTML += `

     <div class="fade-in hover:-translate-y-1 transition w-fit m-auto">
     <h3 class=" bg-indigo-900 text-white font-semibold text-lg px-3 py-1 rounded shadow fade-in hover:-translate-y-1 transition">
      ${c.Name}
    </h3>

     </div>

      
      
   
  `;
});

// Footer Year
document.getElementById("year").innerText = new Date().getFullYear();

// Fade-in on scroll
const revealElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  })
},{ threshold:0.12 });

revealElements.forEach(el => observer.observe(el));
