class AppStorage {

    setToken(token){
        localStorage.setItem('token',token)
    }

    setUsername(user){
        localStorage.setItem('UserName',user)
    }

    store(user,token){
        this.setToken(token)
        this.setUsername(user)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    getToken(){
        localStorage.getItem('token')
    }
    getUser(){
        localStorage.getItem('user')
    }
}

export default AppStorage = new AppStorage();