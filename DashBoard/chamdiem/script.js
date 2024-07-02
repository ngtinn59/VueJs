// Calculate total points based on the table data
function calculateTotalPoints() {
    const rows = document.querySelectorAll("tbody tr");
    let totalPoints = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const maxPoints = cells[3].innerText;
        const svPoints = cells[5].innerText;
        
        if (svPoints) {
            totalPoints += parseFloat(svPoints);
        }
    });

    document.getElementById("totalPoints").innerText = totalPoints;
}

// Call the function to calculate total points on page load
document.addEventListener("DOMContentLoaded", calculateTotalPoints);
