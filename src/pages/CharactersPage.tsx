import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import { getAll } from "../store/models/characterSlice";
import { RootState, useAppDispatch } from "../store/store";

const CharactersPage: React.FC = () => {
  //estado inicial
  const { data } = useSelector((state: RootState) => state.charReducer);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  
  const handleOpen = (id:number) => {
    navigate('/character/'+id)
  }

  const dispatch = useAppDispatch();

  //é o hook que inicializa uma funcao
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navbar/>
      
      <Grid container spacing={2}
        sx={{
          marginTop: 8,
          
        }} >
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
                      <Button onClick={()=>handleOpen(item.id)} size="small">Ver mais</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
      </Grid>
    </React.Fragment>
  );
};

export default CharactersPage;
