import { container } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';

// TODO
// move file to component folder
// add animation + design

export function Loading() {
  return (
    <div className={container({ width: 'lg', padding: 'lg' })}>
      <div className={utilities({ color: 'warning' })}>
        {' '}
        <span role="img" aria-label="brain emoji">
          🧠
        </span>{' '}
        Loading...
      </div>
    </div>
  );
}
