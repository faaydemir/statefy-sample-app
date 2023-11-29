import statefy from "react-statefy";

const blogState = statefy({
    bookmarks: false,
    blogs: undefined,
});

export const blogsLoaded = (blogs) => {
    blogState.mutate({
        blogs: blogs,
    });
}

export const bookmarksLoaded = (bookmarks) => {
    blogState.mutate({
        bookmarks: bookmarks,
    });
}

export const bookmarksCleared = () => {
    blogState.mutate({
        bookmarks: undefined,
    });
}

export default blogState;