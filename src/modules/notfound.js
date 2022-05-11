import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setTitle } from '../store/commonSlice';

const Notfound = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setTitle('URL Not Found'));
  })
  
  return (
    <span>Not Found</span>
  );
}

export default Notfound;
