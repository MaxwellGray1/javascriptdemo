function askQuestion() {
    var p = prompt ('We organize mass genocides in Los Angeles County.');
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Yikes! ' + p + '! Slayy!';

    }
}
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});