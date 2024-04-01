import "./JokePage.css";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const jokes = [
  `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."

The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
  `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
];
function JokePage() {
  const [jokeDisplayed, setJokeDisplay] = useState(0);
  const cookies = new Cookies();

  useEffect(() => {
    console.log(jokeDisplayed, cookies.get(jokeDisplayed))
  }, [jokeDisplayed])

  return (
    <div className="joke-page-container">
      <div className="joke-page-header">
        <div className="logo">
          <img src={Logo} alt="logo" style={{ height: 64, width: 64 }} />
        </div>
        <div className="avatar">
          <div className="info">
            <div
              style={{
                fontStyle: "italic",
                opacity: 0.5,
              }}
            >
              Handicrafted by
            </div>
            <div style={{ fontWeight: "bold" }}>Jim HLS</div>
          </div>
          <img src={Avatar} alt="avatar" style={{ height: 64, width: 64 }} />
        </div>
      </div>
      <div className="joke-page-banner" style={{ color: "white" }}>
        <h1>A joke a day keeps the doctor away</h1>
        <p>If you joke wrong way, your teeh have to pay. (Serious)</p>
      </div>
      <div className="joke-page-content">
        <div className="text-paragraph">
          A child asked his father, "How were people born?" So his father said,
          "Adam and Eve made babies, then their babies became adults and made
          babies, and so on." The child then went to his mother, asked her the
          same question and she told him, "We were monkeys then we evolved to
          become like we are now." The child ran back to his father and said,
          "You lied to me!" His father replied, "No, your mom was talking about
          her side of the family."
        </div>
        <div className="button-layout">
          <button
            className="j-button"
            style={{ backgroundColor: "#2C7EDB" }}
            onClick={() => {
              cookies.set(jokeDisplayed, "This is Funny!");
              setJokeDisplay(() => jokeDisplayed + 1);
            }}
          >
            This is Funny!
          </button>
          <button
            className="j-button"
            style={{ backgroundColor: "#29B363" }}
            onClick={() => {
              cookies.set(jokeDisplayed, "This is not funny");
              setJokeDisplay(() => jokeDisplayed + 1);
            }}
          >
            This is not funny
          </button>
        </div>
      </div>
      <div className="joke-page-footer">
        <div
          className="text-paragraph"
          style={{ borderBottom: "none", fontSize: "15px" }}
        >
          {jokes[jokeDisplayed]}
        </div>
        <div>Copyright 2021 HLS</div>
      </div>
    </div>
  );
}

export default JokePage;
