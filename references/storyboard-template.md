# Storyboard Template

Use this to define key states before implementation.

## Page-Load Or Timed Loop

| Beat | Time | Image State | Motion | Occlusion / Depth | Seam Notes |
| --- | --- | --- | --- | --- | --- |
| 0 | 0% |  |  |  |  |
| 1 | 10-25% |  |  |  |  |
| 2 | 25-50% |  |  |  |  |
| 3 | 50-75% |  |  |  |  |
| 4 | 75-100% |  |  |  |  |

## Scroll-Scrubbed Section

| Scroll Progress | Image State | Motion | Page Behavior | Reverse Behavior |
| --- | --- | --- | --- | --- |
| 0-10% |  |  | Section pins |  |
| 10-30% |  |  |  |  |
| 30-60% |  |  |  |  |
| 60-90% |  |  |  |  |
| 90-100% |  |  | Section releases |  |

## Card-Contained Micro-Motion

| State | Trigger | Motion | Duration | Repeat |
| --- | --- | --- | --- | --- |
| Idle |  |  |  |  |
| Active |  |  |  |  |
| Exit |  |  |  |  |

## Storyboard Rules

- Define object permanence. If an object disappears, explain why.
- Define occlusion physically. Avoid invisible blockers unless they are purely internal and never visible.
- Define reveal timing. Example: output starts when input is halfway occluded.
- Define cadence. Repeated objects should not accidentally appear to speed up or slow down.
- Define boundary treatment. Entry/exit can fade at canvas edges, but transformation moments should use physical occlusion unless approved.
