import sleep from "sleep-promise";

export const fetchPosts = async () => {
    await sleep(60);
    return [
        {
            id: "1",
            title: "post 1",
            body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        },
        {
            id: "2",
            title: "post 2",
            body: "lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet"
        },
        {
            id: "3",
            title: "post 3",
            body: "lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet"
        },
        {
            id: "4",
            title: "post 4",
            body: "lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet"
        }
    ]
}

const bookmarks = new Set(['post 1', 'post 2'])
export const fetchBookmarks = async (userId) => {
    await sleep(30);
    return [...bookmarks];
}

export const fetchPopularPosts = async () => {
    await sleep(20);
    return ['post 4', 'post 3'];
}

export const fetchFavorites = async () => {
    await sleep(1000);
    return ['post 4'];
}



export const bookmarkPost = async (bookmark) => {
    await sleep(20);
    if (bookmarks.has(bookmark)) {
        bookmarks.delete(bookmark);
    } else {
        bookmarks.add(bookmark);
    }
}

export const login = async () => {
    await sleep(20);
    return {
        id: "1",
        name: "test user",
        email: "test@statefy.com"
    }
}

export const logout = async () => {
    await sleep(10);
}