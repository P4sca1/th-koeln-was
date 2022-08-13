export const useSidebar = () => {
	const isMobileSidebarOpen = useState('isMobileSidebarOpen', () => false)
	const mdAndUp = useMediaQuery('(min-width: 768px)')

	function toggle() {
		const isMobile = !mdAndUp.value

		if (isMobile) {
			isMobileSidebarOpen.value = !isMobileSidebarOpen.value
		} else {
			const root = document.documentElement
			const isOpen = root.style.getPropertyValue('--sidebar-width') !== '0px'

			if (isOpen) {
				root.style.setProperty('--sidebar-width', '0px')
			} else {
				root.style.setProperty('--sidebar-width', '256px')
			}
		}
	}

	return { isMobileSidebarOpen, toggle }
}
