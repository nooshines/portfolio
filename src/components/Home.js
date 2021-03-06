import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  max-width: 600px;
  margin: 80px auto;
  height: 300px;

  i {
    margin: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "🏠 Home ";
  }, []);

  return (
    <Container>
      <Card>
        <h1 className="mb-30 font-size-60">
          Hello <i className="far fa-hand-peace"></i>
        </h1>
        <h2>
          I'm{" "}
          <span className="purple">
            <i className="fas fa-less-than" />
            Nooshin /
            <i className="fas fa-greater-than" />
          </span>{" "}
          ! I design and code beautifully simple things, and I{" "}
          <i className="fas fa-heart red" />
          what I do.
        </h2>
      </Card>
    </Container>
  );
};

export default Home;
