const dummy = (blogs) => {
    return 1;
};

const totalLikes = (blogs) => {
    let result = 0;

    for (const blog of blogs) {
        result += blog.likes;
    }
    return result;
};

const favoriteBlog = (blogs) => {
    let top = blogs[0];

    for (const blog of blogs) {
        if (blog.likes > top.likes) {
            top = blogs[blogs.indexOf(blog)];
        }
    }

    return top;
};

module.exports = { dummy, totalLikes, favoriteBlog };