export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
}

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-22",
  headers: {
    authorization: "af326577-4d84-4e75-9c90-636557c1da19",
    "Content-Type": "application/json",
  },
};

function makeRequest(path, method = "GET", body = null) {
  const params = {
    method: method,
    headers: config.headers,
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  return fetch(`${config.baseUrl}/${path}`, params).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const getProfileInfo = () => {
  return makeRequest("users/me");
};

export function getInitialCards() {
  return makeRequest("cards");
}

export function editProfileInfo(name, about) {
  return makeRequest("users/me", "PATCH", { name: name, about: about });
}

export function addCard(name, link) {
  return makeRequest("cards", "POST", { name: name, link: link });
}

export function delCard(id) {
  return makeRequest(`cards/${id}`, "DELETE");
}

export function addLike(id) {
  return makeRequest(`cards/likes/${id}`, "PUT");
}

export function removeLike(id) {
  return makeRequest(`cards/likes/${id}`, "DELETE");
}

export function editAvatar(link) {
  return makeRequest("users/me/avatar", "PATCH", { avatar: link });
}
