import { useState, useEffect } from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./frazes.module.scss";

export const Frazes = () => {
  const frazes = [
    "This is your day",
    "You will be lucky today",
    "Nature is beautiful",
    "Good things happen every day",
    "Think good things right now",
    "Coffee makes even a good day even better",
  ];

  const [text, setText] = useState("Coffee makes even a good day even better");

  useEffect(() => {
    const chengeText = (a: string, el: string) => {
      a = el;
      setText(a);
    };

    const takeText = () => {
      let text = "";
      frazes.forEach((el, i) =>
        setTimeout(() => chengeText(text, el), 30000 * (i + 1))
      );
      return text;
    };
    /*
    const chengeText2 = (a, el) => {
        a = el;
        setText(a);
      };
  

    const takeText2 = () => {
        let text = "";
 for(let i = 0; i > frazes.length; i++){
    if (i === frazes.length){
        setTimeout(() => chengeText2(text, [i]), 2000)
        console.log("i === frazes.length")
    } else {
        setTimeout(() => chengeText2(text, [i]), 2000 * (i + 1))
        console.log("i")
    }
 }
        return text;
      };
*/
    takeText();
  }, []);

  return (
    <div className={styles.wraperFrazes}>
      <div className={styles.weather}>
        <FontAwesomeIcon icon={faCloud} />
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faCloudBolt} />
      </div>
      <p>{text}</p>
    </div>
  );
};
