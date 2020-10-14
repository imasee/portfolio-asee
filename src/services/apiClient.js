

export const getUserInfo = () => {
    return fetch("/.netlify/functions/userinfo");
}

export const getUserResume = () => {
    return fetch("/.netlify/functions/userresume");
}