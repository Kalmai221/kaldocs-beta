import React from 'react'
import { Link } from 'gatsby'
//import style from '../styles/more.module.scss'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'
import * as variable from '../styles/variables'

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Container>
        <Wrapper>
            <Header>
                <span>Home</span>
            </Header>
            <Tab
            to="/profiles/"
            target="blank">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                </svg>
                <TabName>Profiles</TabName>
            </Tab>
            <Tab
            to="/download">
                <svg height="30" viewBox="-60 20 450 320" width="30" xmlns='http://www.w3.org/2000/svg'>
                    <path d='m10.164062 10h280v42h-280zm0 0' fill='#00efd1' />
                    <path d='m217.355469 247.488281 29.199219 31.222657-96.351563 89.617187-96.328125-89.617187 29.109375-31.222657 46.179687 42.792969v-175.28125h42v175.28125zm0 0'
                    fill='#00acea' />
                    <g fill='#083863'>
                        <path d='m224.65625 240.660156c-3.761719-4.019531-10.0625-4.242187-14.097656-.5l-29.394532 27.226563v-152.386719c0-5.523438-4.476562-10-10-10h-42c-5.523437 0-10 4.476562-10 10v152.382812l-29.382812-27.226562c-4.042969-3.746094-10.351562-3.515625-14.109375.515625l-29.109375 31.21875c-3.769531 4.042969-3.546875 10.375.5 14.140625l96.328125 89.621094c3.839844 3.570312 9.785156 3.570312 13.621094 0l96.351562-89.621094c1.945313-1.808594 3.089844-4.320312 3.183594-6.976562.09375-2.652344-.875-5.234376-2.691406-7.175782zm-74.449219 114.011719-82.191406-76.464844 15.484375-16.605469 38.863281 36.011719c2.917969 2.707031 7.15625 3.425781 10.800781 1.835938 3.644532-1.59375 6-5.191407 6-9.167969v-165.28125h22v165.28125c0 3.976562 2.355469 7.574219 6 9.167969 3.644532 1.589843 7.882813.871093 10.800782-1.832031l38.890625-36.027344 15.550781 16.628906zm0 0'
                        />
                        <path d='m290.164062 0h-280c-5.523437 0-10 4.476562-10 10v42c0 5.523438 4.476563 10 10 10h280c5.523438 0 10-4.476562 10-10v-42c0-5.523438-4.476562-10-10-10zm-10 42h-260v-22h260zm0 0'
                        />
                    </g>
                </svg>
                <TabName>Download</TabName>
            </Tab>
            <Tab
            to="/server/"
            target="blank">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                </svg>
                <TabName>Server</TabName>
            </Tab>
        </Wrapper>
    </Container>
  </Layout>
)

export default IndexPage

const Header = styled.div`
`
const Wrapper = styled.div`
`
const Tab = styled(Link)`
`
const TabName = styled.div`
`
const Container = styled.div`
    background-color: #eee;
    padding: 1rem 0;
    ${Header} {
        padding: 15px;
        span {
            font-weight: bold;
            font-size: 0.85rem;
            color: #000;
        }
    }
    ${Wrapper} {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: calc(100% - 2rem);
        margin: 0 auto;
        border-radius: 4px;
        &:not(:only-child) {
            border-bottom: 3px solid #ccc;
        }
        ${Tab} {
            display: flex;
            padding: 0.5rem 0.5rem 0.5rem 1rem;
            transition: .2s ease-in-out background-color;
            &:hover {
                background-color: #ccc;
            }
            ${TabName} {
                width: 100%;
                line-height: 1.2rem;
                text-indent: 0.7rem;
                color: rgba(0, 0, 0, 0.9);
                font-weight: bold;
                font-size: 0.67rem;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Container} {
        background-color: #222327;
        ${Header} {
            span {
                color: #fff;
            }
        }
        ${Wrapper} {
            background-color: #18191c;
            ${Tab} {
                &:hover {
                    background-color: #141517;
                }
                svg {
                    fill: ${variable.SiteColor};
                }
                ${TabName} {
                    color: #eee;
                }
            }
        }
    }
}
`