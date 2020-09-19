// Used to switch between light and dark mode
document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark'): document.querySelector('body').classList.remove('dark')
})

function save_state() {
    var checkbox = document.getElementById('cbx');
    localStorage.setItem('cbx', checkbox.checked);
}
function load() {
    var checked = JSON.parse(localStorage.getItem('cbx'));
    document.getElementById("cbx").checked = checked;
}

function wis() {
    location.reload();
    localStorage.clear()
}
load();