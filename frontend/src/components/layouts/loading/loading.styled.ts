import styled from "styled-components";

const Section = styled.section`
background: rgba(0, 0, 0, 0.65);
bottom: 0;
left: 200px;
right: 0;
top: 0;
overflow: auto;
position: fixed;
text-align: center;
z-index: 9999;

.container {
  background: none;
  width: 40%;
  max-height: 40%;
  margin: 5rem auto;

  img {
    height: 40vh;
  }

}
`;

export const Styled = { Section };
