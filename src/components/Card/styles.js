import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`

export const Content = styled.div`
    width: 100;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4{
        font-style: normal;
        font-wight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFF;
    }

    p{
        font-style: normal;
        font-wight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFF;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFF;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4{
        font-size: normal;
        font-wight: 700;
        font-size: 18px;
        color: #FFF;
    }

    p{
        font-size: normal;
        font-wight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF80;
    }

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
    }
`