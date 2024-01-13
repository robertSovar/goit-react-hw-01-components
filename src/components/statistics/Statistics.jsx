import data from '../data.json';
import PropTypes from 'prop-types';
import styles from '../statistics/Statistics.module.css';

const Statistics = ({ title, stats = data, condition }) => {
  return (
    <section className={styles.statistics}>
      {condition && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
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
