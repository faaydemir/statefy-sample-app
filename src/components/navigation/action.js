import sleep from "sleep-promise"
import { bookmarksCleared } from "../../state/blogs"
import { loginSucceed, logoutSucceed } from "../../state/user"

export const login = async () => {
    //login request
    await sleep(100);
    loginSucceed({
        id: "1",
        name: "test user",
        email: "test@statefy.com"
    })
}

export const logout = async () => {
    await sleep(100);
    logoutSucceed();
    bookmarksCleared();
}