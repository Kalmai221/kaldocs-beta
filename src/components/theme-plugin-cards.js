import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
//import style from 'src/styles/themes.module.scss'
import Missing from "src/images/missing_image_2.png"
import LazyLoad from "react-lazyload"
import Loading from 'src/images/Loading.gif'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'
import Mobile from "src/images/mobile_missing.png"
import kebabCase from "lodash/kebabCase"
import bd from 'src/images/betterdiscord.png'

const pluginCard = ({author}) => (
    <StaticQuery
    query={ graphql`
    query {
        allMarkdownRemark(filter: {collection: {ne: "profiles"} } sort: { fields: [frontmatter___title], order: ASC}) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          ...themeFragment
        }
      }
  `}
    render={data => (
    <>
    <GlobalStyle />
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <>
            {node.frontmatter.author_id === author &&
            <>
            {node.collection === "themes" &&
            <Card>
                {node.frontmatter.status ?
                    <Status title={"Status of " + node.frontmatter.title + ": " + node.frontmatter.status}>{node.frontmatter.status}</Status>
                :
                    <Status title={"Status of " + node.frontmatter.title + ": Unknown"}>Unknown</Status>
                }
                {node.frontmatter.thumbnail ?
                <>
                    <ImageContainer to={"theme" + node.fields.slug}>
                        <LazyLoad once={true} height="100%" placeholder={
                            <img alt={node.frontmatter.title} src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>
                            }>
                            <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "'s thumbnail"} title={node.frontmatter.title + "'s thumbnail"} />
                        </LazyLoad>
                    </ImageContainer>
                    <Options>
                        <span>Image </span><Btn href={node.frontmatter.thumbnail} target="blank">Source</Btn>
                    </Options>
                </>
                :
                    <MissingContainer to={"theme" + node.fields.slug}>
                        <img src={Mobile} alt="Missing Theme Thumbnail" title="Missing Theme Thumbnail" />
                    </MissingContainer>
                }
                <TitleContainer>
                    <Title to={"theme" + node.fields.slug}>{node.frontmatter.title}</Title>
                </TitleContainer>
                {author &&
                    <Details>
                        <AuthorContainer>
                            <Author title={"Made by " + author} to={"/profile/" + author}>{author + " /"}</Author>
                        </AuthorContainer>
                        {node.frontmatter.softwares &&
                        <SoftwareList>
                            {node.frontmatter.softwares.map(softwaree => (
                                <SoftwareIcon title={"This theme supports " + softwaree} to={`/themes/softwares/${kebabCase(softwaree)}/`} alt={softwaree} key={softwaree}>
                                </SoftwareIcon>
                            ))}
                        </SoftwareList>
                        }
                    </Details>
                }
                <DescriptionContainer>
                    <DescriptionText>{node.excerpt}</DescriptionText>
                </DescriptionContainer>
                {node.frontmatter.tags &&
                    <TagsContainer>
                        {node.frontmatter.tags.map(tag => (
                            <Tagg to={`/themes/tag/${tag.toString().toLowerCase()}/`} key={tag}>
                                #{tag.toString().toLowerCase()}
                            </Tagg>
                        ))}
                    </TagsContainer>
                }
            </Card>
            }
            {node.collection === "plugins" &&
            <Card>
                {node.frontmatter.status ?
                    <Status title={"Status of " + node.frontmatter.title + ": " + node.frontmatter.status}>{node.frontmatter.status}</Status>
                :
                    <Status title={"Status of " + node.frontmatter.title + ": Unknown"}>Unknown</Status>
                }
                {node.frontmatter.thumbnail ?
                <>
                    <ImageContainer to={"plugin" + node.fields.slug}>
                        <LazyLoad once={true} height="100%" placeholder={
                            <img alt={node.frontmatter.title} src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>
                            }>
                            <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "'s thumbnail"} title={node.frontmatter.title + "'s thumbnail"} />
                        </LazyLoad>
                    </ImageContainer>
                    <Options>
                        <span>Image </span><Btn href={node.frontmatter.thumbnail} target="blank">Source</Btn>
                    </Options>
                </>
                :
                    <MissingContainer to={"plugin" + node.fields.slug}>
                        <img src={Mobile} alt="Missing Plugin Thumbnail" title="Missing Plugin Thumbnail" />
                    </MissingContainer>
                }
                <TitleContainer>
                    <Title to={"plugin" + node.fields.slug}>{node.frontmatter.title}</Title>
                </TitleContainer>
                {author &&
                    <Details>
                        <AuthorContainer>
                            <Author title={"Made by " + author} to={"/profile/" + author}>{author + " /"}</Author>
                        </AuthorContainer>
                        {node.frontmatter.softwares &&
                        <SoftwareList>
                            {node.frontmatter.softwares.map(softwaree => (
                                <SoftwareIcon title={"This plugin supports " + softwaree} to={`/plugins/softwares/${kebabCase(softwaree)}/`} alt={softwaree} key={softwaree}>
                                </SoftwareIcon>
                            ))}
                        </SoftwareList>
                        }
                    </Details>
                }
                <DescriptionContainer>
                    <DescriptionText>{node.excerpt}</DescriptionText>
                </DescriptionContainer>
                {node.frontmatter.tags &&
                    <TagsContainer>
                        {node.frontmatter.tags.map(tag => (
                            <Tagg to={`/plugins/tag/${tag.toString().toLowerCase()}/`} key={tag}>
                                #{tag.toString().toLowerCase()}
                            </Tagg>
                        ))}
                    </TagsContainer>
                }
            </Card>
            }
            </>
            }
            </>
            ))}
    </>
)}
/>
)

