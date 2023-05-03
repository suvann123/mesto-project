export default class Api {
  constructor(config) {
    this._config = config;
  }

  handleError(err) {
    if (err.status) {
      console.warn(`Ошибка ${err.status}`);
    } else {
      console.warn(`Неизвестная ошибка: ${err}`);
    }
  }

  _makeRequest = (path, method = "GET", body = null) => {
    const params = {
      method: method,
      headers: this._config.headers
    };

    if (body) {
      params.body = JSON.stringify(body);
    }

    return fetch(`${this._config.baseUrl}/${path}`, params)
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res);
      });
  };

  getProfileInfo() {
    return this._makeRequest("users/me");
  }

  getInitialCards() {
    return this._makeRequest("cards");
  }

  editUserInfo(name, about) {
    return this._makeRequest("users/me", "PATCH", { name: name, about: about });
  }

  addCard(name, link) {
    return this._makeRequest("cards", "POST", { name: name, link: link });
  }

  delCard = (id) => {
    return this._makeRequest(`cards/${id}`, "DELETE");
  };

  addLike = (id) => {
    return this._makeRequest(`cards/likes/${id}`, "PUT");
  };

  removeLike(id) {
    return this._makeRequest(`cards/likes/${id}`, "DELETE");
  }

  editAvatar(link) {
    return this._makeRequest("users/me/avatar", "PATCH", { avatar: link });
  }
}