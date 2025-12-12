import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FadeInSection = styled(motion.div).attrs({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
})`
  width: 100%;
`;

export const ScaleUpSection = styled(motion.div).attrs({
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
})`
  width: 100%;
`;
