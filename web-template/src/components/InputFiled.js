import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaGoogle } from "react-icons/fa";
import { SiDuckduckgo } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";
import "./InputFiled.css";

export default function InputFiled() {
  const [searchInput, setSearchInput] = useState("");
  const [searchEngineInput, setSearchEngineInput] = useState("google");
  const [visibleHistory, setVisibleHistory]  = useState(false);
  const [searchInputDicWord, setSearchInputDictWord] = useState([]);
  const [searchInputDicDes, setSearchInputDictDes] = useState([]);
  const [searchInputDicPOS, setSearchInputDictPOS] = useState([]);
  const [aiResponse, setAiResponse] = useState("");
  const [aiSearchInput, setAiSearchInput] = useState("");
  let searchInputDOM = document.querySelectorAll(".input-cont-input");
  let dictContDOM = document.querySelectorAll(".exten-cont-dict")[0];
  let aiContDOM = document.querySelectorAll(".exten-cont-ai")[0];

  function changeSearchIcon() {
    console.log(searchInput);
    if (searchEngineInput === "google") {
      return(<FaGoogle />)
    } else if (searchEngineInput === "duckduckgo") {
      return(<SiDuckduckgo />)
    } else if (searchEngineInput === "dictionary") {
      return(<GiBookshelf />)
    } else if (searchEngineInput === "gemini") {
      return(<BsRobot />)
    }
  }

  function handleClickForHistory() {

  }

  function handelInputButtonClick() {
    console.log(searchInput);
    if (searchEngineInput === "google") {
      window.open(
        `https://www.google.com/search?q= + ${searchInput}`,
        "_blank"
      );
      searchInputDOM.forEach((input) => (input.value = ""));
    } else if (searchEngineInput === "duckduckgo") {
      window.open(
        `https://duckduckgo.com/?va=c&t=hl&q= + ${searchInput}`,
        "_blank"
      );
      searchInputDOM.forEach((input) => (input.value = ""));
    } else if (searchEngineInput === "dictionary") {
      handleDictionaryInput();
    } else if (searchEngineInput === "gemini") {
      hadnleGeminiInput();
    }
  }
  async function handleDictionaryInput() {
    console.log(searchInputDOM[0].value);
    try {
      const responseAPIDict = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
      );
      if (!responseAPIDict.ok) {
        throw new Error(`HTTP error status: ${responseAPIDict.status}`);
        return;
      }

      const responseDict = await responseAPIDict.json();
      if (responseDict.length > 0) {
        let resDictWord = responseDict[0].word;
        let resDictDes =
          responseDict[0]?.meanings[0]?.definitions[0]?.definition;
        let resDictPOS = responseDict[0]?.meanings[0]?.partOfSpeech;
        setSearchInputDictWord(resDictWord);
        setSearchInputDictDes(resDictDes);
        setSearchInputDictPOS(resDictPOS);
      }
      console.log(responseDict[0]);
      dictContDOM.classList.remove("hidden");
      console.log(responseDict[0]);
    } catch (error) {
      console.log(error);
    }
    searchInputDOM.forEach((input) => (input.value = ""));
  }

  async function hadnleGeminiInput() {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBs7xOXunPMpAJYN_ZkPZhJtx6MZVDxAq0"
    );
    const prompt = `${searchInput}`;
    setAiSearchInput("Loading...");
    setAiResponse("Loading...");
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textAI = response.text;
      console.log(textAI);
      setAiResponse(textAI);
      console.log(aiResponse);
      setAiSearchInput(prompt);
    } catch (e) {
      console.log(e);
    }
    searchInputDOM.forEach((input) => (input.value = ""));
  }

  function handelInputButtonEnterk(e) {
    if (e.key === "Enter") handelInputButtonClick();
  }

  function HandleDictCancleBtn() {
    dictContDOM.classList.add("hidden");
  }

  function HandleAiCancleBtn() {
    aiContDOM.classList.add("hidden");
  }

  return (
    <div className="inputField-cont">
      <div className="input-cont">
        <input
          className="input-cont-input"
          type="text"
          placeholder="Type something ..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={(e) => handelInputButtonEnterk(e)}
          onClick={handleClickForHistory}
        />
        <button
          className="input-cont-btn"
          type="submit"
          onClick={() => handelInputButtonClick()}
        >
          {changeSearchIcon()}
          {/* <FaSearchengin className="input-cont-icon" /> */}
        </button>
        <select
          name=""
          id=""
          className="input-cont-select"
          onChange={(e) => {
            setSearchEngineInput(e.target.value);
            console.log(searchEngineInput)
          }}
        >
          <option value="google">google</option>
          <option value="duckduckgo">duckduckgo</option>
          <option value="dictionary">dictionary</option>
          <option value="gemini">Gemini</option>
        </select>
      </div>
      <div className="exten-cont-dict hidden">
        {searchInputDicWord != [] && (
          <DictContentFun
            dictTitle={searchInputDicWord}
            dictDescription={searchInputDicDes}
            dictPOS={searchInputDicPOS}
            dictBtnFun={HandleDictCancleBtn}
          />
        )}
      </div>
      <div className="exten-cont-dict hidden">
        {searchInputDicWord != [] && (
          <DictContentFun
            dictTitle={searchInputDicWord}
            dictDescription={searchInputDicDes}
            dictPOS={searchInputDicPOS}
            dictBtnFun={HandleDictCancleBtn}
          />
        )}
      </div>
      <div className="exten-cont-ai">
        {aiResponse != "" && (
          <AiContent
            aiPrompt={aiSearchInput}
            aiResponse={aiResponse}
            aiBtnFun={HandleAiCancleBtn}
          />
        )}
      </div>
    </div>
  );
}

function DictContentFun({ dictTitle, dictDescription, dictPOS, dictBtnFun }) {
  return (
    <div className="DictContentFunDiv">
      <div className="DictContentCancelDiv">
        <button className="DictContentCancelbtn">
          <MdOutlineCancelPresentation
            onClick={dictBtnFun}
            fill=""
            className="DictContentCancelIcon"
          />
        </button>
      </div>
      <div className="dictContentWord">
        <h3 className="dictContentWordStatic">Word:</h3>
        <p className="dictContentWordRes">{dictTitle}</p>
      </div>
      <div className="dictContentDef">
        <h3 className="dictContentDefStatic">Definition:</h3>
        <p className="dictContentDefRes">{dictDescription}</p>
      </div>
      <div className="dictContentPOS">
        <h3 className="dictContentPOSStatic">Parts of speech:</h3>
        <p className="dictContentPOSRes">{dictPOS}</p>
      </div>
    </div>
  );
}

function AiContent({ aiPrompt, aiResponse, aiBtnFun }) {
  return (
    <div className="AiContentDiv">
      <div className="AiContentCancelDiv">
        <button className="AiContentCancelbtn">
          <MdOutlineCancelPresentation
            onClick={aiBtnFun}
            className="AiContentCancelIcon"
          />
        </button>
      </div>
      <div>
        <h3>Prompt: {aiPrompt}</h3>
      </div>
      <div>
        <p>{aiResponse}</p>
      </div>
    </div>
  );
}
