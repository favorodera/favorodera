export default function (url: string | URL) {
  const { public: { logoDotDev } } = useRuntimeConfig()

  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.')) {
    host = host.substring(4)
  }

  const baseUrl = `https://img.logo.dev/${host}?token=${logoDotDev}&format=webp&retina=true`

  return {
    light: `${baseUrl}&theme=dark`,
    dark: `${baseUrl}&theme=light`,
  }
}
