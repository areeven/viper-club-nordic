import styled from "styled-components";
import "../assets/css/global.css";
import { motion } from "framer-motion";
import images from "../assets/data/imageData";
import GalleryItem from "../components/navbar/GalleryItem";

const GalleryPage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Galleri</h1>
          <GalleryList>
            {images.map((image, index) => (
              <GalleryItem key={index} index={index} image={image} />
            ))}
          </GalleryList>
        </motion.div>
      </div>
    </>
  );
};

const GalleryList = styled.ul`
  margin: 0 16px 16px 16px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  @media (min-width: 500px) {
    margin: 0 auto;
  }
`;

export default GalleryPage;
