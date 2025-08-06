let input = document.querySelector(".search-box input");
let btn = document.querySelector(".btn button");
let images = document.querySelector(".images");
let load = document.querySelector("#load");

const apiKey = "v5e5mM6c7IPCmRrn0L7cZ03AGaGfgATzdHVcl7WKUuV40rZiRlNrUN0p";  // ✅ Your Pexels API Key
let page = 1;
let keyword = "";

// Download function
function download(imgurl) {
    fetch(imgurl)
        .then(res => res.blob())
        .then(file => {
            let a = document.createElement("a");
            a.href = URL.createObjectURL(file);
            a.download = new Date().getTime();
            a.click();
        })
        .catch(() => alert("Failed to download"));
}

// Fetch and display images
async function getResponse() {
    keyword = input.value.trim();
    if (!keyword) {
        alert("Please enter a search term.");
        return;
    }

    let url = `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=12`;

    try {
        load.textContent = "Loading...";
        load.disabled = true;

        let response = await fetch(url, {
            headers: {
                Authorization: apiKey
            }
        });

        let data = await response.json();
        let results = data.photos;

        if (page === 1) {
            images.innerHTML = "";
        }

        if (results.length === 0) {
            if (page === 1) {
                images.innerHTML = "<p>No results found.</p>";
            }
            load.style.display = "none";
            return;
        }

        results.forEach((result) => {
            let li = document.createElement("li");
            li.classList.add("image");
            let html = `
                <img src="${result.src.medium}" alt="img" class="photo">
                <div class="details">
                    <div class="user">
                        <img src="camera.svg" alt="user">
                        <span>${result.photographer}</span>
                    </div>
                    <div class="download" onclick="download('${result.src.original}')">
                        <img src="download.svg" alt="download">
                    </div>
                </div>
            `;
            li.innerHTML = html;
            images.appendChild(li);
        });

        // Pexels doesn’t provide total_pages, so we use result count
        if (results.length === 12) {
            load.style.display = "block";
            load.textContent = "More";
            load.disabled = false;
        } else {
            load.style.display = "none";
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong while fetching images.");
        load.style.display = "none";
    }
}

// Event listeners
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        page = 1;
        getResponse();
    }
});
btn.addEventListener("click", () => {
    page = 1;
    getResponse();
});
load.addEventListener("click", () => {
    page++;
    getResponse();
});
