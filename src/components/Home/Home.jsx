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

  useEffect(() => {
    dispatch(axiosActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      <h1>COVID US</h1>
      <Overview />
      <Filter />
      <Chart />
    </section>
  );
}

export default DefaultComponent;
