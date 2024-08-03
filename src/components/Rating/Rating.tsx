import styled from 'styled-components';
import Glass from './Glass';

interface Props {
  rating: number;
  hasLabel?: boolean;
}

function Rating({ rating, hasLabel = false }: Props) {
  console.log(rating);

  const generateRating = () => {
    const stars = [];
    let current = rating;

    for (let i = 0; i < 5; i += 1) {
      if (current >= 1) {
        stars.push(<Glass key={i} point={1} />);
        current -= 1;
      } else if (current >= 0) {
        stars.push(<Glass key={i} point={current} />);
        current = 0;
      }
    }
    return stars;
  };

  return (
    <Container>
      {hasLabel && <span>{rating}</span>}
      <div className='star-wrapper'>{generateRating()}</div>
    </Container>
  );
}

export default Rating;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.body.semi_bold[16]}

  .star-wrapper {
    display: flex;
    align-items: center;

    svg {
      margin: 0 -2px;
    }
  }
`;
