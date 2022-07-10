import { signin } from "./api";

class Auth {
  constructor() {
    this.token = localStorage.getItem("token");
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  async login(username, password, remember) {
    const res = await signin(username, password);
    if (res && res.data && res.data.access_token && res.data.user) {
      this.token = res.data.access_token;
      this.user = res.data.user;

      if (remember) {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      return true;
    }

    return false;
  }

  logout() {
    this.token = null;
    this.user = null;
  }

  isAuthenticated() {
    return !!this.token && !!this.user;
  }
}

export default new Auth();
