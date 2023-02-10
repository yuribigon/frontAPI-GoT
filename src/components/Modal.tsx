import { Box, CardMedia, Modal, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Char from "../types/character";

type ModalProps = {
    id: number;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    open: boolean;
}

export const ModalMui = ({id, setModal, open}: ModalProps) => {
    const { data } = useSelector((state: RootState) => state.charReducer);
    const [item, setItem] = useState<Char | null>(null);

    useEffect(() =>{
      const character = data?.find((char)=>char.id === id) 
      if(character){
        setItem(character)
      }
    },[data, id])

    const handleClose = () => setModal(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };  

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {item?.fullName}
                </Typography>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item?.imageUrl}
                  title={item?.fullName}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Família: {item?.family}<br/>
                  Primeiro Nome: {item?.firstName}<br/>
                  Título: {item?.title}
                </Typography>
            </Box>
        </Modal>
    )
}