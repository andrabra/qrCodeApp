import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [inputChar, setInputChar] = useState("");
  const [resultShowQrCode, setResultShowQrCode] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    setResultShowQrCode(inputChar);
    setInputChar("");
  };

  const handleChange = (e) => {
    setInputChar(e.target.value);
    setResultShowQrCode("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          value={inputChar}
          onChange={handleChange}
          className="border"
          type="text"
        />
        <button
          onClick={handleClick}
          className="border p-2 cursor-pointer"
          type="submit"
        >
          Generate
        </button>

        <div className="min-h-70">
          {resultShowQrCode !== "" && (
            <QRCodeSVG size="256" value={resultShowQrCode} />
          )}
        </div>
      </form>
    </div>
  );
};

export default QrCodeGenerator;
