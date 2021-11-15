import 'css-doodle';
import { vars } from '../../styles/vars.css';
import * as styles from './doodle.css';
export function Doodle() {
  return (
    <css-doodle class={styles.doodle}>
      {`
      @grid: 6 / 100vw 100vh;
      @random {
        border-left: 1px dashed ${vars.colors.base4};
      }
      @random {
        border-bottom: 1px dashed ${vars.colors.base4};
      }
      @random {
        filter: drop-shadow(0 0 0.2px #fff);
      }
    `}
    </css-doodle>
  );
}
