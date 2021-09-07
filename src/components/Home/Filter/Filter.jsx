import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const Filter = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, statesEEUU } = storeData;

  const states = Object.keys(statesEEUU);

  return (
    <div>
      <select
        name="selectOne"
      >
        <option value="All states" key={uuidv4()}>All states</option>
        {states.map((item) => (
          <option value={statesEEUU[item]} key={uuidv4()}>{statesEEUU[item]}</option>
        ))}
      </select>

      <select
        name="selectTwo"
      >
        <option key={uuidv4()} value="All time">All time</option>
        <option key={uuidv4()} value="Last 7 days">Last 7 days</option>
        <option key={uuidv4()} value="Last month">Last month</option>
      </select>
    </div>
  );
}

export default Filter;