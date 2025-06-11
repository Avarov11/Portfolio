# 3D Models Directory

Place your GLB/GLTF files here to use them in your portfolio.

## How to add your 3D model:

1. **Upload your GLB file** to this `public/models/` directory
2. **Update the model path** in `src/components/Hero3D.tsx`:
   ```tsx
   <Model3D 
     modelPath="/models/your-model-name.glb" 
     className="w-full h-96"
     autoRotate={true}
     scale={1}
   />
   ```

## Supported formats:
- `.glb` (recommended - single file)
- `.gltf` (with separate texture files)

## Tips for best performance:
- Keep file size under 10MB
- Optimize textures (1024x1024 or smaller)
- Use compressed formats when possible
- Test on different devices

## Free 3D models resources:
- Sketchfab (free models)
- Poly Haven
- Mixamo (for characters)
- Ready Player Me (for avatars)