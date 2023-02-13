import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import { idChar } from "../store/models/characterSlice";
import { RootState, useAppDispatch } from "../store/store";
import Char from "../types/character";

const IdPage: React.FC = () => {
  //estado inicial
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const { selectChar } = useSelector((state: RootState) => state.charReducer);
  
  const [character, setCharacter] = useState<Char>({
    family: '',
    firstName: '',
    fullName: '',
    id: NaN,
    image: '',
    imageUrl: '',
    lastName: '',
    title: '',
    });
  console.log(id);
  
  //é o hook que inicializa uma funcao
  

  useEffect(() => {  
    if(selectChar){
        setCharacter(selectChar);
    }    
  }, [selectChar]);

  useEffect(() => {  
    dispatch(idChar(id));
  }, [dispatch, id]);

  console.log(character);

  return (
    <React.Fragment>
      <Navbar/>
            <Container sx={{ padding: 10, display: "flex",alignItems: "center", justifyContent: "center" }}>
                {<Card sx={{ maxWidth: 500, }}>
                    <CardMedia
                        sx={{ height: 500, width: 500 }}
                        image={character.imageUrl}
                        title={character.fullName}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" align="center"component="div">
                            {character.fullName}<br/>
                            
                        </Typography>
                        <Typography variant="body1">
                            Família: {character.family}<br/>
                            Primeiro nome: {character.firstName}<br/>
                            Sobrenome: {character.lastName}<br/>
                            Título: {character.title}
                        </Typography>                    
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>navigate('/')} size="small">Voltar</Button>
                    </CardActions>
                </Card>}
            </Container>
</React.Fragment>
  );
};

export default IdPage;