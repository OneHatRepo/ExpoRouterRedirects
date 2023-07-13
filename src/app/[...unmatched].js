import { View } from 'react-native';
import { Link, } from "expo-router";

export default function Index() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<h1>Error 404</h1>
			<Link href="/">Back to home</Link>
		</View>
	);
}
