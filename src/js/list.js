class GerenciadorContatos {
    constructor() {
        this.contatos = this.carregarContatos() || [];
        this.init();
    }

    init() {
        document.getElementById('createContactForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.adicionarContato();
        });

        document.getElementById('closePopupButton').addEventListener('click', () => {
            this.fecharPopup('createContactPopup');
        });

        document.getElementById('closeDetailPopupButton').addEventListener('click', () => {
            this.fecharPopup('contactDetailPopup');
        });
    }

    carregarContatos() {
        return JSON.parse(localStorage.getItem('contatos')) || [];
    }

    removerContato(id) {
        this.contatos = this.contatos.filter(contato => contato.id !== id);
        this.salvarContatos();
        this.exibirContatos();
    }

    salvarContatos() {
        localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contactList');
        listaContatos.innerHTML = '';

        this.contatos.forEach(contato => {
            const li = document.createElement('li');
            li.textContent = `${contato.nome} - ${contato.telefone}`;

            // Cria o botão para exibir detalhes
            const btnDetalhes = document.createElement('button');
            btnDetalhes.textContent = 'Detalhes';
            btnDetalhes.addEventListener('click', () => {
                this.exibirDetalhesContato(contato);
            });

            // Cria o botão de excluir
            const btnExcluir = document.createElement('img');
            btnExcluir.src = '../assets/images/trash.svg';
            btnExcluir.alt = 'Excluir';
            btnExcluir.addEventListener('click', () => {
                this.removerContato(contato.id);
            });

            li.appendChild(btnDetalhes);
            li.appendChild(btnExcluir);
            listaContatos.appendChild(li);
        });
    }

    adicionarContato() {
        const nome = document.getElementById('newName').value;
        const telefone = document.getElementById('newPhone').value;
        const id = uuid.v4(); // Certifique-se de que uuid está importado

        const novoContato = { id, nome, telefone };
        this.contatos.push(novoContato);
        this.salvarContatos();
        this.exibirContatos();
        this.fecharPopup('createContactPopup');
    }

    exibirDetalhesContato(contato) {
        document.getElementById('contactDetailPopup').classList.remove('hidden');
        document.getElementById('popupPhone').textContent = contato.telefone;
        document.getElementById('contactDetailPopup').querySelector('h2').textContent = contato.nome;
    }

    fecharPopup(id) {
        document.getElementById(id).classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gerenciador = new GerenciadorContatos();
    gerenciador.exibirContatos();
});
