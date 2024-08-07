function carregarContatos() {
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    const listaContatos = document.getElementById('contactList');
    listaContatos.innerHTML = '';

    contatos.forEach(contato => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.telefone}`;
        listaContatos.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', carregarContatos);
