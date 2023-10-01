import React, { useState, useEffect } from "react";

const TextRotation = ({
  textList,
  inDuration = "1000",
  inType = "rotateInX",
  outDuration = "1000",
  outType = "rotateOutX",
  intervalTime = "3000",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(textList[currentIndex]);
  const [animationClass, setAnimationClass] = useState(inType);

  //   console.log(animationClass);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setAnimationClass(outType === "jelloIn" ? "jelloOut" : outType);

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

        @keyframes slideInLeft {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes slideOutLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
        }

        @keyframes slideInRight {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
        }

        @keyframes slideInUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        
        @keyframes slideOutUp {
            from { transform: translateY(0); }
            to { transform: translateY(-100%); }
        }

        @keyframes slideInDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }
        
        @keyframes slideOutDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }

        @keyframes jelloIn {
            0%, 100% { transform: scale(1, 1) }
            5%, 95% { transform: scale(1.25, 0.75); }
            10%, 90% { transform: scale(0.75, 1.25); }
            20%, 80% { transform: scale(1.15, 0.85); }
            30%, 70%, 40%, 60% { transform: scale(0.95, 1.05); }
            50% { transform: scale(1.05, 0.95); }
        }

        @keyframes jelloOut {
            0% { 
                transform: scale(1, 1); 
                opacity: 1;
            }
            50% { 
                transform: scale(1.05, 0.95); 
                opacity: 1;
            }
            30%, 70%, 40%, 60% { 
                transform: scale(0.95, 1.05); 
                opacity: 1;
            }
            20%, 80% { 
                transform: scale(1.15, 0.85); 
                opacity: 1;
            }
            10%, 90% { 
                transform: scale(0.75, 1.25); 
                opacity: 1;
            }
            5%, 95% { 
                transform: scale(1.25, 0.75); 
                opacity: 1;
            }
            100% { 
                opacity: 0;
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
        
        .slideInLeft {
            animation: slideInLeft ${inDuration}ms forwards;
        }

        .slideOutLeft {
            animation: slideOutLeft ${outDuration}ms forwards;
        }
        
        .slideInRight {
            animation: slideInRight ${inDuration}ms forwards;
        }

        .slideOutRight {
            animation: slideOutRight ${outDuration}ms forwards;
        }
        
        .slideInUp {
            animation: slideInUp ${inDuration}ms forwards;
        }

        .slideOutUp {
            animation: slideOutUp ${outDuration}ms forwards;
        }
        
        .slideInDown {
            animation: slideInDown ${inDuration}ms forwards;
        }

        .slideOutDown {
            animation: slideOutDown ${outDuration}ms forwards;
        }

        .jelloIn {
            animation: jelloIn ${inDuration}ms forwards;
        }

        .jelloOut {
            animation: jelloOut ${outDuration}ms forwards;
        }
    `}
      </style>
      <div
        style={{
          display: "inline-block",
          overflow: [
            "slideInLeft",
            "slideOutLeft",
            "slideInRight",
            "slideOutRight",
            "slideInUp",
            "slideOutUp",
            "slideInDown",
            "slideOutDown",
          ].includes(animationClass)
            ? "hidden"
            : "visible",
          verticalAlign: [
            "slideInLeft",
            "slideOutLeft",
            "slideInRight",
            "slideOutRight",
            "slideInUp",
            "slideOutUp",
            "slideInDown",
            "slideOutDown",
          ].includes(animationClass)
            ? "bottom"
            : "baseline",
          width: "auto",
        }}
      >
        <div
          className={animationClass}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default TextRotation;
