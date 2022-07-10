import { signin } from "./api";

class Auth {
  constructor() {
    this.token = null;
    this.user = null;
  }

  async login(username, password, remember) {
    const res = await signin(username, password);
    if (res && res.data && res.data.access_token && res.data.user) {
      this.token = res.data.access_token;
      this.user = res.data.user;

      return true;
    }

    return false;
  }

  logout() {
    this.token = null;
    this.user = null;
  }

  isAuthenticated() {
    return !!this.user;
  }
}

export default new Auth();
