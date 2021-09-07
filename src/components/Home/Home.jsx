import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { axiosActions } from "../../redux/axiosActions";
import './home.scss';

const DefaultComponent = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      <h1>home covid info</h1>
    </section>
  );
}

export default DefaultComponent;
