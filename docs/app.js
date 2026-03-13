// Authentication Logic
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});

function initAuth() {
    const loginOverlay = document.getElementById('login-modal-overlay');
    const openLoginBtn = document.getElementById('open-login-btn');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Toggle Modal
    if (openLoginBtn) {
        openLoginBtn.onclick = () => loginOverlay.classList.add('active');
    }
    if (closeLoginBtn) {
        closeLoginBtn.onclick = () => loginOverlay.classList.remove('active');
    }
    window.onclick = (event) => {
        if (event.target === loginOverlay) {
            loginOverlay.classList.remove('active');
        }
    };

    // Handle Login
    if (loginForm) {
        loginForm.onsubmit = async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                await auth.signInWithEmailAndPassword(email, password);
                loginOverlay.classList.remove('active');
                loginForm.reset();
            } catch (error) {
                alert('登入失敗：' + error.message);
            }
        };
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            auth.signOut().then(() => {
                window.location.reload();
            });
        };
    }

    // Auth State Observer
    auth.onAuthStateChanged((user) => {
        if (user) {
            document.body.classList.add('logged-in');
        } else {
            document.body.classList.remove('logged-in');
        }
    });
}
