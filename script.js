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
setTimeout(() => typeText("typingSub", "Aspiring DevOps Engineer & Technology Enthusiast"), 1200);

//Dynamic Projets
const projects = [
  { 
    title: "Container Launchpad", 
    tech: "Dockerode, Docker, React, Express, axios, Tailwind", 
    description: "Container Launchpad is a web application that simplifies Docker container management. Through an intuitive interface, users can control container lifecycles, monitor status in real time, and access logs without using the command line.",
    link: "#" 
  },

  { 
    title: "SecureScope", 
    tech: "React, Tailwind, API, OWASP", 
    description: "A lightweight security analysis tool. SecureScope is a security scanning tool that takes a website URL and evaluates it against OWASP inspired vulnerability standards. It generates security details, highlights potential risks, and provides an overall risk status to assist in effective security management.",
    link: "#" 
  },

  { 
    title: "Cloud Cost Calculator", 
    tech: "React, Tailwind, API", 
    description: "Estimate and compare cloud infrastructure costs in real time to avoid surprise billing storms.",
    link: "#" 
  },

  { 
    title: "QR Maker", 
    tech: "API, JS", 
    description: "Generate QR codes instantly for URLs or text using a simple API integration.",
    link: "#" 
  },
  
  { 
    title: "WeatherApp", 
    tech: "HTML, JS", 
    description: "Fetches live weather data and displays clean, minimal forecasts for any city.",
    link: "#" 
  },

  { 
    title: "Notes Lite", 
    tech: "Tailwind, JS", 
    description: "A distraction free note taking app with local storage support.",
    link: "#" 
  },
  
];

const certs = [
  { title: "Oracle Cloud Foundation", org: "Oracle", img: "./assets/oracle.png" },
  { title: "Associate Cloud Engineer SkillLabs", org: "Google CLoud", img: "./assets/gcp.jpeg" },
  { title: "AWS Academy", org: "NPTEL", img: "./assets/aws-hitesh.png" },
  { title: "Introduction to Cloud", org: "IBM", img: "./assets/ibm.png" },
  { title: "Foundation of Cloud IoT & Edge ML", org: "NPTEL"},
  { title: "Developing Soft Skills", org: "NPTEL", }
];

const skill = [
  { Name: "C++"},
  { Name: "Javascript"},
  { Name: "HTML"},
  { Name: "CSS"},
  { Name: "React"},
  { Name: "NodeJS"},
  { Name: "npm"},
  { Name: "Tailwind CSS"},
  { Name: "Cloud"},
  { Name: "AWS"},
  { Name: "Docker"},
  { Name: "GCP"},
  { Name: "Github"},
  { Name: "MongoDB"},
  
];

// Render Projects
projects.forEach(p => {
  document.getElementById("projectsGrid").innerHTML += `
    <div class="p-8 bg-gray-900 rounded-xl fade-in hover:-translate-y-1 transition box-shadow-medium">
      <h3 class="font-semibold text-lg mb-1">${p.title}</h3>
      <p class="text-gray-400 text-sm mb-2">${p.tech}</p>
      <p class="text-gray-300 text-sm mb-3 leading-relaxed">
        ${p.description}
      </p>
      <a href="${p.link}" target="_blank" 
         class="text-yellow-500 hover:text-yellow-400 text-sm inline-block">
         Open →
      </a>
    </div>
  `;
});


// Render Certifications
const certsGrid = document.getElementById("certsGrid");

certs.forEach(c => {
  certsGrid.innerHTML += `
    <div class="
     
      p-5
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
        class="w-full h-40 sm:h-34 rounded-xl object-contain mb-3"/>

      <h3 class="font-semibold text-base sm:text-lg">
        ${c.title}
      </h3>

      <p class="text-gray-400 text-sm">
        ${c.org}
      </p>
    </div>
  `;
});



skill.forEach(c => {
  document.getElementById("skillGrid").innerHTML += `
      <div class="fade-in hover:-translate-y-1 transition w-fit m-3">
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
