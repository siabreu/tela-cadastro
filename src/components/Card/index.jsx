import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
import {
    CardContainer, 
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from './styles';


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://3fda7bf5ab.cbaul-cdnwnd.com/28272a9103056a515d2496144073955e/200000038-9aedc9aede/BF-Menu-2.png?ph=3fda7bf5ab" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/15333889?s=96&v=4" />
                <div>
                    <h4>Simone de Abreu</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da 
                    dio do Global avanade... <strong>Ver Mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }