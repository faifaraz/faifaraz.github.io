const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task3/index.html" },

};

// Function to create the navigation menu
function createNav() {
    const navPanel = document.getElementById("navPanel");

    Object.values(works).forEach(work => {
        let link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.onclick = function () {
            loadWork(work.url);
            return false; // Prevent default link behavior
        };
        navPanel.appendChild(link);
    });
}

// Function to load the selected work inside an iframe
function loadWork(url) {
    document.getElementById("contentFrame").src = url;
}

// Initialize the navigation menu
createNav();
