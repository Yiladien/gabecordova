import React, { useState, useEffect } from "react";

const TextRotation = ({
  textList,
  inDuration = "1000",
  inType = "rotateInX",
  outDuration = "1000",
  outType = "rotateOutX",
  intervalTime = "2000",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(textList[currentIndex]);
  const [animationClass, setAnimationClass] = useState(inType);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass(outType);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
        setText(textList[(currentIndex + 1) % textList.length]);
        setAnimationClass(inType);
      }, inDuration);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex, textList, inType, outType, inDuration, intervalTime]);

  return (
    <>
      <style type="text/css">
        {`
        @keyframes rotateInY {
            from {
                transform: rotateY(90deg);
            }
            to {
                transform: rotateY(0deg);
            }
        }

        @keyframes rotateOutY {
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(-90deg);
            }
        }

        @keyframes rotateInX {
            from {
                transform: rotateX(90deg);
            }
            to {
                transform: rotateX(0deg);
            }
        }

        @keyframes rotateOutX {
            from {
                transform: rotateX(0deg);
            }
            to {
                transform: rotateX(-90deg);
            }
        }

        @keyframes rotateOutZ {
            from {
                transform: rotateZ(0deg);
                opacity: 1;
                scale: 1;
            }
            to {
                transform: rotateZ(180deg);
                opacity: 0;
                scale: 0.5;
            }
        }
        
        @keyframes rotateInZ {
            from {
                transform: rotateZ(180deg);
                opacity: 0;
                scale: 0.5;
            }
            to {
                transform: rotateZ(360deg);
                opacity: 1;
                scale: 1;
            }
        }

        .rotateInY {
            animation: rotateInY ${inDuration}ms forwards;
        }

        .rotateOutY {
            animation: rotateOutY ${outDuration}ms forwards;
        }

        .rotateInX {
            animation: rotateInX ${inDuration}ms forwards;
        }

        .rotateOutX {
            animation: rotateOutX ${outDuration}ms forwards;
        }
        
        .rotateInZ {
            animation: rotateInZ ${inDuration}ms forwards;
        }

        .rotateOutZ {
            animation: rotateOutZ ${outDuration}ms forwards;
        }
    `}
      </style>
      <div
        className={animationClass}
        style={{
          display: "inline-block",
        }}
      >
        {text}
      </div>
    </>
  );
};

export default TextRotation;
