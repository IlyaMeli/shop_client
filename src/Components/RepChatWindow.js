import React, { useEffect } from "react";
import styled from "styled-components";

const RepChatWindow = () => {
  return (
    <Swrapper>
      <SWriteForm>
        <Sh1>Human Resources Representative Interface</Sh1>
        <Sh3>Start Chatting with the candidate on the other tab...</Sh3>
        <Soutput readonly></Soutput>
        <SBottomBox class="bottom-box">
          <Sinput placeholder="write a message..." />
          <SButton type="submit">Send</SButton>
        </SBottomBox>
      </SWriteForm>
    </Swrapper>
  );
};
export default RepChatWindow;

const Swrapper = styled.div`
  padding: 50px;
  font-weight: 400;
`;
const SWriteForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 15px;
  justify-content: center;
  border: 2px solid white;
  outline: 2px dashed rgb(99, 204, 206, 0.5);
  outline-offset: -10px;

  width: 50vw;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.25);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Soutput = styled.textarea`
  border: solid 1px rgb(239, 40, 83, 0.3);

  /* border-radius: 5px; */
  flex-basis: 200px;
  padding: 10px;
  margin: 0 0 8px;
`;

const Sinput = styled.input`
  flex: 1 1;
  height: 28px;
  font-size: 16px;
  /* border-radius: 5px; */
  border: solid 1px rgb(239, 40, 83, 0.3);

  padding-left: 10px;
`;

const SBottomBox = styled.div`
  display: flex;
`;

const SButton = styled.button`
  /* border-radius: 5px; */
  border: 0;
  background: #ef2853;
  color: white;
  padding: 6px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    background: #ff6684;
    border: solid 2px white;
    color: black;
    border: solid black 1px;
  }
`;

  const Sh1 = styled.h1`
    color: #ef2853;
    
  
  `
    const Sh3 = styled.h1`
     color: #37a1a3;
    font-weight: 300;
    
  
  `

//   h1 {
    // color: #ef2853;
//   }
//   h3 {
    // color: #37a1a3;
    // font-weight: 300;
//   }
//   .write-form {
//     display: flex;
//     flex-direction: column;
//     background: white;
//     padding: 15px;
//     justify-content: center;
//     border: 2px solid white;
//     outline: 2px dashed rgb(99, 204, 206, 0.5);
//     outline-offset: -10px;
//   }
//   .bottom-box {
//     display: flex;
//   }
//   .output {
// border: solid 1px rgb(239, 40, 83, 0.3);

// /* border-radius: 5px; */
// flex-basis: 200px;
// padding: 10px;
// margin: 0 0 8px;
//   }
//   .input {
// flex: 1 1;
// height: 28px;
// font-size: 16px;
// /* border-radius: 5px; */
// border: solid 1px rgb(239, 40, 83, 0.3);

// padding-left: 10px;
//   }
//   button {
// /* border-radius: 5px; */
// border: 0;
// background: #ef2853;
// color: white;
// padding: 6px;
// margin-left: 5px;
//   }

//   button:hover {
// cursor: pointer;
// background: #ff6684;
// border: solid 2px white;
// color: black;
// border: solid black 1px;
//   }
//   form {
//     width: 50vw;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.25);
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//       Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   }
