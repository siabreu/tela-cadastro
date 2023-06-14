import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'
import { Column, Container, Title, TitleLogin, Wrapper, Text, Row, ContaText, LogarText } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required(),
  }).required();

const Signup = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            console.log(data)
            // if(data.length && data[0].id){
            //     navigate('/feed');
            //     return
            // }else{
            //     alert('Email ou senha inválido!')
            // }
        }catch{
            alert('Houve um erro, tente novamente!');
        }
    }

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as 
                    principais tecnologias e entrar mais rápido nas empresas mais 
                    desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <Text>Cria sua conta e make the change._</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" leftIcon={<MdLock />} type="password"/>
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                        Políticas de Privacidade e os Termos de Uso da DIO.
                    </Text>
                    <Row>
                        <ContaText>já tenho conta.</ContaText>
                        <LogarText>Fazer login</LogarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Signup }