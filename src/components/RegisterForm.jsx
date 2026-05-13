import React, { useState } from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';
import Input from './Input.jsx';
import Text from './Text.jsx';

export default function RegisterForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cadastrado, setCadastrado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (nome === '') {
      alert('Digite o nome');
      return;
    }

    if (email === '') {
      alert('Digite o email');
      return;
    }

    if (senha === '') {
      alert('Digite uma senha');
      return;
    }

    if (confirmarSenha !== senha || confirmarSenha === '') {
      alert('Senha incorreta');
      return;
    }

    setCadastrado(true);
  }

  if (cadastrado) {
    return (
      <Card>
        <Text className="text-center">
          Seu cadastro foi feito com sucesso, bem-vindo {nome}. Seu email
          cadastrado é: {email}
        </Text>
        <Button onClick={() => setCadastrado(false)}>VOLTAR</Button>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-3">
        <Input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(event) => setConfirmarSenha(event.target.value)}
        />
        <Button type="submit" className="px-4">
          Cadastrar
        </Button>
        <Text>Já tem uma conta? Entrar.</Text>
      </form>
    </Card>
  );
}
