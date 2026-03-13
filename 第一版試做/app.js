// Mock Data and Logic for Landing Page
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

function loadPosts() {
    const postsContainer = document.getElementById('posts-container');

    // Get posts from localStorage
    let storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // Method B: Permanent default posts
    const defaultPosts = [
        {
            id: 1708953600000,
            title: '【114-1】課程微影片 — 生態工程與藝術的對話',
            date: '2026-02-26',
            category: '課程成果',
            imageUrl: '1.JPG',
            videoUrl: 'https://www.youtube.com/watch?v=pmcw1tW4Gv0',
            content: '這是我們課程的成果展示影片，探討生態工程與藝術的結合。'
        },
        { id: 1, title: '【114-1】掌握KOL與熱門話題的秘密！大數據分析講座', date: '2026-02-20', category: '活動消息', imageUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6' }
    ];

    // Force sync: if our core post is missing, add it to the front
    const hasCorePost = storedPosts.some(p => p.id === 1708953600000);
    if (!hasCorePost) {
        // Merge: default posts + user created posts (excluding old placeholder IDs 1-5 to clean up)
        const userPosts = storedPosts.filter(p => p.id > 10 && p.id !== 1708953600000);
        storedPosts = [...defaultPosts, ...userPosts];
        localStorage.setItem('posts', JSON.stringify(storedPosts));
    }

    const posts = storedPosts;

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'news-item';
        item.innerHTML = `
            <div class="news-content">
                <span class="category-tag">${post.category || '消息'}</span>
                <a href="post.html?id=${post.id}">${post.title}</a>
            </div>
            <span class="date">${post.date}</span>
        `;
        postsContainer.appendChild(item);
    });

    // Update main video if any post has a videoUrl
    const latestVideoPost = posts.find(p => p.videoUrl);
    if (latestVideoPost) {
        const videoId = getYouTubeID(latestVideoPost.videoUrl);
        const videoFrame = document.querySelector('.video-container iframe');
        if (videoId && videoFrame) {
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        }
    }
}

function getYouTubeID(url) {
    if (!url) return null;
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/live\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
}
