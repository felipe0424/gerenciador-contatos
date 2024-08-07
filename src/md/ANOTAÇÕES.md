# Sistema de Gerenciamento de Contatos

Você vai desenvolver uma aplicação web simples que permite
gerenciar uma lista de contatos. Cada contato tem um nome e um
número de telefone. A aplicação deve permitir aos usuários adicionar
novos contatos, listar todos os contatos existentes e remover
contatos da lista.

Você precisará criar uma interface web com HTML e CSS e
implementar a lógica da aplicação em JavaScript usando os conceitos
de Programação Orientada a Objetos (POO) e manipulação do DOM.
Interface do Usuário:

• Um formulário para adicionar contatos, com campos para o
nome e o número de telefone.
• Um botão para adicionar o contato à lista.
• Uma área para exibir a lista de contatos com uma opção para
remover contatos.
Lógica da Aplicação:
• Usar a Programação Orientada a Objetos (POO) para
representar e gerenciar os contatos.
• Manipular o DOM para adicionar, listar e remover contatos
dinamicamente.

Crie um arquivo index.html para definir a estrutura básica da página.
Sua página deve ter:
• Campos de Entrada: Para o nome e o número de telefone do
contato.
• Botão Adicionar: Para adicionar um novo contato.
• Área de Lista: Para exibir a lista de contatos

Crie um arquivo app.js para implementar a lógica da aplicação.
Vamos usar classes para representar os contatos e gerenciá-los.

Classe: Contato
Constructor
Atributos: nome, telefone
Id: use a biblioteca uuid ( Pequise sobre )
Classe: GerenciadorContatos
Constructor
Crie um array Contatos no Constructor
adicionarContato() - Push
removerContato() - Filter
atualizarLista() - ForEach