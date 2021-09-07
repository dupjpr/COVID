import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { axiosActions } from "../../redux/axiosActions";
import './home.scss';
import Filter from "./Filter/Filter";
import Chart from "./Chart/Chart";
import Overview from "./Overview/Overview";

const DefaultComponent = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { loading, data } = storeData;

  useEffect(() => {
    dispatch(axiosActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      <h1>COVID US</h1>

      {loading && 'loading...'}
      {data && <Overview />}
      {data && <Filter />}
      {data && <Chart />}

    </section>
  );
}

export default DefaultComponent;
