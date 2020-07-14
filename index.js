const editProfileBtn = document.querySelector(".profile__edit_button");
const closePopUpBtn = document.querySelector(".popup__close-button");
const popUp = document.querySelector(".popup");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__input1");
let bioInput = document.querySelector(".popup__input2");
let profileName = document.querySelector(".profile__line1");
let profileBio = document.querySelector(".profile__line2");


function openPopUp() {
    popUp.classList.add("popup__is-open");
    nameInput.value = profileName.textContent;
    bioInput.value = profileBio.textContent;
}

function closePopUp() {
    popUp.classList.remove("popup__is-open");
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
