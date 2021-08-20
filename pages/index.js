import Head from 'next/head';
import styled from 'styled-components';

import { Slider } from '../src/components/Slider';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const filesList = [
  'coffee-777612_640.jpeg',
  'coins-1523383_1920.jpeg',
  'posing-999199_1920.jpeg',
  'raspberries-1426859_1920.jpeg'
];

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Slider Test App</title>
        <meta name="description" content="Slider Test App / Skills assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider images={filesList} />
    </Container>
  );
}
