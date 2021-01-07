import React, { useEffect, useState } from "react";
import ProductImage from "../assets/product.png";
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

const Product = () => {
  const ease = [0.6, 0.05, -0.01, 0.99];

  const dragX = useSpring(0, { stiffness: 300, damping: 200, ease: ease });
  const progressBarWidth = useTransform(dragX, [-1150, 0], [350, 0]);
  const productScale = useTransform(dragX, [-100, 0], [1.2, 1]);

  const [motionState, setMotionState] = useState(false);
  const fadeIn = useTransform(dragX, [-100, 0], [1, 0]);
  const fadeOut = useTransform(dragX, [-60, 0], [0, 1]);

  const moveUp = useTransform(dragX, [-100, 0], [-100, 0]);
  const moveDown = useTransform(dragX, [-100, 0], [100, 0]);

  useEffect(() => {
    dragX.onChange(() => {
      dragX.get() > -100 ? setMotionState(false) : setMotionState(true);
    });
  }, [dragX]);

  const closeProductDrag = () => {
    dragX.stop();
    dragX.set(0);
  };

  return (
    <div className="product">
      <div className="product-inner">
        <div className="product-content">
          <motion.div
            style={{ translateY: moveUp }}
            className="product-content-inner"
          >
            <h4>Alfa Romeo</h4>
            <h1>Giulia Quadrifoglio</h1>
            <p>
              Alfa Romeo has returned to form with the Giulia compact executive
              saloon. And what better way to top the range than with a
              high-performance model that has been developed with input from
              Ferrari itself? The Quadrifoglio is exactly that.
            </p>
            <div className="btn-row">
              <button>Place an order</button>
              <DownArrow />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="product-slide-enlarge">
        <motion.div
          style={{ opacity: fadeIn }}
          className="background"
        ></motion.div>
        {motionState ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ ease: ease }}
              className="product-drag-header"
            >
              <div className="company-name">Alfa Romeo</div>
              <div onClick={() => closeProductDrag()} className="close">
                <Close />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence />
        )}

        <div className="product-container">
          <motion.div
            style={{ x: dragX, scale: productScale }}
            drag="x"
            dragConstraints={{ left: -1150, right: 0 }}
            dragElastic={0.05}
            className="product-image"
          >
            <img src={ProductImage} alt="product" />
          </motion.div>
        </div>
        <motion.div
          style={{ paddingBottom: moveDown }}
          className="product-drag"
        >
          <div className="product-drag-inner">
            <div className="product-drag-label">
              <motion.h6 style={{ opacity: fadeOut, x: dragX }}>
                <Chevron />
                Drag To Enlarge
              </motion.h6>
            </div>
            <div className="product-drag-progress-background">
              <motion.div
                style={{ width: progressBarWidth }}
                className="product-drag-progress"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
