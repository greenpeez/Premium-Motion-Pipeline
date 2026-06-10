# Render Proof Ladder

Use this to avoid expensive full renders before the visual system is proven.

## Ladder

1. **Static style frame**
   - Validates art direction, camera, lighting, object scale, and materials.

2. **Single-object proof**
   - Validates one hero object or token mark before generating a full set.

3. **Object set proof**
   - Validates all repeated assets use the same conventions.

4. **Low-resolution motion proof**
   - Validates timing, paths, occlusion, and loop seam.

5. **Cropped diagnostic proof**
   - Validates a problem area without rendering the whole scene.

6. **In-page compositing proof**
   - Validates scale, alpha, layering, background, responsive behavior, and browser playback.

7. **Final export**
   - High-resolution sequence/video only after visual and page proof approval.

## Render Checks

- Frame count and FPS match intended loop duration.
- Alpha is present if compositing over page layers.
- First and last frames loop without visible reset.
- Objects entering/exiting do not teleport.
- Occluders are not visible as helper geometry.
- No source-background artifacts remain.
- Output folder and asset path are clear.
