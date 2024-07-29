const fs = require('fs');

function cadastrar(nome, idade, email, telefone) {
    const dados = `${nome};${idade};${email};${telefone}\n`;
    fs.appendFile('cadastros.txt', dados, (err) => {
      if (err) {
        console.error('Erro ao cadastrar:', err);
      } else {
        console.log('Cadastro realizado com sucesso!');
      }
    });
  }

  function listarCadastros() {
    fs.readFile('cadastros.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler arquivo:', err);
      } else {
        const cadastros = data.split('\n');
        cadastros.forEach((cadastro) => {
          const [nome, idade, email, telefone] = cadastro.split(';');
          console.log(`Nome: ${nome},Idade: ${idade}, E-mail: ${email}, Telefone: ${telefone}`);
        });
      }
    });
  }

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite 1 para cadastrar ou 2 para listar cadastros: ', (resposta) => {
    if (resposta === '1') {
      rl.question('Digite o nome: ', (nome) => {
        rl.question('Digite a idade: ', (idade) => {
          rl.question('Digite o e-mail: ', (email) => {
            rl.question('Digite o telefone: ', (telefone) => {
              cadastrar(nome, idade, email, telefone);
              rl.close();
            });
          });
        });
      });
      } else if (resposta === '2') {
          listarCadastros();
          rl.close();
      } else {
        console.log('Opção inválida!');
        rl.close();
      }
    });
