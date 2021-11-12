const cookieHandler = {
    setCookie(name, value, path = '/') {
        const now = new Date();
        now.setTime(now.getTime() + (15 * 60 * 1000));
        const expires = now.toUTCString();
        document.cookie = `${name} = ${value}; expires = ${expires}; path = ${path}`;
    },

    getAll(){
        const keyValuePairs = document.cookie
            .split('; ')
            .map(item => item.split('='))
        const object = {};
        keyValuePairs.map(item=> object[item[0]]=item[1]);        
        return object;
    },

    toSessionStorage(){
        const allCookie = cookieHandler.getAll();
        Object.keys(allCookie).map(key=> sessionStorage.setItem(key,allCookie[key]));
    },

    flush(){
        const allCookie = cookieHandler.getAll();
        Object.keys(allCookie).map(key=> document.cookie=`${key}=; expires = Thu 01 Jan 1970 00:00:00 UTC; path = /`);
    }

};

cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

export { cookieHandler };

