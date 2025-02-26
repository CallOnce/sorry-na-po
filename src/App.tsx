"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
    "Sorry",
    "Sorry na", 
    "Wag ka na magalit", 
    "Please",
    "Bati na tayoo", 
    "Sige na bati na tayoo", 
    "Ganda, Bati na tayoo ahhh",
    "T_T",
    "Sige na ahhhh",
    "Bati na tayo",
    "Wag ka na magalit",
    "Smile ka na",
    "Yiee, Ngingiti na yan",
    "Yieeeeee",
    "Lab u",
    "Sorry naaaaa, Bati na tayo",
    "Bati na tayo",
    "Yey Bati na tayo",
    "Bati na <3"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img 
          className="h-[350px]"
          src="https://media1.tenor.com/m/Dtbh5RBNNvUAAAAC/happy-catto-cats.gif" />
          <div className="my-4 text-4xl font-bold ">Yeyyyy! Will you be my date this weekend? </div>
        </>
      ) : (
        <>
          <img
            className="h-[350px]"
            src="https://media1.tenor.com/m/ntMIma-pGaEAAAAC/sad-cat-sad.gif"
          />
          <h1 className="my-4 text-4xl">I am sorry babe T_T</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Bati na Tayo 
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Bati na " : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
