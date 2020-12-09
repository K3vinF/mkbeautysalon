import Head from 'next/head'
// https://github.com/rebassjs/rebass/issues/794#issuecomment-618307330
import { Box, Flex, Heading } from "rebass/styled-components";
import { theme } from '../assets/theme';
import styled, { ThemeProvider } from "styled-components";
import { FiSmartphone, FiMail } from "react-icons/fi";
import ReactGA from 'react-ga';
import React from "react";

const StyledHeader = styled(Box)`
  line-height: 1;
  color: ${props => props.theme.colors.white};
  svg {
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    display: inline-block;
    margin-right: 1em;
  }
`;

export default function Home(props: any) {

  const og_image = props.hostname + '/images/schone-handen-paal-klein-vierkant.jpg';
  const description = `Skin is a beautiful thing… wear it well`

  if (process.browser) {
    // ReactGA.initialize('UA-171799610-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <ThemeProvider theme={ theme }>
    <div className="container">
      <Head>
        <title key='title'>MK Beautysalon</title>
        <link key='favicon' rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, archive" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MK Beautysalon | MKBeautysalon.nl" />
        <meta property="og:site_name" content="MKBeautysalon.nl" />
        <meta property="og:description"
           content={ description } />
        <meta name="description"
           content={ description } />
        <meta property="og:image"
           content={ og_image } />
      </Head>
        <main>

          <Flex
            justifyContent = {'center'}
            flexWrap={'wrap'}>
            <Box px={[4, 5]} >
              <img src={'images/mkbeautysalon.png'}/>


            </Box>
          </Flex>

          <Flex
            justifyContent = {'center'}
            px={3}
            py={4}
            flexWrap={'wrap'}>

            <Box width={[1, '20em']} p={[2,3]}>
              <Heading
                fontSize={[ 2,3 ]}
                mb={[2,3]}
                as={'h1'}>

                MK beautysalon - Heenvliet
              </Heading>
              <p>
              <FiMail /> <a href={'mailto: Mrusscher77@hotmail.com'}>E-mail</a> &nbsp; &nbsp;  <FiSmartphone /> <a href={'tel:0031652075518'} className={'phone'}>06 520 755 18</a><br /></p>
              <p>
                Monique Klok<br />
                Drieendijk 1b<br />
                3218 LB Heenvliet<br />
              </p>
            </Box>
          </Flex>
        </main>
    </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  return {
    props: {
      hostname: process.env.URL
    },
  }
}
