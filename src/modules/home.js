import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import useRequest from '@ahooksjs/use-request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { setTitle } from '../store/commonSlice';
import { ListGroup } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState("");
  
  const getTodo = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let result = await response.json();
    return result;
  }
  
  const {
    loading: isTodo,
    data: todos,
    run: fetchTodo,
  } = useRequest(getTodo, { manual: true });
  
  const handleFavorite = (event) => {
    var id = parseInt(event.currentTarget.dataset.id)
    var _favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    
    if (_favorites.indexOf(id) > -1) {
      _favorites.splice(favorites.indexOf(id), 1);
    } else {
      _favorites.push(id);
    }
    
    localStorage.setItem("favorites", JSON.stringify(_favorites));
    setFavorites(_favorites)
  };
  
  useEffect(() => {
    dispatch(setTitle('Get Started'));
    fetchTodo();
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);
  
  return (
    <div>
      { isTodo ? (
        <span>loading .. </span>
      ) : (
        <ListGroup>
          { todos ? todos.map((todo, index) => {
            return (
              <ListGroup.Item key={index}>
                <div className="d-flex justify-content-between bd-highlight">
                  <div className="bd-highlight">
                    { todo.title }
                  </div>
                  <div className="bd-highlight" data-id={todo.id} onClick={handleFavorite}>
                    { favorites.includes(todo.id) ? (
                      <FontAwesomeIcon icon={Icons.faStar} className="fa-xs" style={{ color: 'red' }} />
                    ) : (
                      <FontAwesomeIcon icon={Icons.faStar} className="fa-xs" />
                    )}
                  </div>
                </div>
              </ListGroup.Item>
            )
          }) : (<span>empty</span>) }
        </ListGroup>
      )}
    </div>
  );
}

export default Home;
