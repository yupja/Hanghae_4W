import React, { useRef } from "react";
import styled from "styled-components";
import "./App.css";

import { useDispatch } from "react-redux";
import { createMainFB } from "./redux/modules/main";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Add = (props) => {
  const word = React.useRef(null);
  const mean = React.useRef(null);
  const example = React.useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();
  const id_index = params.id;


//   let typeTitle;
//   if (props.params.type === "update") {
//     typeTitle = "수정";
//   } else {
//     typeTitle = "추가";
//   }


  const addMain = () => {
    dispatch(
      createMainFB({
        word: word.current.value,
        mean: mean.current.value,
        example: example.current.value,
      })
    );
    history.push("/");
  };
  

//   if (props.params.type === "update") {
//     let id = location.state.selected_word.id;
//     dispatch(updateBucketFB(id, new_list_state));
//   } else {
//     dispatch(createDictionaryFB(new_list_state));
//   }
//   history.goBack();
// };



  return (
    <div>
      <div className="addContainer">
        <Hea>단어 추가</Hea>
        <Form>
          <Word>
            <P>단어</P>
            <Input type="text" ref={word} />
          </Word>
          <Mean>
            <P>의미</P>
            <Input type="text" ref={mean} />
          </Mean>
          <Ex>
            <P>예문</P>
            <Input type="text" ref={example} />
          </Ex>
          <Button onClick={addMain}>단어 추가</Button>
        </Form>
      </div>
    </div>
  );
};

const Hea = styled.div`
  max-width: 350px;
  min-height: 40px;
  background-color: #f5f5f5;
  color: black;
  margin: 70px auto 0px auto;
  padding: 20px;
  font-size: 30px;
  font-weight: 900;
  color: #1d3557;
  border: 5px solid #5c5a5c;
  border-bottom: 2px solid #5c5a5c;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Form = styled.div`
  width: 350px;
  height: 450px;
  background-color: white;
  padding: 20px;
  margin: 0px auto;
  border: 5px solid #5c5a5c;
  border-top: 2px solid #5c5a5c;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 18px;
  font-weight: 900;
  color: #1d3557;
`;

const Button = styled.div`
   width: 85px;
  height: 25px;
  background-color: none;
  margin: 20px;
  padding: 7px;
  border: 2px solid #5c5a5c;
  border-radius: 20px;
  margin: 15px auto;
  &:hover {
    border: 1px solid black;
    background-color: #2e2d2e;
    color: white;
  }
`;

const Word = styled.div`
  padding: 20px;
`;

const Mean = styled.div`
  padding: 20px;
`;

const Ex = styled.div`
  padding: 20px;
`;

const P = styled.div`
    text-align: left;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 15px;
`;
const Input = styled.input`
    width:300px;
    height: 28px;
  padding: 5px 0;
`;

export default Add;
