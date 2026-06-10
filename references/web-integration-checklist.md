# Web Integration Checklist

Use before final handoff.

## Target

- Confirm exact target page/path.
- Confirm local vs deployed version.
- Confirm the asset should replace, overlay, or sit behind existing layers.

## Asset

- Correct folder.
- Correct frame count.
- Correct FPS/duration.
- Correct transparent alpha.
- Poster frame exists if needed.
- No unwanted source background.

## Page

- Desktop scale approved.
- Mobile scale approved.
- Existing background/lights preserved unless user asked to replace them.
- Text is not covered.
- Buttons remain clickable.
- Reduced-motion fallback exists when appropriate.
- Animation starts cleanly and loops cleanly.
- Boundary entry/exit treatment looks intentional.

## Final QA

- Check at least one desktop viewport and one mobile viewport.
- Inspect the critical frame where transformation/occlusion happens.
- Inspect the loop seam.
- Inspect the asset at native size if there is blur or artifacting.
