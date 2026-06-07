async function loadMeme() {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    document.querySelector(".image").src = data.url;
    document.querySelector(".title").textContent = data.title;
}

loadMeme();