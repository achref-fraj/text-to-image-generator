import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="footer-body font-Display absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center md:text-base text-sm mb-6 md:mb-0">

           
        </motion.div>
    );
};

export default Footer;

