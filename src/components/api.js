export let userId;

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: 'af326577-4d84-4e75-9c90-636557c1da19',
    'Content-Type': 'application/json'
  }
}
export function showUserId(id) {
  userId = id;
}


function getInfo(path, method = "GET", body = null) {
  const params = {
    method: method,
    headers: config.headers
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  return fetch(`${config.baseUrl}/${path}`, params)
    .then(res => {
      if (res.ok) return res.json();
      return  Promise.reject(`Ошибка: ${res.status}`);
    });
}



export const getProfileInfo = () => {
  return getInfo("users/me");
}

export function getInitialCards() {
  return getInfo("cards");
}

export function editProfileInfo(name, about) {
  return getInfo("users/me", "PATCH", { name: name, about: about });
}

export function addCard(name, link) {
  return getInfo("cards", "POST", { name: name, link: link });
}

export function delCard(id) {
  return getInfo(`cards/${id}`, 'DELETE');
}

export function addLike(id) {
  return getInfo(`cards/likes/${id}`, 'PUT');
}

export function removeLike(id) {
  return getInfo(`cards/likes/${id}`, 'DELETE');
}

export function editAvatar(link) {
  return getInfo('users/me/avatar', 'PATCH', {avatar: link});
}