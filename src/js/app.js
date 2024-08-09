class Contato {
    constructor(nome, telefone) {
        this.id = uuidv4(); // Use uuidv4() diretamente
        this.nome = nome;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = this.carregarContatos() || [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
        this.salvarContatos();
    }

    removerContato(id) {
        this.contatos = this.contatos.filter(contato => contato.id !== id);
        this.salvarContatos();
    }

    carregarContatos() {
        return JSON.parse(localStorage.getItem('contatos'));
    }

    salvarContatos() {
        localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
}

// Event listener para adicionar um contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const telefone = document.getElementById('phone').value;

    const novoContato = new Contato(nome, telefone);
    const gerenciador = new GerenciadorContatos();
    gerenciador.adicionarContato(novoContato);

    // Limpar o formulário após adicionar
    document.getElementById('contactForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simula o envio do formulário e o processamento bem-sucedido
    setTimeout(function() {
        // Exibe a mensagem de sucesso
        document.getElementById('successMessage').classList.remove('hidden');
        // Opcional: Esconde a mensagem após um tempo
        setTimeout(function() {
            document.getElementById('successMessage').classList.add('hidden');
        }, 3000); // Mensagem desaparece após 3 segundos
    }, 500); // Simula um pequeno atraso para visualização do sucesso
});
