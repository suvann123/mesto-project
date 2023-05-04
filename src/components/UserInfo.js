export default class UserInfo {
  constructor({ profileName, profileAbout, profileImage }) {
    this.profileName = profileName;
    this.profileStatus = profileAbout;
    this.avatar = profileImage;
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      _id: this._id
    };
  }

  _updateAvatarInfo() {
    this.avatar.src = this._avatar;
  }

  _updataUserInfo() {
    this.profileName.textContent = this._name;
    this.profileStatus.textContent = this._about;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._vatar = avatar;
    this._id = _id;

    this._updateAvatarInfo();
    this._updataUserInfo();
  }
}     