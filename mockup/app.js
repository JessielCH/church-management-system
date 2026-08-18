// Set current date
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('currentDate');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('es-ES', options);
});

// Toggle notifications dropdown
function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    dropdown.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
    // Notifications Dropdown
    const notifDropdown = document.getElementById('notificationsDropdown');
    const notificationBtn = document.querySelector('.notification-btn');
    if (notifDropdown && notificationBtn && !notifDropdown.contains(event.target) && !notificationBtn.contains(event.target)) {
        notifDropdown.classList.remove('active');
    }
    
    // New Action Dropdown
    const actionDropdown = document.getElementById('newActionDropdown');
    const actionBtn = document.querySelector('.dropdown-container .primary-button');
    if (actionDropdown && actionBtn && !actionDropdown.contains(event.target) && !actionBtn.contains(event.target)) {
        actionDropdown.classList.remove('active');
    }
});

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if(dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Sidebar navigation active state and view switching
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') {
            e.preventDefault();
        }
        
        const parentNav = this.closest('nav');
        if (parentNav) {
            parentNav.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            this.classList.add('active');
            
            // View Switching Logic
            const navText = this.querySelector('span:not(.material-symbols-outlined)').textContent.trim().toLowerCase();
            
            // Hide all views
            document.querySelectorAll('.view-section').forEach(view => {
                view.style.display = 'none';
            });
            
            // Determine which view to show
            let viewId = 'view-dashboard'; // default
            if(navText === 'membresía') viewId = 'view-membresia';
            if(navText === 'evangelismo') viewId = 'view-evangelismo';
            if(navText === 'agenda') viewId = 'view-agenda';
            
            const targetView = document.getElementById(viewId);
            if(targetView) {
                targetView.style.display = 'block';
            } else {
                // If view doesn't exist, just show dashboard
                document.getElementById('view-dashboard').style.display = 'block';
            }
        }
    });
});