export default pluginCard

const Btn = styled.a`
`
const DisabledBtn= styled.div`
`

const Options = styled.div`
    position: absolute;
    top: 0.3rem;
    left: 0.2rem;
    width: 100%;
    z-index: 1;
    flex-direction: row;
    justify-content: flex-start;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    display: flex;
    opacity: 0;
    box-shadow: 5px 0px 0px 0px #000;
    /*pointer-events: none;*/
    span {
        display: -webkit-inline-box;
        color: #fff;
        font-weight: 400;
        font-size: .5rem;
        -webkit-transition: 250ms linear background-color;
        transition: 250ms linear background-color;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        margin-right: 0.1rem;
        text-shadow: #000 1px 1px 3px;
    }
    ${Btn} {
        display: -webkit-inline-box;
        color: ${variable.SiteColor};
        font-weight: bold;
        font-size: .5rem;
        transition: 250ms linear background-color;
        align-self: center;
        text-shadow: ${variable.SiteColor} 1px 1px 3px;
        &:hover {
            text-shadow: #000 1px 1px 4px;
            background-color: ${variable.SiteColor};
            color: #fff;
        }
    }
    ${DisabledBtn} {
        background-color: grey;
        cursor: not-allowed;
        margin: 0 auto;
        text-align: center;
        display: -webkit-inline-box;
        background-color: grey;
        border-radius: 25px;
        padding: .3rem .6rem;
        font-weight: 400;
        color: #fff;
        font-size: .6rem;
        transition: 250ms linear background-color;
        align-self: center;
        &:hover {
            background-color: grey;
        }
    }
`
const ImageContainer = styled(Link)`
    padding: 10px;
    position: relative;
    padding: 15px 0;
    height: 6.9287rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    img {
        transition: 250ms ease-in-out;
        -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        max-height: 100%;
        margin: unset;
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        display: -webkit-box;
        border-radius: 2px;
        background-size: cover;
        margin: 0 auto;
        transform: translateZ(0);
    }
`

const MissingContainer = styled(Link)`
    position: relative;
    padding: 15px 0;
    height: 6.9287rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    img {
        transition: 250ms ease-in-out;
        -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        max-height: 100%;
        margin: unset;
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        display: -webkit-box;
        border-radius: 2px;
        background-size: cover;
        margin: 0 auto;
        border-radius: 50%;
        height: 4rem;
    }
`

const Title = styled(Link)`
    color: rgba(0, 0, 0, 0.88);
    padding: 0 15px;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
    line-height: unset !important;
    &::after {
        height: 0 !important;
    }
    &:hover {
        color: #fff !important;
        opacity: 1;
        background-color: transparent;
        &::after {
            height: 110%  !important;
            width: 101%;
        }
    }
`

const TitleContainer = styled.div`
    display: block;
    justify-content: center;
    text-align: center;
`

const Card = styled.div`
    width: 10rem;
    background-color: #fff;
    border: 1px solid #eee;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1);
    border: 1px solid #fff;
    position: relative;
    transition: 250ms ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &:last-child {
        margin-right: 1rem;
    }
    &:first-child, &:only-child {
        margin-left: unset;
    }
    &:hover {
        box-shadow: 2px 2px 5px rgba(0,0,0,.25);
        background-color: #eee;
        border-color: #eee;
        ${ImageContainer}, ${MissingContainer} {
            img {
                transform: translateY(-3px);
                -webkit-filter: drop-shadow(${rgba(variable.SiteColor, 0.4)} 0px 6px 8px);
                filter: drop-shadow(${rgba(variable.SiteColor, 0.4)} 0px 8px 10px);
            }
        }
    }
    &:hover, &:focus, &:active {
        ${Options} {
            opacity: 1;
            pointer-events: all;
        }
    }

    &:focus, &:active {
        border-color: ${variable.SiteColor};
    }

    a:not([class*="MissingContainer"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
        display: inline-block;
        transition: color 250ms, text-shadow 250ms;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        z-index: 0;
        line-height: 1rem;
        &:after {
            position: absolute;
            z-index: -1;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 100%;
            height: 3px;
            background-color: ${variable.SiteColor};
            transition: all 250ms;
        }
        &:hover {
            color: #fff !important;
            opacity: 1;
            background-color: transparent;
            &::after {
                height: 110% !important;
                width: 110% !important;
            }
        }
    }

    @media ${variable.MidPoint} {
        &:hover {
            background-color: #fff;
            border-color: #fff;
        }
    }
`

