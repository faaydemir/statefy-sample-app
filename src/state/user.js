import statefy from "react-statefy";

const userState = statefy({
    isAuthenticated: false,
    user: undefined,
});

export const loginSucceed = (user) => {
    userState.mutate({
        isAuthenticated: true,
        user: user
    });
}

export const logoutSucceed = () => {
    userState.mutate({
        isAuthenticated: false,
        user: undefined
    });
}

export default userState;