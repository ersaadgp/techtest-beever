import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/quote";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const { quote, quotes } = useSelector((state) => state);

  const fetchData = async () => {
    await getData()
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res });
      })
      .catch((err) => console.log(err));
  };

  const addFavorite = () => {
    const isRecord = quotes.find((row) => row == quote);
    if (!isRecord) dispatch({ type: "ADD_DATA", payload: quote });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h3>{quote}</h3>
      <button onClick={fetchData}>Get Quote</button>
      <button onClick={addFavorite}>Add Favorite</button>
      <ol>
        {quotes.length > 0 &&
          quotes.map((row, i) => (
            <li style={{ listStyleType: "none" }} key={i}>
              {row}
            </li>
          ))}
      </ol>
    </section>
  );
}
