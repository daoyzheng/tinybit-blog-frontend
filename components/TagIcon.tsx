interface Props {
  tag: string
}
const TagIcon = ({ tag }: Props) => {
  return (
    <div className="border border-neutral-600 rounded-md text-center p-0.5 text-red-400">
      {tag}
    </div>
  )
}

export default TagIcon