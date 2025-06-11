const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src');

function fixImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove standalone React import if it exists
  let newContent = content.replace(/import React,?\s*{([^}]*)}?\s*from\s*['"]react['"];?/g, 'import { $1 } from "react";');
  newContent = newContent.replace(/import React\s*from\s*['"]react['"];?/g, '');
  
  // If there are no other imports from react, and we need React features, add it
  if (!newContent.includes('import {') && !newContent.includes('import React')) {
    newContent = 'import { useEffect, useState } from "react";\n' + newContent;
  }
  
  fs.writeFileSync(filePath, newContent);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      console.log(`Processing ${filePath}`);
      fixImports(filePath);
    }
  });
}

processDirectory(componentsDir); 