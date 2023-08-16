
$(document).ready(function() {
    loadPosts();
});

function loadPosts() {
    // Mock data
    const mockPosts = [
        {
            username: 'John',
            media: 'path_to_media',
            caption: 'Great game!'
        },
        // ... other mock posts ...
    ];

    mockPosts.forEach(post => {
        const postHTML = `
            <article class="post">
                <header>
                    <h2>${post.username}</h2>
                </header>
                <img src="${post.media}" alt="Post Media">
                <p>${post.caption}</p>
                <footer>
                    <button class="btn btn-light">Like</button>
                    <button class="btn btn-light">Comment</button>
                    <button class="btn btn-primary">Follow</button>
                </footer>
            </article>
        `;

        $('#posts-feed').append(postHTML);
    });
}
