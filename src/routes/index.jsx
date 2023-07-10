import { Title } from "solid-start";
import QRgenerator from "~/components/QRgenerator";
export default function Home() {
  return (
    <main>
      <Title>QR generator</Title>
      <h1>Generate your QR!</h1>
      <QRgenerator />
      <p>
        Website built with:{" "}
        <a href="https://start.solidjs.com" target="_blank">
          Solid.js
        </a>
      </p>
    </main>
  );
}
