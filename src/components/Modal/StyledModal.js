import styled from 'styled-components';

export const StyledWrapperOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  /* min-height: 100vh; */
`;

export const StyledWrapperModal = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background: linear-gradient(
    to bottom,
    rgb(227, 213, 255),
    rgb(255, 231, 231)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  button {
    color: black;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const StyledModalForm = styled.form`
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    height: 30px;
    border: none;
    outline: none;
    caret-color: rgb(255, 81, 0);
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    padding-left: 10px;
    letter-spacing: 0.8px;
    color: rgb(19, 19, 19);
    font-size: 15.3px;
  }

  div {
    display: flex;
    justify-content: space-between;
    button {
      border: 1px solid;
      border-radius: 10px;
      padding: 5px 15px;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        color: white;
      }

      &:active {
        color: white;
      }
    }
  }
`;

export const SaveButton = styled.button`
  &:hover {
    background-color: rgb(0, 128, 0);
  }
  &:active {
    background-color: rgb(0, 64, 0);
  }
`;

export const CancelButton = styled.button`
  &:hover {
    background-color: rgb(255, 81, 0);
  }

  &:active {
    background-color: rgb(190, 61, 0);
  }
`;
