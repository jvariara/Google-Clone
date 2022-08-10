import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const Search = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();

    console.log("you hit search >> ", input);
    
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })

    // Do something with input...
    navigate("/search");
  };
  

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttons--hidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
