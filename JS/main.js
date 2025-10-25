
function switchTab(tabType, e) {
    document.querySelectorAll('.custom-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    e.target.classList.add('active');
    document.getElementById(tabType + '-form').classList.add('active');
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.parentElement.querySelector('.password-toggle i');
    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("ri-eye-line", "ri-eye-off-line");
    } else {
        input.type = "password";
        icon.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
}

document.querySelectorAll('.payment-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

