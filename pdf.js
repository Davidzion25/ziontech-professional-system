// js/pdf.js
function generatePDF(content, title){
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    // Add logo
    var img = new Image();
    img.src = "images/ziontech-logo.png";
    img.onload = function() {
        doc.addImage(img, 'PNG', 10, 10, 30, 30);

        // Add title
        doc.setFontSize(18);
        doc.text(title, 50, 25);

        // Add lesson content below
        doc.setFontSize(12);
        let lines = doc.splitTextToSize(content, 180);
        doc.text(lines, 10, 50);

        // Footer
        doc.setFontSize(10);
        doc.text("ZionTech – Knowledge is Power", 10, 290);

        // Save PDF
        doc.save(title + ".pdf");
    }
}

function generateAllPDFs(){
    const lessons = document.querySelectorAll(".lesson");
    lessons.forEach(lesson => {
        const content = lesson.innerText;
        const title = lesson.getAttribute("data-title");
        generatePDF(content, title);
    });
}