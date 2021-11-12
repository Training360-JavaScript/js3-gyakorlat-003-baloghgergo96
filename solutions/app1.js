const setCookie = (value, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `Token = ${value}; expires = ${expires}; path = ${path}`;
};


export default setCookie;

