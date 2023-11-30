import { bookmarksCleared } from "../../state/blog"
import { loginSucceed, logoutSucceed } from "../../state/user"
import * as api from "../../api"

export const login = async () => {
    const user = await api.login();
    loginSucceed(user)
}

export const logout = async () => {
    await api.logout();
    logoutSucceed();
    bookmarksCleared();
}