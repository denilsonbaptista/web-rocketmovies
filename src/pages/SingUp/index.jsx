import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { BsArrowLeft } from "react-icons/bs"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles"

export function SingUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crei sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="E-mail" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#">
          <BsArrowLeft />
          Voltar para o login
        </a>
      </Form>

      <Background />
    </Container>
  )
}
