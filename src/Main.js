import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteMainFB } from "./redux/modules/main";

// import {updateWord} from "./redux/modules/main"
// import EditIcon from '@mui/icons-material/Edit';


const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const words = useSelector((state) => state.main.list);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {words.map((list, index) => {
        return (
          <Cards key={index} id={list.id}>
            <Word> {list.word}<Button_E >수정</Button_E> <Button_D
              onClick={() => {
                dispatch(deleteMainFB(list.id));
                history.push("/");
              }}
            >삭제
            </Button_D></Word>
            <Mean>{list.mean}</Mean>
            <Ex>{list.example}</Ex>
           
          </Cards>
        );
      })}
      <Addbtn
        onClick={() => {
          history.push("/Add");
        }}
      >
        <Plus>+</Plus>
      </Addbtn>
    </div>
  );
};

const Cards = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 300px;
  font-size: 20px;
  background-color: white;
  border: 5px solid #5c5a5c;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  float: left;
  margin: 40px 20px 40px 20px;
  box-shadow: 3px 3px 3px 3px gray;
`;

const Word = styled.div`
  max-width: 100%;
  background-color: #f5f5f5;
  /* border-bottom: none; */
  font-size: 25px;
  font-weight: 900;
  color: #2e2d2e;
  margin: 0px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  /* align-items: center;  */
`;


const Mean = styled.div`
  height: 70px;
  color: #2e2d2e;
  /* border-bottom: none; */
  padding: 10px;
  overflow: auto;
  text-align: left;
  font-size: 20px;
  font-weight:bolder;
  margin-left: 15px;
  margin-top: 15px;
`;

const Ex = styled.div`
  height: 125px;
  color: black;
  text-align: left;
  /* margin: auto; */
  padding: 10px;
  border-bottom: none;
  overflow: auto;
  font-size: 20px;
  font-weight:bolder;
  margin-left: 15px;
  margin-top: 15px;
`;

const Addbtn = styled.div`
  background-color: #2e2d2e;
  height: 80px;
  width: 80px;
  border-radius: 50px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    &:hover{
      background-color: #a1a1a1;
      height: 80px;
      width: 80px;
      border: 1px solid #a1a1a1;
      border-radius: 50px;
      position: fixed;
      bottom: 10px;
      right: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`;

const Plus = styled.text`
  color: white;
  font-size: 50px;
`;


const Button_D = styled.div`
   width: 70px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 0;
  justify-items: end;
  margin: 0 auto;
  &:hover {
    border: 1px solid black;
    background-color: #2e2d2e;
    color: white;
  }
`;

const Button_E = styled.div`
  width: 70px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  margin-left: 240px;
  text-align: center;
  justify-items: end;
  &:hover {
    border: 1px solid black;
    background-color: #2e2d2e;
    color: white;
  }
`;


export default Main;
