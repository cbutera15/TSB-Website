// BASE CONCEPT FROM https://www.youtube.com/watch?v=L1eu737bu70

const sections = document.querySelectorAll('section.vid, .brand-statement');

sections.forEach(section => {
    const videos = section.querySelectorAll('video');
    if (!videos.length) return; // Skip if no videos are found in the section

    videos.forEach(vid => {
        const offset = parseInt(vid.dataset.offset || 0, 10); // Read offset from data attribute or default to 0
        vid.pause();

        const scroll = () => {
            const distance = window.scrollY - section.offsetTop + offset;
            const total = section.clientHeight - window.innerHeight;

            let percentage = distance / total;
            percentage = Math.max(0, percentage);
            percentage = Math.min(percentage, 1);

            if (vid.duration > 0) {
                vid.currentTime = vid.duration * percentage;
            }
        };

        scroll();
        window.addEventListener('scroll', scroll);
    });
});