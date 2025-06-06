document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("progress-bar");
    const loadingText = document.getElementById("loading-text");
    const barContainer = document.getElementById("progress-bar-container");

    // Filter assets to only include images and videos
    const assets = Array.from(document.querySelectorAll("img, video"));
    const totalAssets = assets.length;
    let loadedAssets = 0;

    if (totalAssets === 0) {
        // If no assets to load, hide the loading screen immediately
        loadingScreen.style.display = "none";
        return;
    }

    function updateProgress() {
        loadedAssets++;
        const progress = Math.floor((loadedAssets / totalAssets) * 100);
        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `${progress}%`;
        if (progress <= 50) {
            loadingText.style.color = '#ff6a00'; // orange for 0-50%
        } else {
            loadingText.style.color = '#fafaee'; // white for 51-100%
        }

        if (loadedAssets === totalAssets) {
            setTimeout(() => {
                barContainer.style.backgroundColor = '#ff6a00';
                progressBar.classList.add("fade-out"); // Add fade-out class
                setTimeout(() => {
                    loadingScreen.style.transition = "opacity 0.5s ease-in-out";
                    loadingScreen.style.opacity = "0"; // Fade out the loading screen
                    setTimeout(() => {
                        loadingScreen.style.display = "none"; // Hide after fade-out
                    }, 2000); // Wait for loading screen fade-out
                }, 500);
            }, 300);
        }
    }

    // Fallback for assets that don't fire load/error events
    const fallbackTimeout = setTimeout(() => {
        if (loadedAssets < totalAssets) {
            console.warn("Some assets did not load in time. Forcing progress to complete.");
            while (loadedAssets < totalAssets) {
                updateProgress();
            }
        }
    }, 1000); // Adjust timeout as needed

    assets.forEach((asset) => {
        console.log("Tracking asset:", asset.src || asset.currentSrc || asset);
        if (asset.complete) {
            updateProgress();
        } else {
            asset.addEventListener("load", updateProgress);
            asset.addEventListener("error", updateProgress);
        }
    });
});