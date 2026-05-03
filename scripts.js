const navbar = document.getElementsByTagName("nav")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];
const barsIcon = document.getElementsByClassName("fa-solid fa-bars")[0];
const container = document.getElementsByClassName("grid-container")[0];

// ELIMINAR EL ÚLTIMO / Y SUSTITUIRLO POR PREVIEW PARA SACAR EL LINK IFRAME

const videos = [
    {
        Link : "https://drive.google.com/file/d/1_htj5Se7pi-bYMkUJKsshsmYe0-6JwnE/preview",
        Description : "(COMMISSION) - Character Slots + Customization Menus + Shop and Economy Systems. DataStore included."
    },
    {
        Link : "https://drive.google.com/file/d/1ZDwDtmz-mmNDBAQ-CMYdvYoTIdvHV9PH/preview",
        Description : "(COMMISSION) - Supermarket System with DataStore."
    },
    {
        Link: "https://drive.google.com/file/d/1kp7HpWcwxi4CbsyM2hdP8IIJS35ynDfL/preview",
        Description: "(COMMISSION) - Kahhori abilities based off Marvel universe."
    },
    {
        Link: "https://drive.google.com/file/d/1tfC4WmPiJsB1m0d5ans3DQAGhv4XVHWm/preview",
        Description: "More Marvel abilities + Light That Burns the Sky (Pokémon)."
    },
    {
        Link : "https://drive.google.com/file/d/1fDv3rWRntd0fwQgoOWSGjqEVgzTpxXaX/preview",
        Description : "Abilities based off Charmed universe."
    },
    {
        Link : "https://drive.google.com/file/d/1hyrVG7Z5tlyhid1tUn93NvOPEvvocbtN/preview",
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