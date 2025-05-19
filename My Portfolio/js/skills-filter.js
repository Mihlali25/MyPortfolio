document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    if (categoryButtons.length === 0 || skillCards.length === 0) return;

    // Filter skills based on category
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const categoryValue = button.getAttribute('data-category');

            // Filter skills
            skillCards.forEach(card => {
                if (categoryValue === 'all' || card.classList.contains(categoryValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});