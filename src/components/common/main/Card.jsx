import React from 'react';
import styled from 'styled-components';
import defaultImage from 'assets/images/noImage.png';
import StarButton from 'components/folder/StarButton';
import KebabButton from 'components/folder/KebabButton';

/**
 *
 * @param {Object} cardDatas
 * @param {number} cardDatas.id
 * @param {string} cardDatas.url
 * @param {string} cardDatas.imageURL
 * @param {string} cardDatas.title
 * @param {string} cardDatas.timePassed
 * @param {string} cardDatas.description
 * @param {string} cardDatas.formattedDate
 * @param {boolean} cardDatas.isFolder
 */
const Card = ({
  id,
  url,
  imageURL,
  title,
  timePassed,
  description,
  formattedDate,
  isFolder,
}) => {
  return (
    <>
      <StyledCard key={id} href={url} target="_blank" rel="noopener noreferrer">
        <CardImgContainer>
          <CardImg src={imageURL || defaultImage} alt={title} />
          {isFolder && <StarButton />}
        </CardImgContainer>
        <TextContainer>
          <SubContainer>
            <span>{timePassed}</span>
            {isFolder && <KebabButton />}
          </SubContainer>
          <StyledP>{description}</StyledP>
          <StyledP className="date">{formattedDate}</StyledP>
        </TextContainer>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.a`
  position: relative;
  width: 34rem;
  height: 30.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
`;
const CardImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.3);
  }
`;

const TextContainer = styled.div`
  padding: 1.4rem 2rem;
  text-align: start;
  width: 100%;
  height: 13.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  span {
    color: #666666;
    font-size: 1.3rem;
  }
  .date {
    color: #333333;
    font-size: 1.4rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  color: black;
`;
export default Card;
