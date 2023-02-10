import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAll } from "../store/models/characterSlice";
import { RootState, useAppDispatch } from "../store/store";

const CharactersPage: React.FC = () => {
  //estado inicial
  const { data } = useSelector((state: RootState) => state.charReducer);

  const dispatch = useAppDispatch();

  //é o hook que inicializa uma funcao
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <React.Fragment>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.image}</td>
                <td>{item.imageUrl}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CharactersPage;
