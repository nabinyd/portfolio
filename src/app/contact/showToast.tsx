const showToast = (message: string, type: string) => {
    const toast = document.createElement('div')
    toast.className = `fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 p-5 bg-${type == 'success' ? 'blue' : 'red'}-400 rounded-md shadow-xl`
    toast.textContent = message
    document.body.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}

export default showToast