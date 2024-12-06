const blogPosts = document.getElementById('blog-posts');

// Function to fetch directory structure using the Fetch API
async function fetchDirectoryStructure(directoryPath) {
  try {
    const response = await fetch(directoryPath);
    const directoryEntries = await response.json(); // Assuming a JSON response

    return directoryEntries;
  } catch (error) {
    console.error('Error fetching directory structure:', error);
    return [];
  }
}

// Function to process the directory structure and populate the HTML
function populateBlogPosts(directoryStructure) {
  directoryStructure.forEach(year => {
    year.months.forEach(month => {
      month.posts.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = post.url;
        a.textContent = `${post.date} - ${post.title}`;
        li.appendChild(a);
        blogPosts.appendChild(li);
      });
    });
  });
}

// Example usage:
const directoryPath = '/your/directory/path'; // Replace with your actual directory path
fetchDirectoryStructure(directoryPath)
  .then(directoryStructure => {
    populateBlogPosts(directoryStructure);
  });