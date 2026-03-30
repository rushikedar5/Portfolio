export type Project = {
    id: string,
    name: string,
    description: string,
    tags: string[],
    githubUrl: string,
    liveUrl?: string
}