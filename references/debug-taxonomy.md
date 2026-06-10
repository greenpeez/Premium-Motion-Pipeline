# Debug Taxonomy

Use this when a visual issue repeats or the user reports a specific artifact.

| Symptom | Likely Layer | Evidence | Diagnostic | Fix | Preserve |
| --- | --- | --- | --- | --- | --- |
| Object looks wrong | Model / shape | Reference mismatch | Static close-up render | Adjust mesh/path/material | Approved motion timing |
| Logo looks pasted on | Model / material | No bevel/depth/shadow | Close-up with side lighting | Extrude/bevel mark | Logo proportions |
| Motion is jerky | Timing / easing / FPS | Jump between frames | Frame-step review | Smooth curve, more frames, stable cadence | Object path |
| Object teleports | Timeline / visibility | Disappears before occlusion | Frame contact sheet | Extend path or physical occlusion | Speed unless approved |
| Wrong object visible through ring | Occlusion / depth | Seen after transform boundary | Depth-isolated render | Move path behind structure or add hidden internal mask | Approved camera |
| Helper geometry visible | Mask / holdout / material | Sleeve/blocker appears | Render with helpers colored | Hide, shrink, or replace with structural occlusion | Visual design |
| Missing/floating fragments | Alpha / holdout / render material | Holes in object body | Disable masks one by one | Replace holdout with shadow/opaque material | Transparent background |
| Looks blurry in page | Export / CSS scale | Good source, soft browser | Check native dimensions and CSS | Higher-res sequence, correct scaling | Layout |

## Debug Rules

- Do not keep iterating the same visual tweak after two failed attempts.
- Inspect root cause by layer.
- Use independent hypotheses when stuck.
- Make one change per diagnostic render when possible.
- Preserve the user's explicitly approved timing, scale, camera, and style unless the bug is in that layer.
