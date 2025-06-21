const projects = [
    {
        title: "CentralMarket E-Commerce MERN App",
        description:
            "Full-stack e-commerce platform with cart, checkout & admin panel.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Paystack API"],
        repo: "https://github.com/simplysaad/centralmarket",
        repo: "https://github.com/simplysaad/centralmarket",
        live: "https://centralmarket.onrender.com",
        img: "IMG/ecommerce-demo.png"
    },
    {
        title: "short-en link shortener",
        description:
            "a simple tool to convert long urls into short, more memorable links and also helps with tracking",
        tech: ["EJS", "Node.js", "Express"],

        repo: "https://github.com/simplysaad/aleeyah-perfumes",
        live: "https://simplysaad.github.io/aleeyah-perfumes",
        img: "IMG/link-shortener.png"
    },
    {
        title: "Aleeyah perfumes",
        tech: ["HTML", "CSS", "javascript", "ES6+"],
        description:
            "static website for a small business that deals in perfumes",
        repo: "https://github.com/simplysaad/aleeyah-perfumes",
        live: "https://simplysaad.github.io/aleeyah-perfumes",
        img: "IMG/perfume.png"
    },
    {
        title: "BetterFuture NGO",
        tech: ["HTML", "CSS", "javascript", "ES6+"],
        description:
            "static website for an NGO that helps disabled individuals access meaningful education in africa",
        repo: "https://github.com/simplysaad/betterfuture",
        live: "https://simplysaad.github.io/betterfuture",
        img: "IMG/disabled.png"
    }
    //, {
    //     title: "Real-time Chat App",
    //     description:
    //         "Socket.io powered chat app with rooms and private messaging.",
    //     tech: ["React", "Node.js", "Express", "Socket.io"],
    //     repo: "https://github.com/yourusername/chat-app",
    //     live: "https://chatapp.yourdomain.com",
    //     img: "IMG/ecommerce-demo.png"
    // }
];

function createProjectCard(project) {
    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
    <div class="card h-100">
      <img src="${project.img}" alt="${
          project.title
      } screenshot" class="card-img-top project-img" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text flex-grow-1">${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
        <div class="mt-auto">
          <a href="${
              project.repo
          }" target="_blank" rel="noopener" class="btn btn-outline-primary me-2">GitHub Repo</a>
          <a href="${
              project.live
          }" target="_blank" rel="noopener" class="btn btn-primary">Live Demo</a>
        </div>
      </div>
    </div>
  `;
    return col;
}

function loadProjects() {
    const container = document.getElementById("projects-container");
    projects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
