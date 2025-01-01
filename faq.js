<script>
    // Hitta alla frågor
    const questions = document.querySelectorAll('.faq-question');

    // Lägg till en eventlyssnare för varje fråga
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Hitta svaret till den valda frågan
            const answer = this.nextElementSibling;

            // Växla visibiliteten av svaret
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block"; // Visa svaret
            } else {
                answer.style.display = "none"; // Dölja svaret
            }
        });
    });
</script>
