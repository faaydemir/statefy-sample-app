import sleep from "sleep-promise"
import { blogsLoaded, bookmarksLoaded } from "../../state/blogs";

export const loadBlogs = async () => {
    await sleep(300);
    blogsLoaded([
        {
            id: "1",
            title: "blog 1",
            body: "text text text text text texttext text text text text text text text text text text text"
        },
        {
            id: "2",
            title: "blog 2",
            body: "text text text text text texttext text text text text text text text text text text text"
        },
        {
            id: "3",
            title: "blog 3",
            body: "text text text text text texttext text text text text text text text text text text text"
        },
        {
            id: "4",
            title: "blog 4",
            body: "text text text text text texttext text text text text text text text text text text text"
        }
    ])
}

export const loadBookmarks = async (userId) => {
    await sleep(150);
    bookmarksLoaded([
        {
            title: "blog 1",
        },
        {
            title: "blog 3",
        },
    ])
}