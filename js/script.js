const openModal = document.querySelector("#openModal");
const modal = document.querySelector("dialog");

//Atrelando um evento de click no botão de abertura do MODAL.
openModal.addEventListener("click", ()=>{
  //Utilizando o modal para abrir.
  modal.showModal();
});

//Encerrando a janela de Modal.
const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", ()=>{
  //Utilizando o modal para abrir.
  modal.close();
});