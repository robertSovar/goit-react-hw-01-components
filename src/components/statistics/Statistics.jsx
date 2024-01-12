import data from '../data.json';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats = data, condition }) => {
  return (
    <section className="statistics">
      {condition && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => {
          return (
            <li className="item">
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  hasTitle: PropTypes.bool,
};

export default Statistics;
