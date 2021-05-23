---
to: "src/components/<%= componentSize %>s/<%= name %>/<%= name %>.tsx"
unless_exists: true
---
interface <%= name %>Props {
  text?: string
}

export const <%= name %> = ({ text }: <%= name %>Props): JSX.Element => {
  return <div>{text}</div>
}
