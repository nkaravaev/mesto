let editProfileBtn = document.querySelector(".profile__edit_button");
let closePopUpBtn = document.querySelector(".popup__close-button");
let popUp = document.querySelector(".popup");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__input_name");
let bioInput = document.querySelector(".popup__input_job");
let profileName = document.querySelector(".profile__line-name");
let profileBio = document.querySelector(".profile__line-job");


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
