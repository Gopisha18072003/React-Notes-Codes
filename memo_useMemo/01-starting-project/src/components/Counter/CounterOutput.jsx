import { log } from '../../log.js';

export default function CounterOutput({ values }) {
  log('<CounterOutput /> rendered', 2);
  const calculatedValue = values.reduce((acc, val)=> acc + val.value, 0);

  const cssClass = calculatedValue >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{calculatedValue}</span>;
}
