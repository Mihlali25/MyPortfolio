document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.querySelector('.faq-question').classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('active');
                }
            });

            // Toggle current item
            question.classList.toggle('active');
            faqAnswer.classList.toggle('active');
        });
    });
});