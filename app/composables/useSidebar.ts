export const useSidebar = () => {
	const lgAndUp = useMediaQuery('(min-width: 1024px)') // lg breakpoint
	const sidebarWidth = useCssVar('--sidebar-width')
	const isMobileSidebarOpen = useState('isMobileSidebarOpen', () => false)

	function toggle() {
		const isMobile = !lgAndUp.value

		if (isMobile) {
			isMobileSidebarOpen.value = !isMobileSidebarOpen.value
		} else {
			sidebarWidth.value = sidebarWidth.value === '0px' ? '256px' : '0px'
		}
	}

	return { isMobileSidebarOpen, toggle }
}
