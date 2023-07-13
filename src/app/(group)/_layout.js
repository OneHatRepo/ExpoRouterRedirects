import { usePathname, Redirect, Slot, } from 'expo-router';

export default function UnauthenticatedLayout(props) {
	const pathname = usePathname();

	if (pathname === '/page2') {
		// THIS WILL THROW ERROR IN CONSOLE!!
		return <Redirect href="/page3" />
	}

	if (pathname === '/page4') {
		// THIS WORKS
		return <Redirect href="/page5" />
	}
	
	return <Slot />;
}
