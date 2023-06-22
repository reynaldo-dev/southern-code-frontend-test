import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import UseAnimations from "react-useanimations";
import active from "react-useanimations/lib/activity";

import { Photo } from "@/interfaces/photo.interface";
import { styles } from "./styles.photoView";
import { dictionary } from "@/dictionary";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface IPhotoViewProps {
  photo: Photo;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhotoView = ({ photo, isOpen, setIsOpen }: IPhotoViewProps) => {
  const { isFavoriteItem, toggleFavoriteItem } = useLocalStorage({
    photo,
  });

  const handleToggleFavoriteItem = () => {
    toggleFavoriteItem();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...styles.root,
            backgroundImage: `url(${photo?.img_src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto auto",
            backgroundPosition: "center",
          }}
        >
          <Box sx={styles.closeContainer}>
            <Button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Box sx={styles.roverNameContainer}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {photo?.rover?.name}
            </Typography>
            <UseAnimations animation={active} size={56} strokeColor="white" />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dictionary.components.card.camera}: {photo?.camera?.full_name} (
            {photo?.camera?.name})
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dictionary.components.card.earthDate}: {photo?.earth_date}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dictionary.components.card.sol}: {photo?.sol}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dictionary.components.card.landingDate}:{" "}
            {photo?.rover.landing_date}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dictionary.components.card.roverStatus}: {photo?.rover.status}
          </Typography>

          {isFavoriteItem() ? (
            <Button onClick={handleToggleFavoriteItem}>
              <FavoriteIcon sx={{ fontSize: "2rem" }} />
            </Button>
          ) : (
            <Button onClick={handleToggleFavoriteItem}>
              <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
};