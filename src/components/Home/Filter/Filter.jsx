import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { homeActions } from '../homeActions';

const Filter = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, statesEEUU, optionPick } = storeData;

  const states = Object.keys(statesEEUU);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    dispatch(homeActions({ [name]: target.value }))
  }

  return (
    <div>
      <select
        name="selectOne"
        value={optionPick.selectOne}
        onChange={(e) => handleChange(e)}
      >
        <option value="All states" key={uuidv4()}>All states</option>
        {states.map((item) => (
          <option value={statesEEUU[item]} key={uuidv4()}>{statesEEUU[item]}</option>
        ))}
      </select>

      <select
        name="selectTwo"
        value={optionPick.selectTwo}
        onChange={(e) => handleChange(e)}
      >
        <option key={uuidv4()} value="All time">All time</option>
        <option key={uuidv4()} value="Last 7 days">Last 7 days</option>
        <option key={uuidv4()} value="Last month">Last month</option>
      </select>
    </div>
  );
}

export default Filter;