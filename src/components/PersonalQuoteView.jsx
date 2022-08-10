import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const { myQuotes } = useSelector((state) => state);

  const [quote, setQuote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isRecord = myQuotes.find((row) => row == quote);
    if (!isRecord) dispatch({ type: "ADD_MY_QOUTES", payload: quote });
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input value={quote} onChange={(e) => setQuote(e.target.value)} />
        <button type={`submit`}>Submit</button>
      </form>
      <ol>
        {myQuotes.length > 0 &&
          myQuotes.map((row, i) => (
            <li style={{ listStyleType: "none" }} key={i}>
              {row}
            </li>
          ))}
      </ol>
    </section>
  );
}
