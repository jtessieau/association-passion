import Image from "next/image"

export default function Action({ action }) {
  return (
    <article>
      <div>
        <div>
          <h3>{action.year} - {action.title}</h3>
          <p>
            {action.description}
          </p>
        </div>
        <div>
          <Image src={action.photo ?? "/assets/photos/perou-2015.jpg"} alt="Pérou" width={620} height={350} />
        </div>
      </div>
    </article>
  )
}