import styles from "./menu.module.css"

export default function index({
  data,
  selectedProject,
}: {
  data: { title: string; description: string }[]
  selectedProject: any
}) {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength)
  }

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description } = project
        return (
          <div
            key={i}
            className={styles.description + " " + "bg-primary dark:bg-accent-red"}
            style={{
              clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}
