import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
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
    dispatch(idChar(id));
  }, [dispatch, id]);

  useEffect(() => {  
    if(selectChar){
        setCharacter(selectChar);
    }    
  }, [selectChar]);

  console.log(character);

  return (
    <React.Fragment>
      <Navbar/>
                    
        <Typography variant="h1">
        {character.title}
        </Typography>
      
        {/* <Grid container spacing={2}>
            {data &&
                data.map((item) => (
                    <Grid item xs={6} md={3} gap={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        sx={{ height: 140 }}
                        image={item.imageUrl}
                        title={item.fullName}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.firstName}
                        </Typography>                    
                        </CardContent>
                        <CardActions>
                        <Button onClick={()=>navigate('/')} size="small">Voltar</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
        </Grid> */}
    </React.Fragment>
  );
};

export default IdPage;