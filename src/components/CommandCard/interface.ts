export default interface Props {
  command: {
    name: string
    desc: string
    url: string
    alias?: string
  }
  url?: string
  preview?: boolean
}
