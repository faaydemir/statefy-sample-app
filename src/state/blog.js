import statefy from "react-statefy";

const blogState = statefy({
    posts: undefined,
    bookmarks: undefined,
    favorites: undefined,
    isFavoritesLoading: false,
});

export const postsLoaded = (posts) => {
    blogState.mutate({
        posts: posts,
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


export const favoritesLoaded = (favorites) => {
    blogState.mutate({
        favorites: favorites,
        isFavoritesLoading: false,
    });
}

export const favoritesLoading = () => {
    blogState.mutate({
        isFavoritesLoading: true,
    });
}

export default blogState;