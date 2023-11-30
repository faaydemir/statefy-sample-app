import { postsLoaded, bookmarksLoaded, favoritesLoaded, favoritesLoading } from "../../state/blog";
import * as api from "../../api";
import userState from "../../state/user";

export const loadPosts = async () => {
    const posts = await api.fetchPosts();
    postsLoaded(posts)
}

export const loadBookmarks = async () => {
    const bookmarks = await api.fetchBookmarks();
    bookmarksLoaded(bookmarks);
}

export const bookmarkPost = async (postId) => {

    //this should not used this way.
    if (!userState.get().isAuthenticated)
        alert('login to bookmark post');

    await api.bookmarkPost(postId);
    loadBookmarks();
}


export const loadFavorites = async () => {
    favoritesLoading();
    const favorites = await api.fetchFavorites();
    favoritesLoaded(favorites);
}