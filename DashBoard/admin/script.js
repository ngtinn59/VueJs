document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
      const scoreA = parseInt(row.children[3].textContent);
      const scoreB = parseInt(row.children[4].textContent);
      if (!isNaN(scoreA) && !isNaN(scoreB)) {
        const difference = Math.abs(scoreA - scoreB);
        row.children[5].textContent = difference;
      }
    });
  });
  