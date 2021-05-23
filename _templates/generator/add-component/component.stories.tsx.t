---
to: "src/components/<%= componentSize %>s/<%= name %>/<%= name %>.stories.tsx"
unless_exists: true
---
import { <%= name %> } from './<%= name %>'

export default {
  title: '<%= h.changeCase.titleCase(componentSize) %>s/<%= name %>',
}

export const show<%= name %> = (): JSX.Element => <<%= name %> />
