import React from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Define types for dynamic imports
type ImportedComponent = React.ComponentType<any>;
type ImportedImage = string;
type ImportedData = any;

// Export utility functions for dynamic imports
export const importComponent = async (path: string): Promise<ImportedComponent> => {
  const module = await import(`../components/${path}`);
  return module.default;
};

export const importImage = async (path: string): Promise<ImportedImage> => {
  const module = await import(`../assets/${path}`);
  return module.default;
};

export const importData = async (path: string): Promise<ImportedData> => {
  const module = await import(`../data/${path}`);
  return module.default;
};

// Export commonly used libraries
export { motion, gsap };