import { createSignal } from "solid-js";
import "./QRgenerator.css";
import qr from "qrcode";
export default function QRgenerator() {
  const [link, setLink] = createSignal("");
  const [QR, setQR] = createSignal("");

  const generateQR = async (e) => {
    e.preventDefault();
    let qrcode = await qr.toString(link(), {
      color: {
        dark: "#192a56",
        light: "#dcdde1",
      },
      width: "512",
    });

    setQR(qrcode);
  };

  return (
    <>
      <form onSubmit={generateQR}>
        <div>
          <input
            type="text"
            id="url"
            onInput={(e) => setLink(e.target.value)}
            placeholder="Your Url"
            required
          ></input>
        </div>{" "}
        <div>
          <input type="submit" value="Create QR!"></input>{" "}
        </div>
      </form>

      <p innerHTML={QR()}></p>
      <div class="pre-svg">
        <pre>
          <code>{QR}</code>
        </pre>
      </div>
    </>
  );
}
