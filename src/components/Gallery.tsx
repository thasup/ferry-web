"use client";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoIcon from "@mui/icons-material/Info";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

interface GalleryProps {
  images: {
    url: string;
    title: string;
    author: string;
  }[];
}
const Gallery = ({ images }: GalleryProps) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ py: 8, bgcolor: "#f8f8f8" }}>
      <Typography variant="h4" align="center" gutterBottom>
        ภาพบรรยากาศ สุดแสนวิเศษ
      </Typography>
      <Box sx={{ px: 2 }}>
        <ImageList variant="masonry" cols={matches ? 4 : 2} gap={8}>
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <Zoom>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={248}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={"โดย " + item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Zoom>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Gallery;