const Status = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 2.5px;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: 250ms ease-in-out;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    color: #fff;
    font-size: 0;
    text-align: center;
    &:hover {
        height: 16px;
        padding: 3px 0;
        font-size: 0.4rem;
    }
    &[title$="Deprecated"] {
        background-color: #a70a0a;
    }
    &[title$="Updated"] {
        background-color: #00b167;
    }
    &[title$="Unknown"] {
        background-color: #00a2ff;
    }
`

const Details = styled.div`
    padding: 0 15px;
    padding-top: 7px;
    display: flex;
`

const AuthorContainer = styled.div`
    flex: 3;
    display: flex;
`

const Author = styled(Link)`
    color: #000;
    font-size: 0.45rem;
    line-height: unset !important;
    &::after {
        height: 0 !important;
    }
    &:hover {
        color: #fff !important;
        opacity: 1;
        background-color: transparent;
        &::after {
            height: 110% !important;
            width: 110%;
        }
    }
`

const SoftwareIcon = styled(Link)`
    line-height: 1 !important;
    align-self: center;
    opacity: 0.5;
    &::after {
        height: 0 !important;
    }
    &:hover {
        opacity: 1;
        &::before {
            color: #000 !important;
        }
    }
    &::before {
        content: "";
        display: block;
        font-size: 0.4rem;
        color: #000 !important;
        background-repeat: no-repeat;
    }
    &[alt="BandagedBD"] {
        &::before {
            background-image: url("https://i.imgur.com/VcfsLtZ.png");
            height: 0.53rem;
            width: 0.53rem;
            background-size: 100%;
            background-position: center;
            -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.4) -1px 1px 1px);
            filter: drop-shadow(rgba(0, 0, 0, 0.4) -1px 1px 1px);
        }
    }
    &[alt="DiscordInjections"] {
        &::before {
            content: "DI"
        }
    }
    &[alt="EnhancedDiscord"] {
        &::before {
            background-image: url("https://i.imgur.com/0n7cFQq.png");
            height: 0.6rem;
            width: 0.7rem;
            background-size: 140%;
            background-position: center;
        }
    }
    &[alt="BetterDiscord"] {
        &::before {
            background-image: url(${bd});
            height: 0.5rem;
            width: 0.5rem;
            background-size: 100%;
            background-position: center;
        }
    }
    &[alt="Powercord"] {
        &::before {
            background-image: url("https://i.imgur.com/N77LRlL.png");
            height: 0.5rem;
            width: 0.5rem;
            background-size: 100%;
            background-position: center;
        }
    }
`

const SoftwareList = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-self: center;
`

const DescriptionContainer = styled.div`
    padding: 15px;
    padding-top: 10px;
`

const DescriptionText = styled.p`
    color: #767676;
    font-size: 0.6rem;
    margin: unset;
    word-break: keep-all;
`

const Tagg = styled(Link)`
`
const TagsContainer = styled.div`
    display: flex;
    padding: 15px;
    padding-top: unset;
    justify-content: space-between;
    flex-wrap: wrap;
    ${Tagg} {
        font-size: 0.5rem;
        color: rgba(0, 0, 0, 0.4) !important;
        display: inline-block;
        transition: color 250ms, text-shadow 250ms;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        z-index: 0;
        line-height: 0.8rem;

        &:after {
        height: 0 !important;
        }

        &:hover {
            color: #fff !important;
            opacity: 1;
            background-color: transparent;
            &::after {
                height: 110% !important;
                width: 110%;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
        ${Card} {
            background-color: #222327;
            border-color: #222327;
            box-shadow: 2px 2px 5px rgba(0,0,0,.1);
            a:not([class*="MissingContainer"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
                display: inline-block;
                transition: color 250ms, text-shadow 250ms;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
                position: relative;
                z-index: 0;
                line-height: 1rem;
                &:after {
                    position: absolute;
                    z-index: -1;
                    bottom: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    content: '';
                    width: 100%;
                    height: 3px;
                    background-color: ${variable.SiteColor};
                    transition: all 250ms;
                }
                &:hover {
                    color: #fff !important;
                    opacity: 1;
                    background-color: transparent;
                    &::after {
                        height: 110% !important;
                        width: 110% !important;
                    }
                }
            }
            &:hover, &:focus, &:active {
                background-color: #131417;
                border-color: #131417;
                box-shadow: 2px 2px 5px rgba(0,0,0,.25);
                ${ImageContainer}, ${MissingContainer} {
                    img {
                        transform: translateY(-3px);
                        -webkit-filter: drop-shadow(${rgba(variable.SiteColor, 0.5)} 0px 6px 8px);
                        filter: drop-shadow(${rgba(variable.SiteColor, 0.5)} 0px 8px 10px);
                    }
                }
            }
            ${TitleContainer} {
                ${Title} {
                    color: #eee !important;
                }
            }
            ${Details} {
                ${AuthorContainer} {
                    ${Author} {
                        color: rgba(255, 255, 255, 0.4) !important;
                    }
                }
            }
            ${DescriptionContainer} {
                ${DescriptionText} {
                    color: #b9bbbe;
                }
            }
            ${TagsContainer} {
                ${Tagg} {
                    color: rgba(255, 255, 255, 0.4) !important;
                }
            }
        }
}
`
