const navbar = document.getElementsByTagName("nav")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];
const barsIcon = document.getElementsByClassName("fa-solid fa-bars")[0];
const container = document.getElementsByClassName("grid-container")[0];

// ELIMINAR EL ÚLTIMO / Y SUSTITUIRLO POR PREVIEW PARA SACAR EL LINK IFRAME

const videos = [
    {
        Link : "https://youtu.be/embed/Hhcvl1iYpJ8",
        Description: "(COMMISSION) - Guess the Emoji."
    },
    {
        Link : "https://youtube.com/embed/mpheqZXlf04",
        Description: "(COMMISSION) - Dominoes Minigame."
    },
    {
        Link : "https://youtube.com/embed/_uzdSPt2VqQ",
        Description : "(COMMISSION) - Character Slots + Customization Menus + Shop and Economy Systems. DataStore included."
    },
    {
        Link : "https://youtube.com/embed/ahZmYymrN8o",
        Description : "(COMMISSION) - Supermarket System with DataStore."
    },
    {
        Link : "https://youtube.com/embed/L8UcRXsR7Cw",
        Description: "(COMMISSION) - Kahhori abilities based off Marvel universe."
    },
    {
        Link : "https://youtube.com/embed/i9xruTtD2rA",
        Description: "More Marvel abilities + Light That Burns the Sky (Pokémon)."
    },
    {
        Link : "https://youtube.com/embed/eXSpajwT3SY",
        Description : "Abilities based off Charmed universe."
    },
    {
        Link : "https://youtube.com/embed/Hhcvl1iYpJ8",
        Description : "Storm abilities based off Marvel universe."
    },
];

for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    const div = document.createElement("div");
    div.className = "container";

    const iframe = document.createElement("iframe");
    iframe.src = video.Link;

    const p = document.createElement("p");
    p.className = "small1";
    p.textContent = video.Description;

    div.appendChild(iframe);
    div.appendChild(p);
    container.appendChild(div);
}


navbar.addEventListener("click", () => {
    const barsVisible = window.getComputedStyle(barsIcon).display !== "none";
    if (barsVisible) {
        const dropdownDisplay = window.getComputedStyle(dropdown).display;
        if (dropdownDisplay === "none") {
            dropdown.style.display = "flex";
        } else {
            dropdown.style.display = "none";
        }
    }
});