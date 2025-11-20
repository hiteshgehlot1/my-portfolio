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
setTimeout(() => typeText("typingSub", "Frontend Developer & App Builder"), 1200);

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

// Render Projects
projects.forEach(p => {
  document.getElementById("projectsGrid").innerHTML += `
    <div class="p-4 bg-gray-800 rounded-xl fade-in hover:-translate-y-1 transition">
      <h3 class="font-semibold text-lg">${p.title}</h3>
      <p class="text-gray-400 text-sm">${p.tech}</p>
      <a href="${p.link}" target="_blank" class="text-teal-400 text-sm mt-2 inline-block">Open →</a>
    </div>
  `;
});

// Render Certifications
certs.forEach(c => {
  document.getElementById("certsGrid").innerHTML += `
    <div class="p-4 bg-gray-800 rounded-xl fade-in">
      <img src="cert.png" alt="Certificate" class="w-full h-24 object-contain mb-3"/>${c.img}
      <h3 class="font-semibold text-lg ">${c.title}</h3>
      <p class="text-gray-400 text-sm">${c.org}</p>
      
    </div>
  `;
});
// <span class="text-xs text-teal-400">${c.year}</span>

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
