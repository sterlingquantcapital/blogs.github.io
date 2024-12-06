// This JavaScript code will fetch the directory structure and populate the HTML
// Note: This approach relies on client-side JavaScript, which might have limitations
// depending on browser security policies and server configurations. For more robust
// solutions, consider server-side scripting or a combination of both.

const blogPosts = document.getElementById('blog-posts');

// Simulate fetching directory structure (replace with actual API or server-side script)
const directoryStructure = [
    {
        year: '2023',
        months: [
            {
                month: '202311',
                posts: [
                    {
                        date: '20231125',
                        title: 'My First Post',
                        url: '2023/202311/20231125-1.My-First-Post.html'
                    },
                    {
                        date: '20231128',
                        title: 'Another Post',
                        url: '2023/202311/20231128-2.Another-Post.html'
                    }
                ]
            }
        ]
    }
];

// Populate the HTML with the fetched data
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