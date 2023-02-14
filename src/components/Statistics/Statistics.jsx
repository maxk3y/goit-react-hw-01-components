import { StatisticsList } from './StatisticsList/StatisticsList';
import { StatisticsWrapper } from './Statistics.styled';
import { Title } from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatisticsList data={data} />
    </StatisticsWrapper>
  );
};
