for (let i = 1; i <= 100; i++) {
    const button = document.getElementById(`b${i}`);
    if (button) {
      button.addEventListener("click", () => {
        console.log(`Button ${i} clicked`);
        // do something with i
      });
    }
}
