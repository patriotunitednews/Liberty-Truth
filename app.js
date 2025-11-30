/* ============================= */
/*         DOM Selectors          */
/* ============================= */

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const followButtons = document.querySelectorAll('.btn-follow');
const postForm = document.getElementById('postForm');
const postList = document.getElementById('postList');
const profileEditBtn = document.getElementById('editProfileBtn');
const profileAvatar = document.getElementById('profileAvatar');
const searchInputs = document.querySelectorAll('.search-input');

/* ============================= */
/*          Auth / Login          */
/* ============================= */

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;
        // Simple demo login (replace with backend)
        if(email && password) {
            alert(`Logged in as ${email}`);
            window.location.href = 'feed.html'; // redirect to feed
        } else {
            alert('Please enter email and password.');
        }
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;
        if(email && password) {
            alert(`Account created for ${email}`);
            window.location.href = 'feed.html';
        } else {
            alert('Please fill out all fields.');
        }
    });
}

/* ============================= */
/*             Tabs               */
/* ============================= */

tabButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        tabContents[idx].classList.add('active');
    });
});

/* ============================= */
/*        Follow Buttons          */
/* ============================= */

followButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent === 'Follow') {
            btn.textContent = 'Following';
            btn.style.backgroundColor = '#666';
        } else {
            btn.textContent = 'Follow';
            btn.style.backgroundColor = '#0066cc';
        }
    });
});

/* ============================= */
/*        Post Composer           */
/* ============================= */

if(postForm) {
    postForm.addEventListener('submit', e => {
        e.preventDefault();
        const content = postForm.querySelector('textarea').value.trim();
        if(content !== '') {
            const postDiv = document.createElement('li');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <div class="post-author">
                    <img src="images/placeholder-avatar.png" alt="Avatar" class="avatar-small">
                    <h4>Me</h4>
                    <span class="handle">@me</span>
                </div>
                <div class="post-content">${content}</div>
                <div class="post-actions">
                    <span class="post-action">Like</span>
                    <span class="post-action">Comment</span>
                    <span class="post-action">Share</span>
                </div>
            `;
            postList.prepend(postDiv);
            postForm.reset();
        }
    });
}

/* ============================= */
/*        Profile Edit            */
/* ============================= */

if(profileEditBtn) {
    profileEditBtn.addEventListener('click', () => {
        alert('Profile edit functionality to be implemented');
    });
}

/* ============================= */
/*       Search / Filter          */
/* ============================= */

searchInputs.forEach(input => {
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        const parent = input.closest('.creators-filter, .marketplace-controls');
        if(parent) {
            const items = parent.nextElementSibling.querySelectorAll('.creator-card, .product-card');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if(text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});

/* ============================= */
/*      Post Actions Demo         */
/* ============================= */

document.addEventListener('click', e => {
    if(e.target.classList.contains('post-action')) {
        const action = e.target.textContent;
        alert(`${action} clicked! (demo)`);
    }
});
