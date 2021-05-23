---
to: "src/components/<%= componentSize %>s/<%= name %>/index.ts"
unless_exists: true
---
export { <%= name %> } from './<%= name %>'
