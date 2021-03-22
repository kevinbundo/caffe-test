import React from "react";
import styled from "styled-components";
import { Container } from "..";
import { ProductCard } from "../../components";
import { productData } from "../../data/ProductData";
import mamaneroLogo from "../../assets/mamanerologo.png";

const UIProducts = styled.div`
  background: #ebeced;
  padding-top: 40px;
  padding-bottom: 50px;
`;

const UIProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 5px solid #9d754c;
`;

const UILogo = styled.img`
  max-width: 200px;
  margin: auto;
  display: flex;
  margin-bottom: 20px;
`;

const Products = () => {
  return (
    <UIProducts>
      <Container>
        <UILogo src={mamaneroLogo} alt="logo" />
        <UIProductsGrid>
          {productData.map((product, i) => (
            <ProductCard key={i} data={product} />
          ))}
        </UIProductsGrid>
      </Container>
    </UIProducts>
  );
};

export default Products;
