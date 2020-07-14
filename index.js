let editProfileBtn = document.querySelector(".profile__edit_button");
let closePopUpBtn = document.querySelector(".popup__close-button");
let popUp = document.querySelector(".popup");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__input-one");
let bioInput = document.querySelector(".popup__input-two");
let profileName = document.querySelector(".profile__line-one");
let profileBio = document.querySelector(".profile__line-two");


function openPopUp() {
    popUp.classList.add("popup_is-open");
    nameInput.value = profileName.textContent;
    bioInput.value = profileBio.textContent;
}

function closePopUp() {
    popUp.classList.remove("popup_is-open");
}
editProfileBtn.addEventListener("click", openPopUp);
closePopUpBtn.addEventListener("click", closePopUp);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    closePopUp();
}
formElement.addEventListener("submit", formSubmitHandler);
