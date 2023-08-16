const API_URL = "https://yourbackendapi.com/";

function fetchPosts() {
    // Fetch posts from the backend
    return fetch(`${API_URL}/posts`);
}

// Other API interactions can be added here
