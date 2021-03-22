import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components'

const UICard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UICardWrapper = styled.div`
  padding: 15px 15px 0px 15px;
  display: flex;
  flex-direction: column;
`
const UICardTotal = styled.h1`
  font-weight: 400;
  font-size: 30px;
  color: #707070;
  margin: 0;
`
const UICardTitle = styled.h3`
  margin: 0;
  font-size: 10px;
`
const UICardImg = styled.img`
  padding: 0;
  width: fit-content;
  margin: 5px 10px 0px 10px;
`

const UICardGrid = styled.div`
  border-top: 1px solid grey;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  h5 {
    margin: 0;
    font-size: 17px;
  }
  p {
    text-transform: uppercase;
    font-size: 13px;
    margin: 5px 0;
    display: flex;

    i {
      margin-right: 5px;
    }
  }

  div {
    border-right: 1px solid grey;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:last-child {
      border-right: none;
    }
  }
`

const Card = ({ title, data, total, date }) => {
  return (
    <UICard>
      <UICardWrapper>
        <UICardTotal>{total}</UICardTotal>
        <UICardTitle>{title}</UICardTitle>
      </UICardWrapper>
      {data && typeof data === 'object' ? (
        <UICardGrid>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h5>{item.total}</h5>
                <p>
                  <Icon name={item.icon} />
                  {item.name}
                </p>
              </div>
            )
          })}
        </UICardGrid>
      ) : (
        <UICardImg src={data} />
      )}
    </UICard>
  )
}

export default Card
