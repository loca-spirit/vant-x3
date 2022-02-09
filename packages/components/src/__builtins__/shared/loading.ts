import { Toast } from 'vant'

export const loading = async (
  loadingText = 'Loading...',
  processor: () => Promise<any>
) => {
  let loadingInstance = null as any
  const loading = setTimeout(() => {
    loadingInstance = Toast.loading(loadingText)
  }, 100)
  try {
    return await processor()
  } finally {
    Toast.clear()
    clearTimeout(loading)
  }
}
