import React, { useState } from "react";

//bootstrap
import Button from "react-bootstrap/Button";

// bootstrap icons
import { ClipboardFill, ClipboardCheckFill } from "react-bootstrap-icons";

const CopyButton = ({ copyText, buttonClass }) => {
  const [copyToggle, setCopyToggle] = useState(false);

  const handleCopy = (event) => {
    navigator.clipboard.writeText(copyText);

    setCopyToggle(true);

    setTimeout(() => {
      setCopyToggle(false);
    }, 2000);
  };
  //   console.log(buttonClass);
  return (
    <Button
      variant={copyToggle ? "success" : "dark"}
      id="button-addon2"
      className={`d-flex align-items-center focus-ring ${
        buttonClass ? buttonClass : null
      }`}
      title="Copy"
      name="copyEmailTo"
      onClick={handleCopy}
    >
      {!copyToggle ? (
        <ClipboardFill className="pe-none" />
      ) : (
        <ClipboardCheckFill
          className="pe-none"
          style={{
            transform: "scale(1.2)",
          }}
        />
      )}
    </Button>
  );
};

export default CopyButton;
