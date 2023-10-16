export default function UploadImages() {
  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    return { success: true }
  }

  return (
    <main>
      <h1>Upload your metadata.jsonl of midjourney images</h1>
      <form action={upload}>
        <input type="file" accept=".jsonl" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  )
}