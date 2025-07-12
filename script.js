document.addEventListener('DOMContentLoaded', () => {
    const lessonTitles = document.querySelectorAll('.lesson-title');

    lessonTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling; // Get the content div right after the title
            title.classList.toggle('active'); // Toggle 'active' class for the title
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // For mobile view, add data-label to each td
    const tables = document.querySelectorAll('.lesson-content table');
    tables.forEach(table => {
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
        table.querySelectorAll('tr').forEach(row => {
            row.querySelectorAll('td').forEach((td, index) => {
                if (headers[index]) { // Ensure header exists
                    td.setAttribute('data-label', headers[index]);
                }
            });
        });
    });
});