interface Props {
  tag: string
}
const TagIcon = ({ tag }: Props) => {
  return (
    <div className="border border-neutral-600 rounded-md text-center p-0.5">
      {tag}
    </div>
  )
}

export default TagIcon