export interface Routes {
  path: string
  component: () => JSX.Element
  header: {
    tab?: string
    title: string | JSX.Element
    color?: string
    banner: string
  }
}
