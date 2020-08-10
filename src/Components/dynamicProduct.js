import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { add_to_cart } from "../state/product.slice";

function DynamicProduct({ location }) {
  const [qty, setQTY] = useState(0);
  const { selected_product } = useSelector((state) => state.products);
  // const { all_products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const picName = location.state.name && location.state.name.replace(/ /g, "_");

  // debugger;
  return (
    <Wrapper>
      <StyledImg src={`./images/product.images/${picName}.jpg`} alt="product" />
      <DataWrapper>
        <ProductTitle>{selected_product.name}</ProductTitle>
        <ProductPrice>${selected_product.price}</ProductPrice>
        <Description>{selected_product.desc}</Description>
        <StyledQtyWrapper>
          <StyledQtyBtns>
            <StyledBtn onClick={() => setQTY(qty !== 0 ? qty - 1 : (qty = 0))}>
              -
            </StyledBtn>
            <StyledQTY> Quantity: {qty}</StyledQTY>
            <StyledBtn onClick={() => setQTY(qty + 1)}>+</StyledBtn>
          </StyledQtyBtns>
          <StyledAddBtn
            onClick={() =>
              dispatch(add_to_cart({ product: selected_product, qty }))
            }
          >
            ADD TO CART
          </StyledAddBtn>
        </StyledQtyWrapper>
      </DataWrapper>
    </Wrapper>
  );
}

export default DynamicProduct;

const Wrapper = styled.div`
  display: flex;
  /* border: solid 2px green; */
  padding: 5vh;
  /* align-items: center; */
  justify-content: center;
`;

const DataWrapper = styled.div`
  /* border: solid 2px pink; */
  padding: 3vh;
`;

const StyledImg = styled.img`
  height: 75vh;
  /* border: solid 2px yellow; */
  padding: 3vh;
`;

const ProductTitle = styled.div`
  /* border: solid 1px red; */
  font-size: 5vh;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ProductPrice = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* border: solid 1px blue; */
  font-size: 6vh;
  font-weight: 100;
`;

const Description = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 100;
  font-size: 3vh;
  margin: 5vh 0;
  width: 40vw;
`;
const StyledBtn = styled.button`
  border: none;
  font-weight: bold;
  padding: 0.5rem;
  /* margin: 0.2rem; */

`;

const StyledQTY = styled.div`
  font-weight: bold;
  padding: 0.5rem;
  font-size:2vh;


`;

const StyledQtyWrapper = styled.div`
  /* border: solid 3px black; */
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  font-weight: bold;
  font-size: 3vh;
  padding: 3vh;

  
`;

const StyledAddBtn = styled.button`
  border: solid 2px black;
  margin-left: 2rem;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;
  font-size:2vh;
  &:hover {
    cursor: pointer;
  }
`;

const StyledQtyBtns = styled.button`
  border: solid 2px black;
  display: flex;
  flex-direction: row;
  border: solid 2px black;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;
`;
