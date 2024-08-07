class Contato {
    constructor(nome, telefone, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.id = id;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = JSON.parse(localStorage.getItem('contatos')) || [];
        this.contadorIds = this.contatos.length > 0 ? this.contatos[this.contatos.length - 1].id + 1 : 0; 
    }

    adicionarContato() {
        const nome = document.getElementById('name').value;
        const telefone = document.getElementById('phone').value;
        const id = this.contadorIds++; 

        const contato = new Contato(nome, telefone, id);
        this.contatos.push(contato);

        this.salvarContatos();
        this.atualizarLista();
        document.getElementById('contactForm').reset();
    }

    removerContato(id) {
        this.contatos = this.contatos.filter(contato => contato.id !== id);
        this.salvarContatos();
        this.atualizarLista();
    }

    salvarContatos() {
        localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }

    atualizarLista() {
        const listaContatos = document.getElementById('contactList');
        listaContatos.innerHTML = '';

        this.contatos.forEach(contato => {
            const li = document.createElement('li');
            li.textContent = `${contato.nome} - ${contato.telefone}`;
            li.dataset.id = contato.id;

            li.addEventListener('click', () => {
            
                alert(`Nome: ${contato.nome}\nTelefone: ${contato.telefone}`);
            });

            listaContatos.appendChild(li);
        });
    }
}

const gerenciadorContatos = new GerenciadorContatos();


document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    gerenciadorContatos.adicionarContato();
});

gerenciadorContatos.atualizarLista();

