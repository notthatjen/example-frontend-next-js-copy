export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      {picture}
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
