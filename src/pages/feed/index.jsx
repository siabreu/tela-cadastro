import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () =>{
    return(<>
        <Header autenticado={true} />
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Simone Abreu" image={"https://avatars.githubusercontent.com/u/15333889?s=96&v=4"} />
            <UserInfo percentual={27} nome="Simone Abreu" image={"https://avatars.githubusercontent.com/u/15333889?s=96&v=4"} />
            <UserInfo percentual={89} nome="Simone Abreu" image={"https://avatars.githubusercontent.com/u/15333889?s=96&v=4"} />
            <UserInfo percentual={57} nome="Simone Abreu" image={"https://avatars.githubusercontent.com/u/15333889?s=96&v=4"} />
            <UserInfo percentual={12} nome="Simone Abreu" image={"https://avatars.githubusercontent.com/u/15333889?s=96&v=4"} />
          </Column>
        </Container>
      </>
    )
}

export { Feed }